// Core application constants
export const APP_CONFIG = {
  TITLE: {
    DEFAULT: "Developer Portfolio — Futuristic",
    TEMPLATE: "%s — Dev Portfolio",
  },
  DESCRIPTION: "Minimal, futuristic developer portfolio and blog.",
  URL: "https://example.com",
} as const;

// Spotlight configuration
export const SPOTLIGHT_CONFIG = {
  size: 900,
  blur: 60,
  color: 'default' as const,
  OPACITY: 0.38,
  EASING: 0.22,
  EPSILON: 0.08, // snapping threshold in px
} as const;

// Animation timings (in ms)
export const ANIMATION_DURATIONS = {
  SPOTLIGHT_OPACITY: 900,
  SPOTLIGHT_BACKGROUND: 1400,
  BUTTON_TRANSFORM: 250,
  BUTTON_SHADOW: 250,
  LINK_TRANSFORM: 350,
  LINK_OPACITY: 350,
  PAGE_TRANSITION: 400,
  RISE_IN: 700,
} as const;

// Animation delays for staggered rise effect (in ms)
export const RISE_DELAYS = {
  RISE_1: 80,
  RISE_2: 160,
  RISE_3: 240,
  RISE_4: 320,
} as const;

// Color values
export const COLORS = {
  CYAN: 'rgba(0,229,255',
  PURPLE: 'rgba(154,77,255',
  WHITE: 'rgba(255,255,255',
} as const;

// Gradient stops for spotlight
export const SPOTLIGHT_GRADIENTS = {
  CYAN: `radial-gradient(circle, rgba(0,229,255,0.14) 0%, rgba(0,229,255,0.065) 38%, rgba(0,229,255,0.025) 62%, rgba(0,229,255,0.0) 78%)`,
  PURPLE: `radial-gradient(circle, rgba(154,77,255,0.14) 0%, rgba(154,77,255,0.065) 38%, rgba(154,77,255,0.025) 62%, rgba(154,77,255,0.0) 78%)`,
  DEFAULT: `radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.055) 38%, rgba(255,255,255,0.02) 62%, rgba(255,255,255,0.0) 78%)`,
} as const;

// Social links
export const SOCIAL_LINKS = {
  EMAIL: "mailto:manuvikashs@gmail.com",
  LINKEDIN: "https://www.linkedin.com/in/manuvikash",
  GITHUB: "https://github.com/manuvikash",
} as const;

// Block animation configuration
export const BLOCK_CONFIG = {
  COUNT: 3,
  WIDTH: 34,
  HEIGHT: 34,
  ANIMATION_DURATION: 3200, // ms
} as const;
