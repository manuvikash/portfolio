import ExperienceTabs from "../../components/ExperienceTabs";
import React from "react";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto py-10 sm:py-16 relative overflow-visible">
      <section className="rise rise-1 text-center sm:text-left">
        <h1 className="text-3xl sm:text-6xl font-bold glow">Hi, I'm <span style={{color:"var(--neon-cyan)"}}>Manuvikash Saravanakumar</span>.</h1>
        <p className="mt-3 sm:mt-4 text-[color:var(--fg-dim)] max-w-2xl text-sm sm:text-base">
          Product‑minded software engineer focused on performant web apps, robust systems, and delightful UX.
        </p>
        <div className="mt-5 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
          <a className="button-primary" href="#projects">View Projects</a>
          <a className="button-ghost" href="/blog">Read the Blog</a>
          <a className="button-ghost" href="#contact">Get in touch</a>
        </div>
      </section>

      <section id="about" className="mt-12 sm:mt-16 rise rise-2">
        <h2 className="text-2xl font-semibold mb-4 glow">About</h2>
        <p className="text-[color:var(--fg-dim)] max-w-3xl text-sm sm:text-base">I'm a software engineer in San Jose, CA (GPA 3.75/4) who blends thoughtful UX with strong engineering fundamentals. I value clarity, performance, and maintainability. Recent focus: Next.js, React 19, TypeScript.</p>
      </section>

      <section id="experience" className="mt-12 sm:mt-16 rise rise-2">
        <h2 className="text-2xl font-semibold mb-4 glow">Experience</h2>
        <ExperienceTabs />
      </section>

      <section id="projects" className="mt-12 sm:mt-16 rise rise-2">
        <h2 className="text-2xl font-semibold mb-4 glow">Featured Projects</h2>
        <div className="grid-auto-fit">
          <article className="card p-5">
            <h3 className="font-semibold">Campus‑wide Cafeteria App</h3>
            <p className="mt-2 text-[color:var(--fg-dim)]">Docker, Flutter, MS‑SQL, Express.js</p>
            <ul className="mt-2 list-disc pl-5 text-[color:var(--fg-dim)] space-y-1 text-sm sm:text-base">
              <li>Streamlined ordering and queue management; added demand forecasting for kitchens.</li>
              <li>Cut daily food wastage by ~12% via better inventory planning.</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a className="link" href="#">Live</a>
              <a className="link" href="#">Code</a>
            </div>
          </article>
          <article className="card p-5">
            <h3 className="font-semibold">ICAMM International Conference Website</h3>
            <p className="mt-2 text-[color:var(--fg-dim)]">React, TypeScript, Express.js, MongoDB — Team Lead</p>
            <ul className="mt-2 list-disc pl-5 text-[color:var(--fg-dim)] space-y-1 text-sm sm:text-base">
              <li>Built full‑stack site for details, registrations, and submissions with CI testing.</li>
              <li>Zero production downtime during conference.</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a className="link" href="#">Live</a>
              <a className="link" href="#">Code</a>
            </div>
          </article>
        </div>
      </section>

      <section id="skills" className="mt-12 sm:mt-16 rise rise-2">
        <h2 className="text-2xl font-semibold mb-4 glow">Skills</h2>
        <div className="card p-4 sm:p-5">
          <p className="text-[color:var(--fg-dim)] text-sm sm:text-base">
            <span className="font-semibold">Languages:</span> Python, C, C#, Java, JavaScript/HTML/CSS, TypeScript, SQL, Bash, Dart
          </p>
          <p className="text-[color:var(--fg-dim)] mt-2 text-sm sm:text-base">
            <span className="font-semibold">Technologies:</span> React, Express.js, Node.js, Cypress, Monorepo, Micro‑services, SOA, REST, gRPC
          </p>
          <p className="text-[color:var(--fg-dim)] mt-2 text-sm sm:text-base">
            <span className="font-semibold">Tools & Platforms:</span> Git, Docker, MongoDB, MySQL, Firebase, CI/CD, Jenkins, Postman, Grafana, G‑Suite
          </p>
          <p className="text-[color:var(--fg-dim)] mt-2 text-sm sm:text-base">
            <span className="font-semibold">AI Tools:</span> Cursor, Windsurf, Roo Code, Gemini CLI, Langchain, Lovable, N8N, NotebookLM
          </p>
        </div>
      </section>

      <section id="contact" className="mt-12 sm:mt-16 rise rise-3">
        <h2 className="text-2xl font-semibold mb-4 glow">Get in touch</h2>
        <p className="text-[color:var(--fg-dim)] max-w-3xl text-sm sm:text-base">Open to internships and roles where I can ship impactful, user‑centric software.</p>
        <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
          <a className="button-primary" href="mailto:manuvikashs@gmail.com">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="mr-2">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Email me
          </a>
          <a className="button-ghost" href="https://github.com/manuvikash" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="mr-2">
              <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.51 10.41.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.66-3.71-1.29-3.71-1.29-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.1.08 1.68 1.14 1.68 1.14.97 1.67 2.55 1.19 3.17.91.1-.7.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.41 0-1.19.43-2.17 1.14-2.94-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.01 1.12A10.5 10.5 0 0 1 12 6.8c.93 0 1.87.13 2.74.38 2.09-1.42 3.01-1.12 3.01-1.12.6 1.52.22 2.64.11 2.92.71.77 1.14 1.75 1.14 2.94 0 4.2-2.58 5.13-5.04 5.4.39.33.74.98.74 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.2.64.76.53A10.53 10.53 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z"/>
            </svg>
            GitHub
          </a>
          <a className="button-ghost" href="https://www.linkedin.com/manuvikash/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="mr-2">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4zM8 8h3.8v2.05h.05C12.62 8.74 14.4 8 16.5 8 21.14 8 22 10.74 22 15.06V23h-4v-6.98c0-1.66-.03-3.79-2.31-3.79-2.31 0-2.67 1.8-2.67 3.66V23H9v-15z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </section>
  </div>
  );
}
