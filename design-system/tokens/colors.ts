// ============================================
// Color Tokens - Based on Figma Design System
// Enhanced with modern design patterns
// ============================================

// Orange Palette (Primary Brand Colors)
// Extracted from Figma "Orange" frame with 4 variants
export const orange = {
  50: '#FFF7ED',
  100: '#FFEDD5',
  200: '#FED7AA',
  300: '#FDBA74',
  400: '#FB923C',
  500: '#F97316', // Default/Main orange
  600: '#EA580C',
  700: '#C2410C',
  800: '#9A3412',
  900: '#7C2D12',
  950: '#431407',
} as const;

// Purple/Violet Palette (Accent - inspired by modern design)
export const violet = {
  50: '#F5F3FF',
  100: '#EDE9FE',
  200: '#DDD6FE',
  300: '#C4B5FD',
  400: '#A78BFA',
  500: '#8B5CF6', // Primary accent
  600: '#7C3AED',
  700: '#6D28D9',
  800: '#5B21B6',
  900: '#4C1D95',
  950: '#2E1065',
} as const;

// Dark Theme Colors
// Extracted from Figma "Dark" frame
export const dark = {
  bg: {
    primary: '#0A0A0A',
    secondary: '#141414',
    tertiary: '#1F1F1F',
    elevated: '#2A2A2A',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#A1A1AA',
    tertiary: '#71717A',
    muted: '#52525B',
  },
  border: {
    default: '#27272A',
    hover: '#3F3F46',
    active: '#52525B',
  },
} as const;

// Light Theme Colors
export const light = {
  bg: {
    primary: '#FFFFFF',
    secondary: '#FAFAFA',
    tertiary: '#F4F4F5',
    elevated: '#FFFFFF',
  },
  text: {
    primary: '#18181B',
    secondary: '#3F3F46',
    tertiary: '#71717A',
    muted: '#A1A1AA',
  },
  border: {
    default: '#E4E4E7',
    hover: '#D4D4D8',
    active: '#A1A1AA',
  },
} as const;

// Semantic Colors
export const semantic = {
  success: {
    light: '#22C55E',
    dark: '#4ADE80',
    bg: '#DCFCE7',
  },
  warning: {
    light: '#F59E0B',
    dark: '#FBBF24',
    bg: '#FEF3C7',
  },
  error: {
    light: '#EF4444',
    dark: '#F87171',
    bg: '#FEE2E2',
  },
  info: {
    light: '#3B82F6',
    dark: '#60A5FA',
    bg: '#DBEAFE',
  },
} as const;

// Button Specific Colors (from Figma Button variants)
export const button = {
  master: {
    bg: orange[500],
    text: '#FFFFFF',
    hover: orange[600],
    active: orange[700],
    disabled: orange[300],
  },
  secondary: {
    bg: 'transparent',
    border: orange[500],
    text: orange[500],
    hoverBg: orange[50],
    activeBg: orange[100],
    disabled: orange[300],
  },
  link: {
    text: orange[500],
    hover: orange[600],
    active: orange[700],
    underline: orange[500],
  },
  // White variant for dark backgrounds
  white: {
    master: {
      bg: '#FFFFFF',
      text: dark.bg.primary,
      hover: '#F4F4F5',
      active: '#E4E4E7',
    },
    secondary: {
      bg: 'transparent',
      border: '#FFFFFF',
      text: '#FFFFFF',
      hoverBg: 'rgba(255, 255, 255, 0.1)',
    },
    link: {
      text: '#FFFFFF',
      hover: 'rgba(255, 255, 255, 0.8)',
      underline: '#FFFFFF',
    },
  },
} as const;

// Healthcare App Specific Colors (Dermatik project)
export const healthcare = {
  confirmed: '#22C55E',
  pending: '#F59E0B',
  cancelled: '#EF4444',
  chat: {
    sent: orange[500],
    received: '#F4F4F5',
  },
  status: {
    online: '#22C55E',
    offline: '#71717A',
    busy: '#EF4444',
  },
} as const;

// Gradient Definitions (from Figma "Gradient-halo-1" and others)
// Enhanced with modern design patterns
export const gradients = {
  orange: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
  violet: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
  orangeViolet: 'linear-gradient(135deg, #F97316 0%, #8B5CF6 100%)',
  dark: 'linear-gradient(180deg, #0A0A0A 0%, #141414 100%)',
  halo: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)',
  violetHalo: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
  subtle: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)',
} as const;

// Shadow Colors
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  orange: '0 4px 14px 0 rgba(249, 115, 22, 0.39)',
} as const;

// ============================================
// CSS Variable Generation
// ============================================

export function generateCSSVariables(isDark: boolean = false): string {
  const theme = isDark ? dark : light;
  const prefix = '--';

  return `
    /* Orange Palette */
    ${prefix}orange-50: ${orange[50]};
    ${prefix}orange-100: ${orange[100]};
    ${prefix}orange-200: ${orange[200]};
    ${prefix}orange-300: ${orange[300]};
    ${prefix}orange-400: ${orange[400]};
    ${prefix}orange-500: ${orange[500]};
    ${prefix}orange-600: ${orange[600]};
    ${prefix}orange-700: ${orange[700]};
    ${prefix}orange-800: ${orange[800]};
    ${prefix}orange-900: ${orange[900]};
    ${prefix}orange-950: ${orange[950]};

    /* Background */
    ${prefix}bg-primary: ${theme.bg.primary};
    ${prefix}bg-secondary: ${theme.bg.secondary};
    ${prefix}bg-tertiary: ${theme.bg.tertiary};
    ${prefix}bg-elevated: ${theme.bg.elevated};

    /* Text */
    ${prefix}text-primary: ${theme.text.primary};
    ${prefix}text-secondary: ${theme.text.secondary};
    ${prefix}text-tertiary: ${theme.text.tertiary};
    ${prefix}text-muted: ${theme.text.muted};

    /* Border */
    ${prefix}border-default: ${theme.border.default};
    ${prefix}border-hover: ${theme.border.hover};
    ${prefix}border-active: ${theme.border.active};

    /* Semantic */
    ${prefix}success: ${semantic.success.light};
    ${prefix}warning: ${semantic.warning.light};
    ${prefix}error: ${semantic.error.light};
    ${prefix}info: ${semantic.info.light};

    /* Button */
    ${prefix}btn-master-bg: ${button.master.bg};
    ${prefix}btn-master-text: ${button.master.text};
    ${prefix}btn-secondary-border: ${button.secondary.border};
    ${prefix}btn-secondary-text: ${button.secondary.text};

    /* Gradients */
    ${prefix}gradient-orange: ${gradients.orange};
    ${prefix}gradient-dark: ${gradients.dark};
    ${prefix}gradient-halo: ${gradients.halo};

    /* Shadows */
    ${prefix}shadow-sm: ${shadows.sm};
    ${prefix}shadow-md: ${shadows.md};
    ${prefix}shadow-lg: ${shadows.lg};
    ${prefix}shadow-orange: ${shadows.orange};
  `;
}

// Export all color tokens
export const colors = {
  orange,
  violet,
  dark,
  light,
  semantic,
  button,
  healthcare,
  gradients,
  shadows,
} as const;

// Modern accent combinations
export const accents = {
  orange: orange[500],
  violet: violet[500],
  mixed: gradients.orangeViolet,
} as const;

export default colors;
