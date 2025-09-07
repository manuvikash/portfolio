'use client';

import { SOCIAL_LINKS, BLOCK_CONFIG } from '../lib/constants';

export default function UnderConstruction() {
  return (
    <div className="landing min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl sm:text-6xl font-bold glow mb-4 rise rise-1">
        <span style={{ color: 'var(--neon-cyan)' }}>Under</span> Construction
      </h1>

      {/* Minimal build motif placed beneath the title for hierarchy clarity */}
      <div className="build-minimal mt-2 mb-10 rise rise-2" aria-hidden>
        <div className="block b1" />
        <div className="block b2" />
        <div className="block b3" />
      </div>

      <p className="text-[color:var(--fg-dim)] max-w-xl mx-auto mb-10 text-sm sm:text-base rise rise-3">
        Quietly shaping the next iteration. No progress bars—just steady improvement.
      </p>

      <div className="flex flex-wrap gap-4 justify-center rise rise-4">
        <a href={SOCIAL_LINKS.EMAIL} className="button-ghost btn-flat">Contact</a>
        <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noreferrer" className="button-primary flex items-center gap-2 btn-flat">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M4.98 3.5c0 1.38-1.14 2.5-2.54 2.5C1.14 6 0 4.88 0 3.5 0 2.12 1.14 1 2.44 1c1.4 0 2.54 1.12 2.54 2.5zM.22 8.47h4.44V23H.22V8.47zM8.73 8.47h4.26v2h.06c.59-1.12 2.02-2.3 4.16-2.3 4.45 0 5.27 2.9 5.27 6.67V23h-4.44v-6.67c0-1.59-.03-3.64-2.22-3.64-2.22 0-2.56 1.73-2.56 3.52V23H8.73V8.47z"/></svg>
          LinkedIn
        </a>
        <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noreferrer" className="button-ghost btn-flat">GitHub</a>
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
