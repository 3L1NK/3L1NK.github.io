import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const SUBMIT_COOLDOWN_MS = 30_000;

const Contact = () => {
  const { alert, showAlert } = useAlert();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState({});
  const lastSubmitAt = useRef(0);
  const lastSubmittedMessage = useRef('');

  const handleChange = ({ target: { name, value } }) => {
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [name]: '' }));
  };

  const validateForm = () => {
    const trimmedForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };
    const nextErrors = {};

    if (!trimmedForm.name) nextErrors.name = 'Please enter your name.';
    if (!trimmedForm.email) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedForm.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!trimmedForm.message) nextErrors.message = 'Please enter a message.';

    setErrors(nextErrors);
    return { trimmedForm, isValid: Object.keys(nextErrors).length === 0 };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (honeypot) {
      showAlert({
        text: 'Sorry, your message could not be sent. Please try again.',
        type: 'danger',
      });
      return;
    }

    const { trimmedForm, isValid } = validateForm();
    if (!isValid) {
      showAlert({ text: 'Please check the highlighted fields.', type: 'danger' });
      return;
    }

    const submission = JSON.stringify(trimmedForm);
    const now = Date.now();
    if (submission === lastSubmittedMessage.current) {
      showAlert({ text: 'This message has already been sent.', type: 'danger' });
      return;
    }
    if (now - lastSubmitAt.current < SUBMIT_COOLDOWN_MS) {
      const seconds = Math.ceil((SUBMIT_COOLDOWN_MS - (now - lastSubmitAt.current)) / 1000);
      showAlert({
        text: `Please wait ${seconds} seconds before sending another message.`,
        type: 'danger',
      });
      return;
    }

    lastSubmitAt.current = now;
    setLoading(true);

    try {
      if (['localhost', '127.0.0.1'].includes(window.location.hostname)) {
        throw new Error('Netlify Forms delivery is only available on the deployed site.');
      }

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(formRef.current)).toString(),
      });

      if (!response.ok) throw new Error(`Netlify Forms responded with ${response.status}`);

      lastSubmittedMessage.current = submission;
      setForm({ name: '', email: '', message: '' });
      setErrors({});
      showAlert({
        text: 'Thank you for your message. I will get back to you soon.',
        type: 'success',
      });
    } catch (error) {
      console.error('Netlify Forms contact form error:', error);
      showAlert({
        text: 'Sorry, your message could not be sent. Please try again after the site is deployed.',
        type: 'danger',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container">
          <h3 className="head-text">Let&apos;s connect</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you want to share feedback or bring a unique project to life, I&apos;m happy to connect.
          </p>

          <form
            ref={formRef}
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            noValidate
            className="mt-12 flex flex-col space-y-7"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="contact-bot-field">Leave this field empty</label>
              <input
                id="contact-bot-field"
                type="text"
                name="bot-field"
                value={honeypot}
                onChange={(event) => setHoneypot(event.target.value)}
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            <label className="space-y-3">
              <span className="field-label" id="contact-name-label">Full Name</span>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="field-input"
                placeholder="ex., John Doe"
                aria-labelledby="contact-name-label"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
              />
              {errors.name && <span id="contact-name-error" className="text-red-400 text-sm">{errors.name}</span>}
            </label>

            <label className="space-y-3">
              <span className="field-label" id="contact-email-label">Email address</span>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
                aria-labelledby="contact-email-label"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
              />
              {errors.email && <span id="contact-email-error" className="text-red-400 text-sm">{errors.email}</span>}
            </label>

            <label className="space-y-3">
              <span className="field-label" id="contact-message-label">Your message</span>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
                aria-labelledby="contact-message-label"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
              />
              {errors.message && <span id="contact-message-error" className="text-red-400 text-sm">{errors.message}</span>}
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
