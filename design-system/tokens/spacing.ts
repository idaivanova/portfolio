// ============================================
// Spacing & Sizing Tokens - Based on Figma Design System
// ============================================

// Base unit is 4px (0.25rem)
// All spacing values are multiples of 4

export const spacing = {
  0: '0',
  0.5: '0.125rem',   // 2px
  1: '0.25rem',      // 4px - Base unit
  1.5: '0.375rem',   // 6px
  2: '0.5rem',       // 8px
  2.5: '0.625rem',   // 10px
  3: '0.75rem',      // 12px
  3.5: '0.875rem',   // 14px
  4: '1rem',         // 16px
  5: '1.25rem',      // 20px
  6: '1.5rem',       // 24px
  7: '1.75rem',      // 28px
  8: '2rem',         // 32px
  9: '2.25rem',      // 36px
  10: '2.5rem',      // 40px
  11: '2.75rem',     // 44px
  12: '3rem',        // 48px
  14: '3.5rem',      // 56px
  16: '4rem',        // 64px
  20: '5rem',        // 80px
  24: '6rem',        // 96px
  28: '7rem',        // 112px
  32: '8rem',        // 128px
  36: '9rem',        // 144px
  40: '10rem',       // 160px
  44: '11rem',       // 176px
  48: '12rem',       // 192px
  52: '13rem',       // 208px
  56: '14rem',       // 224px
  60: '15rem',       // 240px
  64: '16rem',       // 256px
  72: '18rem',       // 288px
  80: '20rem',       // 320px
  96: '24rem',       // 384px
} as const;

// Section Spacing (vertical rhythm)
export const section = {
  xs: spacing[8],    // 32px
  sm: spacing[12],   // 48px
  md: spacing[16],   // 64px
  lg: spacing[20],   // 80px
  xl: spacing[24],   // 96px
  '2xl': spacing[32], // 128px
  '3xl': spacing[40], // 160px
  '4xl': spacing[48], // 192px
} as const;

// Component-specific spacing
export const component = {
  button: {
    paddingX: {
      sm: spacing[3],  // 12px
      md: spacing[4],  // 16px
      lg: spacing[6],  // 24px
    },
    paddingY: {
      sm: spacing[1.5], // 6px
      md: spacing[2],   // 8px
      lg: spacing[3],   // 12px
    },
    gap: spacing[2],    // 8px (for icons + text)
  },
  card: {
    padding: {
      sm: spacing[4],   // 16px
      md: spacing[6],   // 24px
      lg: spacing[8],   // 32px
    },
    gap: spacing[4],    // 16px
  },
  input: {
    paddingX: spacing[3], // 12px
    paddingY: spacing[2], // 8px
    height: {
      sm: spacing[8],   // 32px
      md: spacing[10],  // 40px
      lg: spacing[12],  // 48px
    },
  },
  nav: {
    height: spacing[16],     // 64px
    itemGap: spacing[6],     // 24px
    mobileItemGap: spacing[4], // 16px
  },
} as const;

// Container/Layout spacing
export const container = {
  padding: {
    sm: spacing[4],   // 16px - Mobile
    md: spacing[6],   // 24px - Tablet
    lg: spacing[8],   // 32px - Desktop
    xl: spacing[12],  // 48px - Large desktop
  },
  maxWidth: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  gap: {
    sm: spacing[4],   // 16px
    md: spacing[6],   // 24px
    lg: spacing[8],   // 32px
    xl: spacing[12],  // 48px
  },
} as const;

// Grid spacing
export const grid = {
  gap: {
    xs: spacing[2],   // 8px
    sm: spacing[4],   // 16px
    md: spacing[6],   // 24px
    lg: spacing[8],   // 32px
    xl: spacing[12],  // 48px
  },
} as const;

// Border Radius
export const borderRadius = {
  none: '0',
  sm: '0.125rem',    // 2px
  base: '0.25rem',   // 4px
  md: '0.375rem',    // 6px
  lg: '0.5rem',      // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  '3xl': '1.5rem',   // 24px
  full: '9999px',
} as const;

// Sizing (width/height)
export const size = {
  icon: {
    xs: spacing[3],    // 12px
    sm: spacing[4],    // 16px
    md: spacing[5],    // 20px
    lg: spacing[6],    // 24px
    xl: spacing[8],    // 32px
    '2xl': spacing[10], // 40px
  },
  avatar: {
    xs: spacing[6],    // 24px
    sm: spacing[8],    // 32px
    md: spacing[10],   // 40px
    lg: spacing[12],   // 48px
    xl: spacing[16],   // 64px
    '2xl': spacing[20], // 80px
  },
  image: {
    thumbnail: '120px',
    small: '200px',
    medium: '320px',
    large: '480px',
    full: '100%',
  },
} as const;

// Z-Index scale
export const zIndex = {
  hide: -1,
  base: 0,
  docked: 10,
  dropdown: 100,
  sticky: 200,
  banner: 300,
  overlay: 400,
  modal: 500,
  popover: 600,
  tooltip: 700,
} as const;

// Responsive breakpoints (in pixels)
export const breakpoint = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Animation durations
export const duration = {
  instant: '0ms',
  fast: '150ms',
  normal: '250ms',
  slow: '350ms',
  slower: '500ms',
} as const;

// Easing functions
export const easing = {
  linear: 'linear',
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  // Custom cubic bezier curves
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  bouncy: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
} as const;

// ============================================
// Export All Spacing Tokens
// ============================================

export const tokens = {
  spacing,
  section,
  component,
  container,
  grid,
  borderRadius,
  size,
  zIndex,
  breakpoint,
  duration,
  easing,
} as const;

// Helper types
export type Spacing = keyof typeof spacing;
export type SectionSpacing = keyof typeof section;
export type BorderRadius = keyof typeof borderRadius;
export type Duration = keyof typeof duration;
export type Easing = keyof typeof easing;

export default tokens;
