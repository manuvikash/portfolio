'use client';

import { SOCIAL_LINKS, BLOCK_CONFIG } from '../lib/constants';

export default function UnderConstruction() {
  return (
    <div className="landing min-h-[100svh] flex flex-col items-center justify-center text-center px-4 sm:px-6">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold glow mb-3 sm:mb-4 rise rise-1 leading-tight">
        <span style={{ color: 'var(--neon-cyan)' }}>Under</span> Construction
      </h1>

      {/* Minimal build motif placed beneath the title for hierarchy clarity */}
      <div className="build-minimal mt-1 sm:mt-2 mb-6 sm:mb-8 lg:mb-10 rise rise-2 scale-75 sm:scale-100" aria-hidden>
        <div className="block b1" />
        <div className="block b2" />
        <div className="block b3" />
      </div>

      <p className="text-[color:var(--fg-dim)] max-w-sm sm:max-w-xl mx-auto mb-6 sm:mb-8 lg:mb-10 text-sm sm:text-base leading-relaxed px-2 rise rise-3">
        I'm currently rebuilding my portfolio. <br/> Meanwhile, feel free to connect with me!
      </p>

      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center rise rise-4 w-full max-w-sm sm:max-w-none">
        <a 
          href="mailto:manuvikashs@gmail.com" 
          className="button-ghost btn-flat flex items-center justify-center gap-2 w-full sm:w-auto min-w-[120px]"
          style={{ pointerEvents: 'auto', position: 'relative', zIndex: 200 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          Email
        </a>
        <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noreferrer" className="button-primary flex items-center justify-center gap-2 btn-flat w-full sm:w-auto min-w-[120px]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M4.98 3.5c0 1.38-1.14 2.5-2.54 2.5C1.14 6 0 4.88 0 3.5 0 2.12 1.14 1 2.44 1c1.4 0 2.54 1.12 2.54 2.5zM.22 8.47h4.44V23H.22V8.47zM8.73 8.47h4.26v2h.06c.59-1.12 2.02-2.3 4.16-2.3 4.45 0 5.27 2.9 5.27 6.67V23h-4.44v-6.67c0-1.59-.03-3.64-2.22-3.64-2.22 0-2.56 1.73-2.56 3.52V23H8.73V8.47z"/></svg>
          LinkedIn
        </a>
        <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noreferrer" className="button-ghost btn-flat flex items-center justify-center gap-2 w-full sm:w-auto min-w-[120px]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>

      <style jsx>{`
        .build-minimal {
          display: flex;
          width: 130px;
          height: 90px;
          align-items: flex-end;
          justify-content: space-between;
          position: relative;
        }
        
        /* Mobile-first responsive adjustments */
        @media (max-width: 480px) {
          .build-minimal {
            width: 100px;
            height: 70px;
          }
        }
        
        /* Flatten buttons (remove glow/box-shadow) only on landing */
        .landing .btn-flat.button-primary {
          box-shadow: none;
          background: linear-gradient(135deg, color-mix(in oklab, var(--neon-cyan) 70%, #0a0a1a), color-mix(in oklab, var(--neon-purple) 55%, #0a0a1a));
          border: 1px solid color-mix(in oklab, var(--neon-cyan) 26%, transparent);
        }
        .landing .btn-flat.button-ghost {
          box-shadow: none;
          background: linear-gradient(180deg, rgba(255,255,255,0.015), rgba(255,255,255,0.0));
          border-color: color-mix(in oklab, var(--neon-purple) 26%, transparent);
        }
        .landing .btn-flat.button-primary:hover,
        .landing .btn-flat.button-ghost:hover { box-shadow: none; transform: translateY(-2px); }
        
        /* Mobile responsive buttons */
        @media (max-width: 480px) {
          .landing .btn-flat {
            padding: 12px 16px;
            font-size: 14px;
            width: 100%;
            justify-content: center;
          }
        }
        
        .block {
          width: ${BLOCK_CONFIG.WIDTH}px; height: ${BLOCK_CONFIG.HEIGHT}px; position: relative; border: 1px solid var(--neon-cyan);
          border-radius: 6px; background: linear-gradient(140deg,#0d1320,#132132);
          box-shadow: 0 0 8px -2px var(--neon-cyan),0 0 2px var(--neon-cyan) inset;
          animation-duration: ${BLOCK_CONFIG.ANIMATION_DURATION}ms; animation-iteration-count: infinite; animation-timing-function: ease-in-out;
          will-change: transform, box-shadow;
        }
        .block:after { content:""; position:absolute; inset:2px; border-radius:4px; background:linear-gradient(160deg,rgba(0,255,255,0.08),rgba(128,0,255,0.05)); }
        .b1 { animation-name: floatA; }
        .b2 { animation-name: floatB; }
        .b3 { animation-name: floatC; }
        @keyframes floatA { 0%,100% { transform: translateY(0); } 20% { transform: translateY(-14px); } 50% { transform: translateY(-4px); } 70% { transform: translateY(-18px);} }
        @keyframes floatB { 0%,100% { transform: translateY(-6px); } 25% { transform: translateY(-18px);} 55% { transform: translateY(-2px);} 80% { transform: translateY(-20px);} }
        @keyframes floatC { 0%,100% { transform: translateY(-2px);} 15% { transform: translateY(-22px);} 45% { transform: translateY(-6px);} 75% { transform: translateY(-16px);} }
        @media (prefers-reduced-motion: reduce) { .block { animation: none; } }
      `}</style>
    </div>
  );
}
