'use client';

import React, { useEffect, useRef } from "react";
import { SPOTLIGHT_CONFIG, SPOTLIGHT_GRADIENTS, ANIMATION_DURATIONS } from "../lib/constants";

interface CursorSpotlightProps {
  size?: number;
  blur?: number;
  color?: 'cyan' | 'purple' | 'default';
}

export default function CursorSpotlight({ 
  size = SPOTLIGHT_CONFIG.size, 
  blur = SPOTLIGHT_CONFIG.blur,
  color = SPOTLIGHT_CONFIG.color
}: CursorSpotlightProps) {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number | null = null;
    let targetX = -9999;
    let targetY = -9999;
    let currentX = targetX;
    let currentY = targetY;
    const { EASING, EPSILON } = SPOTLIGHT_CONFIG;

    const step = () => {
      const el = spotlightRef.current;
      if (!el) { rafId = null; return; }
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      const dist2 = dx * dx + dy * dy;
      if (dist2 < EPSILON * EPSILON) {
        // Snap to exact target and stop animating (prevents perpetual subpixel drift flicker)
        currentX = targetX;
        currentY = targetY;
        el.style.transform = `translate(${Math.round(currentX - size / 2)}px, ${Math.round(currentY - size / 2)}px)`;
        rafId = null;
        return;
      }
      currentX += dx * EASING;
      currentY += dy * EASING;
      el.style.transform = `translate(${Math.round(currentX - size / 2)}px, ${Math.round(currentY - size / 2)}px)`;
      rafId = requestAnimationFrame(step);
    };

    const ensureAnimating = () => { if (rafId == null) rafId = requestAnimationFrame(step); };

    const move = (x: number, y: number) => {
      targetX = x;
      targetY = y;
      // First reveal jumps instantly (off-screen sentinel)
      if (currentX === -9999 && currentY === -9999) {
        currentX = targetX;
        currentY = targetY;
        const el = spotlightRef.current;
        if (el) {
          el.style.transform = `translate(${Math.round(currentX - size / 2)}px, ${Math.round(currentY - size / 2)}px)`;
        }
      }
      ensureAnimating();
    };

    const handlePointerMove = (e: PointerEvent) => move(e.clientX, e.clientY);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) move(e.touches[0].clientX, e.touches[0].clientY);
    };

    // Removed hover detection handlers since spotlight no longer brightens on hover

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [size]);

  let gradient: string;
  if (color === 'cyan') {
    gradient = SPOTLIGHT_GRADIENTS.CYAN;
  } else if (color === 'purple') {
    gradient = SPOTLIGHT_GRADIENTS.PURPLE;
  } else {
    gradient = SPOTLIGHT_GRADIENTS.DEFAULT;
  }

  return (
    <div
      className="cursor-spotlight"
      ref={spotlightRef}
      style={
        {
          width: size,
          height: size,
          top: 0,
          left: 0,
          transform: 'translate(-9999px,-9999px)',
          opacity: SPOTLIGHT_CONFIG.OPACITY,
          mixBlendMode: 'lighten',
          transition: `opacity ${ANIMATION_DURATIONS.SPOTLIGHT_OPACITY}ms ease, background ${ANIMATION_DURATIONS.SPOTLIGHT_BACKGROUND}ms ease`,
          background: 'transparent',
          // custom CSS variable for inner gradient
          ['--spot-gradient' as any]: gradient,
        } as React.CSSProperties
      }
    >
      <div
        className="cursor-spotlight-core"
        style={{
          width: '100%',
          height: '100%',
          background: 'var(--spot-gradient)',
          borderRadius: '50%',
          clipPath: 'circle(50% at 50% 50%)',
        }}
      />
    </div>
  );
}
