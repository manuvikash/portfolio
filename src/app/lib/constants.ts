// Core application constants
export const APP_CONFIG = {
  TITLE: {
    DEFAULT: "Manuvikash's Portfolio",
    TEMPLATE: "%s — Manuvikash's Portfolio",
  },
  DESCRIPTION: "Manuvikash's personal portfolio showcasing projects and skills.",
  URL: "https://manuvikash.cc",
} as const;

// Spotlight configuration
export const SPOTLIGHT_CONFIG = {
  size: 1000,
  blur: 50,
  color: 'default' as const,
  OPACITY: 0.45,
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
  CYAN: `radial-gradient(circle, rgba(0,229,255,0.16) 0%, rgba(0,229,255,0.08) 35%, rgba(0,229,255,0.04) 55%, rgba(0,229,255,0.016) 75%, rgba(0,229,255,0.0) 85%)`,
  PURPLE: `radial-gradient(circle, rgba(154,77,255,0.16) 0%, rgba(154,77,255,0.08) 35%, rgba(154,77,255,0.04) 55%, rgba(154,77,255,0.016) 75%, rgba(154,77,255,0.0) 85%)`,
  DEFAULT: `radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.07) 35%, rgba(255,255,255,0.035) 55%, rgba(255,255,255,0.014) 75%, rgba(255,255,255,0.0) 85%)`,
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
