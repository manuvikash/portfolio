"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
      <Link href="/" className="link font-semibold glow">manuvikash.dev</Link>

      <button
        className="md:hidden button-ghost"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          {open ? (
            <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.29 19.7 2.88 18.29 9.17 12 2.88 5.71 4.29 4.29l6.3 6.3 6.29-6.3 1.42 1.42z" />
          ) : (
            <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
          )}
        </svg>
      </button>

      <nav className="hidden md:flex items-center gap-4">
        <Link className="link" href="/">Home</Link>
        <Link className="link" href="/home">Full Portfolio</Link>
        <Link className="link" href="/blog">Blog</Link>
        <a className="button-ghost" href="/resume.pdf" download>Resume</a>
        <a className="link" href="https://www.linkedin.com/manuvikash-saravanakumar-941b76162/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4zM8 8h3.8v2.05h.05C12.62 8.74 14.4 8 16.5 8 21.14 8 22 10.74 22 15.06V23h-4v-6.98c0-1.66-.03-3.79-2.31-3.79-2.31 0-2.67 1.8-2.67 3.66V23H9v-15z"/>
          </svg>
        </a>
        <a className="link" href="https://github.com/manuvikash" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.51 10.41.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.66-3.71-1.29-3.71-1.29-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.1.08 1.68 1.14 1.68 1.14.97 1.67 2.55 1.19 3.17.91.1-.7.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.41 0-1.19.43-2.17 1.14-2.94-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.01 1.12A10.5 10.5 0 0 1 12 6.8c.93 0 1.87.13 2.74.38 2.09-1.42 3.01-1.12 3.01-1.12.6 1.52.22 2.64.11 2.92.71.77 1.14 1.75 1.14 2.94 0 4.2-2.58 5.13-5.04 5.4.39.33.74.98.74 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.2.64.76.53A10.53 10.53 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z"/>
          </svg>
        </a>
        <a className="link" href="mailto:manuvikashs@gmail.com" aria-label="Email" title="Email">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>
      </nav>

      {open && (
        <div className="absolute left-0 right-0 top-[60px] sm:top-[68px] mx-4 sm:mx-6 md:hidden z-50">
          <div className="card menu-panel p-4 flex flex-col gap-3">
            <Link className="link" href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link className="link" href="/home" onClick={() => setOpen(false)}>Full Portfolio</Link>
            <Link className="link" href="/blog" onClick={() => setOpen(false)}>Blog</Link>
            <a className="button-ghost" href="/resume.pdf" download onClick={() => setOpen(false)}>Resume</a>
            <div className="flex items-center gap-4">
              <a className="link" href="https://www.linkedin.com/manuvikash-saravanakumar-941b76162/" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4zM8 8h3.8v2.05h.05C12.62 8.74 14.4 8 16.5 8 21.14 8 22 10.74 22 15.06V23h-4v-6.98c0-1.66-.03-3.79-2.31-3.79-2.31 0-2.67 1.8-2.67 3.66V23H9v-15z"/>
                </svg>
              </a>
              <a className="link" href="https://github.com/manuvikash" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.51 10.41.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.66-3.71-1.29-3.71-1.29-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.1.08 1.68 1.14 1.68 1.14.97 1.67 2.55 1.19 3.17.91.1-.7.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.41 0-1.19.43-2.17 1.14-2.94-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.01 1.12A10.5 10.5 0 0 1 12 6.8c.93 0 1.87.13 2.74.38 2.09-1.42 3.01-1.12 3.01-1.12.6 1.52.22 2.64.11 2.92.71.77 1.14 1.75 1.14 2.94 0 4.2-2.58 5.13-5.04 5.4.39.33.74.98.74 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.2.64.76.53A10.53 10.53 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z"/>
                </svg>
              </a>
              <a className="link" href="mailto:manuvikashs@gmail.com" aria-label="Email" title="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


