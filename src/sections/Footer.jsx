import { socialLinks } from '../constants/index.js';

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          className="social-icon transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Eric Rusli on GitHub"
        >
          <img src="/assets/github.svg" alt="" aria-hidden="true" className="w-1/2 h-1/2" />
        </a>
        <a
          className="social-icon transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          href={socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="Eric Rusli on LinkedIn"
        >
          <span aria-hidden="true" className="text-lg font-bold text-white">in</span>
        </a>
        <a
          className="social-icon transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          href="#contact"
          aria-label="Open contact form"
        >
          <span aria-hidden="true" className="text-lg text-white">✉</span>
        </a>
      </div>

      <p className="text-white-500">© 2026 Eric Rusli. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
