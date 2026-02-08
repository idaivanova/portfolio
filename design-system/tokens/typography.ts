// ============================================
// Typography Tokens - Based on Figma Design System
// ============================================

// Font Families
export const fontFamily = {
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
  mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
  display: ['Inter', 'system-ui', 'sans-serif'], // Can be customized for headings
} as const;

// Font Weights
export const fontWeight = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const;

// Font Sizes (in rem units for scalability)
// Based on 16px base font size
export const fontSize = {
  xs: '0.75rem',      // 12px
  sm: '0.875rem',     // 14px
  base: '1rem',       // 16px
  lg: '1.125rem',     // 18px
  xl: '1.25rem',      // 20px
  '2xl': '1.5rem',    // 24px
  '3xl': '1.875rem',  // 30px
  '4xl': '2.25rem',   // 36px
  '5xl': '3rem',      // 48px
  '6xl': '3.75rem',   // 60px
  '7xl': '4.5rem',    // 72px
  '8xl': '6rem',      // 96px
  '9xl': '8rem',      // 128px
} as const;

// Line Heights
export const lineHeight = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

// Letter Spacing
export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

// ============================================
// Typography Presets
// Based on Figma text elements and hierarchy
// ============================================

// Heading Styles
export const heading = {
  h1: {
    fontSize: fontSize['5xl'],    // 48px
    fontWeight: fontWeight.bold,   // 700
    lineHeight: lineHeight.tight,  // 1.25
    letterSpacing: letterSpacing.tight,
  },
  h2: {
    fontSize: fontSize['4xl'],     // 36px
    fontWeight: fontWeight.bold,   // 700
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  h3: {
    fontSize: fontSize['3xl'],     // 30px
    fontWeight: fontWeight.semibold, // 600
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  },
  h4: {
    fontSize: fontSize['2xl'],     // 24px
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  },
  h5: {
    fontSize: fontSize.xl,         // 20px
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  },
  h6: {
    fontSize: fontSize.lg,         // 18px
    fontWeight: fontWeight.medium, // 500
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },
} as const;

// Body Text Styles
export const body = {
  large: {
    fontSize: fontSize.lg,         // 18px
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.relaxed,
    letterSpacing: letterSpacing.normal,
  },
  default: {
    fontSize: fontSize.base,       // 16px
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.relaxed,
    letterSpacing: letterSpacing.normal,
  },
  small: {
    fontSize: fontSize.sm,         // 14px
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  xs: {
    fontSize: fontSize.xs,         // 12px
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },
} as const;

// UI Label Styles (for buttons, nav, etc.)
export const label = {
  large: {
    fontSize: fontSize.base,       // 16px
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.none,
    letterSpacing: letterSpacing.wide,
    textTransform: 'uppercase' as const,
  },
  default: {
    fontSize: fontSize.sm,         // 14px
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.none,
    letterSpacing: letterSpacing.wide,
    textTransform: 'uppercase' as const,
  },
  small: {
    fontSize: fontSize.xs,         // 12px
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.none,
    letterSpacing: letterSpacing.wider,
    textTransform: 'uppercase' as const,
  },
} as const;

// UI Specific Styles
export const ui = {
  button: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.none,
    letterSpacing: letterSpacing.wide,
  },
  nav: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.none,
    letterSpacing: letterSpacing.wide,
    textTransform: 'uppercase' as const,
  },
  caption: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },
  overline: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.none,
    letterSpacing: letterSpacing.widest,
    textTransform: 'uppercase' as const,
  },
} as const;

// Display/Hero Styles (for welcome sections)
export const display = {
  hero: {
    fontSize: fontSize['6xl'],     // 60px
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tighter,
  },
  headline: {
    fontSize: fontSize['5xl'],     // 48px
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  title: {
    fontSize: fontSize['4xl'],     // 36px
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
} as const;

// Project Card Specific
export const project = {
  title: {
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.snug,
  },
  tag: {
    fontSize: fontSize.xs,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.none,
    letterSpacing: letterSpacing.wider,
    textTransform: 'uppercase' as const,
  },
  description: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.relaxed,
  },
} as const;

// Responsive Typography (for mobile/desktop adjustments)
export const responsive = {
  h1: {
    mobile: fontSize['3xl'],       // 30px
    desktop: fontSize['5xl'],      // 48px
  },
  h2: {
    mobile: fontSize['2xl'],       // 24px
    desktop: fontSize['4xl'],      // 36px
  },
  h3: {
    mobile: fontSize.xl,           // 20px
    desktop: fontSize['3xl'],      // 30px
  },
  hero: {
    mobile: fontSize['4xl'],       // 36px
    desktop: fontSize['6xl'],      // 60px
  },
} as const;

// ============================================
// Export All Typography Tokens
// ============================================

export const typography = {
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
  heading,
  body,
  label,
  ui,
  display,
  project,
  responsive,
} as const;

// Helper type for font sizes
export type FontSize = keyof typeof fontSize;
export type FontWeight = keyof typeof fontWeight;
export type LineHeight = keyof typeof lineHeight;
export type LetterSpacing = keyof typeof letterSpacing;

export default typography;
