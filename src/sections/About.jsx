import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const techStack = [
  { name: 'FastAPI', asset: '/assets/fastapi.svg', top: '25%', left: '34%' },
  { name: 'Docker', asset: '/assets/docker.png', top: '25%', left: '66%' },
  { name: 'AWS', asset: '/assets/amazon-aws.png', top: '50%', left: '82%' },
  { name: 'PostgreSQL', asset: '/assets/postgresql.svg', top: '75%', left: '66%' },
  { name: 'Airflow', asset: '/assets/apacheairflow.svg', top: '75%', left: '34%' },
  { name: 'SQL', asset: '/assets/sql.png', top: '50%', left: '18%' },
];

const About = () => {
  const [techSpinKey, setTechSpinKey] = useState(0);

  const handleTechStackSpin = () => setTechSpinKey((currentKey) => currentKey + 1);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 grid-cols-1 items-start gap-5">
        <div className="xl:col-span-2 flex flex-col gap-5">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {/* Section 1 */}
        <div className="col-span-1 self-start">
          <div className="grid-container h-fit">
            <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hello World, I’m Eric Rusli 🇮🇩</p>
              <p className="grid-subtext">
                I&apos;m an Indonesian based in Berlin, Germany. Currently, I&apos;m working full-time as an Applied AI Engineer.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="col-span-1 self-start">
          <div className="grid-container h-fit">
            <style>{`
              @keyframes tech-stage-spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }

              .tech-orbit-stage {
                transform-origin: center;
              }

              .tech-orbit-stage.is-spinning {
                animation: tech-stage-spin 900ms cubic-bezier(0.22, 1, 0.36, 1) both;
              }

              .tech-orbit-line {
                position: absolute;
                left: 50%;
                top: 50%;
                width: 88%;
                height: 52%;
                border: 1px solid rgba(103, 232, 249, 0.13);
                border-radius: 9999px;
                pointer-events: none;
              }

              .tech-orbit-line--one {
                transform: translate(-50%, -50%) rotate(22deg);
              }

              .tech-orbit-line--two {
                transform: translate(-50%, -50%) rotate(-22deg);
              }

              .tech-orbit-line--cross {
                width: 84%;
                height: 1px;
                border: 0;
                border-radius: 0;
                background: rgba(255, 255, 255, 0.08);
                transform: translate(-50%, -50%);
              }

              .tech-icon-aws {
                filter: brightness(0) saturate(100%) invert(65%) sepia(93%) saturate(1180%) hue-rotate(359deg) brightness(102%) contrast(102%);
              }

              @media (prefers-reduced-motion: reduce) {
                .tech-orbit-stage.is-spinning { animation: none; }
              }
            `}</style>

            <div
              className="relative flex min-h-[276px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-black-300/70 to-black-200"
              aria-label="Eric's tech stack: FastAPI, Python, Docker, AWS, SQL, Airflow and PostgreSQL"
              role="group"
            >
              <div className="tech-orbit-line tech-orbit-line--one" aria-hidden="true" />
              <div className="tech-orbit-line tech-orbit-line--two" aria-hidden="true" />
              <div className="tech-orbit-line tech-orbit-line--cross" aria-hidden="true" />
              <div className="absolute h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl" aria-hidden="true" />

              <div className={`tech-orbit-stage absolute inset-0 z-10 ${techSpinKey ? 'is-spinning' : ''}`} key={techSpinKey}>
                {techStack.map((technology) => (
                  <div
                    key={technology.name}
                    className="tech-orbit-bubble absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black-300/90 p-2 shadow-lg shadow-black/30 backdrop-blur-sm"
                    style={{ top: technology.top, left: technology.left }}
                  >
                    <img
                      src={technology.asset}
                      alt=""
                      className={`h-9 w-9 object-contain ${technology.name === 'AWS' ? 'tech-icon-aws' : ''}`}
                      aria-hidden="true"
                    />
                    <span className="sr-only">{technology.name}</span>
                  </div>
                ))}
              </div>

              <div className="relative z-30 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-200/30 bg-black-300/95 shadow-[0_0_35px_rgba(103,232,249,0.18)]">
                <img src="/assets/python.png" alt="" className="h-12 w-12 object-contain" aria-hidden="true" />
                <span className="sr-only">Python</span>
              </div>

              <button
                type="button"
                className="absolute inset-0 z-20 cursor-pointer rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-inset"
                onClick={handleTechStackSpin}
                aria-label="Rotate the tech stack"
              >
                <span className="sr-only">Click to rotate the technology icons once</span>
              </button>

            </div>

            <div>
              <p className="grid-headtext">Tech Stack 🧑🏻‍💻</p>
              <p className="grid-subtext">
                FastAPI, Python, Docker, AWS, SQL, Airflow and PostgreSQL for reliable AI and data products.
              </p>
            </div>
          </div>
        </div>

        </div>

        {/* Section 4 */}
        <div className="self-start">
          <div className="grid-container h-fit">
            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                Bringing ideas to life through code while exploring practical AI and data driven solutions.
              </p>
            </div>
          </div>
        </div>
        </div>

        <div className="flex flex-col gap-5">
        {/* Section 3 (Globe) */}
        <div className="col-span-1 self-start">
          <div className="grid-container h-fit">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 52.52, lng: 13.405, text: 'Berlin, Germany', color: 'white', size: 25 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Berlin, Germany and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" onClick={handleScrollToContact} />
            </div>
          </div>
        </div>
        
        {/* Section 5 (Private contact CTA) */}
        <div id="email-card" className="xl:col-span-1 self-start">
          <div className="grid-container h-fit">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full h-[126px] object-cover object-top"
            />

            <div className="space-y-2">
              <p className="grid-headtext text-center">Let&apos;s talk</p>
              <p className="grid-subtext text-center">Send a message through the contact form. My email stays private.</p>
              <Button name="Open Contact Form" isBeam containerClass="w-full mt-5" onClick={handleScrollToContact} />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
