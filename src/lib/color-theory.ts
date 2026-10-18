// ============================================
// Color Theory Utilities
// Dependency-free HSL math + palette generation
// for the Theme Builder playground.
// ============================================

/** Hue in degrees (0-360), saturation and lightness in percent (0-100). */
export interface HSL {
  h: number;
  s: number;
  l: number;
}

/** The four harmony schemes grown from a single seed color. */
export interface PaletteSet {
  complementary: string[];
  analogous: string[];
  triadic: string[];
  splitComplementary: string[];
}

const HEX_PATTERN = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;

function clamp(value: number, min: number, max: number): number {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

/** Wrap a hue into the 0-360 range so rotations never leak negatives. */
export function normalizeHue(hue: number): number {
  const wrapped = hue % 360;
  return wrapped < 0 ? wrapped + 360 : wrapped;
}

function channelToHex(value: number): string {
  return clamp(Math.round(value * 255), 0, 255).toString(16).padStart(2, '0');
}

/**
 * Parse a hex color into HSL.
 * Accepts `#abc`, `abc`, `#aabbcc`, `aabbcc`. Invalid input falls back to black.
 */
export function hexToHsl(hex: string): HSL {
  const match = HEX_PATTERN.exec(hex.trim());
  if (!match) return { h: 0, s: 0, l: 0 };

  const raw = match[1];
  const full =
    raw.length === 3
      ? raw
          .split('')
          .map((char) => char + char)
          .join('')
      : raw;

  const r = parseInt(full.slice(0, 2), 16) / 255;
  const g = parseInt(full.slice(2, 4), 16) / 255;
  const b = parseInt(full.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  const l = (max + min) / 2;

  let h = 0;
  let s = 0;

  if (delta !== 0) {
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    if (max === r) {
      h = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
    } else if (max === g) {
      h = ((b - r) / delta + 2) * 60;
    } else {
      h = ((r - g) / delta + 4) * 60;
    }
  }

  return {
    h: normalizeHue(h),
    s: clamp(s * 100, 0, 100),
    l: clamp(l * 100, 0, 100),
  };
}

/** Convert HSL (degrees + percent) back into a `#rrggbb` string. */
export function hslToHex(h: number, s: number, l: number): string {
  const hue = normalizeHue(h);
  const saturation = clamp(s, 0, 100) / 100;
  const lightness = clamp(l, 0, 100) / 100;

  const c = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
  const m = lightness - c / 2;

  let r = 0;
  let g = 0;
  let b = 0;

  if (hue < 60) {
    r = c;
    g = x;
  } else if (hue < 120) {
    r = x;
    g = c;
  } else if (hue < 180) {
    g = c;
    b = x;
  } else if (hue < 240) {
    g = x;
    b = c;
  } else if (hue < 300) {
    r = x;
    b = c;
  } else {
    r = c;
    b = x;
  }

  return `#${channelToHex(r + m)}${channelToHex(g + m)}${channelToHex(b + m)}`;
}

/** Rotate a color's hue while keeping its saturation and lightness. */
export function rotateHue(hex: string, degrees: number): string {
  const { h, s, l } = hexToHsl(hex);
  return hslToHex(normalizeHue(h + degrees), s, l);
}

/**
 * Grow four harmony schemes from one seed color.
 * Hue stays put; saturation and lightness ride along so the family reads as one palette.
 */
export function generatePalette(seedHex: string): PaletteSet {
  const seed = seedHex.trim();

  return {
    complementary: [seed, rotateHue(seed, 180)],
    analogous: [rotateHue(seed, -30), seed, rotateHue(seed, 30)],
    triadic: [seed, rotateHue(seed, 120), rotateHue(seed, 240)],
    splitComplementary: [seed, rotateHue(seed, 150), rotateHue(seed, 210)],
  };
}

/** WCAG relative luminance of a hex color (0 = black, 1 = white). */
export function getLuminance(hex: string): number {
  const match = HEX_PATTERN.exec(hex.trim());
  if (!match) return 0;

  const raw = match[1];
  const full =
    raw.length === 3
      ? raw
          .split('')
          .map((char) => char + char)
          .join('')
      : raw;

  const [r, g, b] = [0, 2, 4].map((offset) => {
    const channel = parseInt(full.slice(offset, offset + 2), 16) / 255;
    return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
  });

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Pick readable text for a swatch.
 * Returns near-black or near-white, whichever has more contrast (WCAG AA).
 */
export function getContrastColor(hex: string): string {
  return getLuminance(hex) > 0.179 ? '#0B1220' : '#FFFEFD';
}

/**
 * Flatten a token record into a copy-ready `:root` block of CSS custom properties.
 * Keys become kebab-case variable names, so `primaryForeground` -> `--primary-foreground`.
 */
export function exportToCSSVariables(palette: Record<string, string>): string {
  const declarations = Object.entries(palette)
    .filter(([, value]) => typeof value === 'string' && value.length > 0)
    .map(
      ([key, value]) =>
        `  --${key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase().replace(/^-+/, '')}: ${value};`
    );

  return `:root {\n${declarations.join('\n')}\n}`;
}
