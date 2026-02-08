// ============================================
// Design System Tokens - Main Export
// ============================================

export { colors, generateCSSVariables } from './colors';
export { typography } from './typography';
export { tokens as spacing, spacing as spacingScale } from './spacing';

// Re-export types
export type { FontSize, FontWeight, LineHeight, LetterSpacing } from './typography';
export type { Spacing, SectionSpacing, BorderRadius, Duration, Easing } from './spacing';

// Combined design tokens export
export const tokens = {
  colors,
  typography,
  spacing: spacingScale,
};

import { colors } from './colors';
import { typography } from './typography';
import { spacing, spacingScale } from './spacing';

export default tokens;
