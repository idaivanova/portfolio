// ============================================
// Theme Builder
// A playful color-theory playground. Pick a seed,
// watch four harmonies grow, try a garden palette,
// then take the tokens home.
// ============================================

import * as React from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { Check, Citrus, Copy, Flower, Flower2, Leaf, Mountain, Sprout, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/LanguageContext';
import {
  exportToCSSVariables,
  generatePalette,
  getContrastColor,
  hexToHsl,
  hslToHex,
  type PaletteSet,
} from '@/lib/color-theory';

// --------------------------------------------
// Data
// --------------------------------------------

export type SchemeKey = keyof PaletteSet;

interface SchemeInfo {
  key: SchemeKey;
  name: string;
  note: string;
}

const SCHEMES: SchemeInfo[] = [
  { key: 'complementary', name: 'Complementary', note: 'Straight across the wheel. Loud on purpose.' },
  { key: 'analogous', name: 'Analogous', note: 'Next-door hues. Calm and quiet.' },
  { key: 'triadic', name: 'Triadic', note: 'Three even hops. Nothing fighting.' },
  { key: 'splitComplementary', name: 'Split-complementary', note: 'The opposite, softened. Easiest on the eyes.' },
];

interface GardenPalette {
  id: string;
  name: string;
  note: string;
  colors: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const GARDEN_PALETTES: GardenPalette[] = [
  {
    id: 'monstera',
    name: 'Monstera',
    note: 'Big leaves, deep shade, quiet corners.',
    colors: ['#1F4D3A', '#3E7C5A', '#8FBF9F', '#F2EFE3'],
    icon: Leaf,
  },
  {
    id: 'lavender-field',
    name: 'Lavender Field',
    note: 'Rows of purple, with the sun on top.',
    colors: ['#5B3E96', '#8B6FC0', '#C9B8E4', '#F7E7A0'],
    icon: Flower2,
  },
  {
    id: 'sunflower',
    name: 'Sunflower',
    note: 'Tall, yellow, impossible to ignore.',
    colors: ['#E3A008', '#F5C518', '#8C5A2B', '#4F772D'],
    icon: Sun,
  },
  {
    id: 'peony',
    name: 'Peony',
    note: 'Loud pinks and fresh green stems.',
    colors: ['#D0567C', '#F2A9BE', '#6E9B52', '#FFFFFF'],
    icon: Flower,
  },
  {
    id: 'citrus-grove',
    name: 'Citrus Grove',
    note: 'Ripe and sharp at the same time.',
    colors: ['#E8720C', '#8FBF3F', '#F6E7C1'],
    icon: Citrus,
  },
  {
    id: 'alpine-lake',
    name: 'Alpine Lake',
    note: 'Cold water, grey rock, thin air.',
    colors: ['#1F5F8B', '#5FA8D3', '#DCE9F2', '#8A8F98'],
    icon: Mountain,
  },
];

const DEFAULT_SEED = '#FF6647';

export interface ThemeTokens {
  background: string;
  surface: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
  border: string;
  primary: string;
  primaryForeground: string;
  accent: string;
  accentForeground: string;
}

// --------------------------------------------
// Helpers
// --------------------------------------------

/** Build a full theme out of two harmony colors. */
export function deriveTheme(primaryHex: string, accentHex: string): ThemeTokens {
  const { h, s } = hexToHsl(primaryHex);
  const tint = (lightness: number, satScale: number) => hslToHex(h, Math.min(s * satScale, 100), lightness);

  return {
    background: tint(98, 0.35),
    surface: tint(95, 0.28),
    foreground: hslToHex(h, Math.min(s * 0.45, 70), 13),
    muted: tint(90, 0.22),
    mutedForeground: hslToHex(h, Math.min(s * 0.25, 35), 42),
    border: tint(84, 0.2),
    primary: primaryHex,
    primaryForeground: getContrastColor(primaryHex),
    accent: accentHex,
    accentForeground: getContrastColor(accentHex),
  };
}

const swatchList: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const swatchItem: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

// --------------------------------------------
// Sub components
// --------------------------------------------

function BuilderSection({
  id,
  title,
  hint,
  children,
}: {
  id: string;
  title: string;
  hint: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="font-display text-2xl text-foreground md:text-3xl">{title}</h2>
        <p className="max-w-2xl text-foreground/60">{hint}</p>
      </div>
      {children}
    </section>
  );
}

function Swatch({ hex, index }: { hex: string; index: number }) {
  return (
    <motion.li
      variants={swatchItem}
      className="flex min-w-0 flex-col overflow-hidden rounded-xl border border-border shadow-md"
    >
      <motion.div
        className="h-16 w-full md:h-20"
        style={{ backgroundColor: hex }}
        animate={{ backgroundColor: hex }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        aria-hidden="true"
      />
      {/* Hex + index need ~65px side by side. In the old 3-across grid the
          chips were 52-63px wide, so overflow-hidden silently cut the tail
          of the hex and all of the index. Stacked labels fit every width. */}
      <div className="flex min-w-0 flex-col items-center gap-0.5 bg-card px-2 py-1.5">
        <span className="text-[11px] font-medium leading-tight text-foreground">
          {hex.toUpperCase()}
        </span>
        <span className="text-[9px] uppercase leading-none tracking-[0.12em] text-foreground/40">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </motion.li>
  );
}

function TypographyPreview({ theme, colors }: { theme: ThemeTokens; colors: string[] }) {
  return (
    <div
      className="rounded-2xl border border-border p-6 shadow-lg md:p-8"
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        borderColor: theme.border,
        transition: 'background-color 400ms ease, color 400ms ease, border-color 400ms ease',
      }}
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]"
            style={{ backgroundColor: theme.muted, color: theme.mutedForeground }}
          >
            Sample page
          </span>
          <span
            className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]"
            style={{ backgroundColor: theme.primary, color: theme.primaryForeground }}
          >
            New
          </span>
        </div>

        <h3 className="font-display text-3xl leading-tight md:text-4xl" style={{ color: theme.foreground }}>
          Garden paths
        </h3>

        <p className="max-w-xl leading-relaxed" style={{ color: theme.mutedForeground }}>
          Headings take the seed. Body copy softens it. Buttons shout. Borders just hold everything in
          place so nothing spills out of the pot.
        </p>

        <div className="flex flex-wrap items-center gap-3" aria-hidden="true">
          <span
            className="rounded-full px-5 py-2.5 text-sm font-semibold"
            style={{ backgroundColor: theme.primary, color: theme.primaryForeground }}
          >
            Plant it
          </span>
          <span
            className="rounded-full px-5 py-2.5 text-sm font-semibold"
            style={{
              backgroundColor: 'transparent',
              color: theme.accent,
              border: `2px solid ${theme.accent}`,
            }}
          >
            Water later
          </span>
        </div>

        <div className="h-px w-full" style={{ backgroundColor: theme.border }} aria-hidden="true" />

        <ul className="flex flex-wrap gap-2">
          {colors.map((hex, index) => (
            <li
              key={`${hex}-${index}`}
              className="rounded-lg border px-3 py-2 text-xs font-medium"
              style={{ borderColor: theme.border, color: theme.foreground }}
            >
              {hex.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// --------------------------------------------
// Theme Builder
// --------------------------------------------

export function ThemeBuilder({ className }: { className?: string }) {
  const { t } = useLanguage();
  const copy = t.themeBuilder;

  const [seed, setSeed] = React.useState(DEFAULT_SEED);
  const [scheme, setScheme] = React.useState<SchemeKey>('complementary');
  const [gardenId, setGardenId] = React.useState<string | null>(null);
  const [copied, setCopied] = React.useState(false);
  const toastTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  const palettes = React.useMemo(() => generatePalette(seed), [seed]);
  const activeGarden = React.useMemo(
    () => GARDEN_PALETTES.find((garden) => garden.id === gardenId),
    [gardenId]
  );
  const activeColors = activeGarden ? activeGarden.colors : palettes[scheme];
  const theme = React.useMemo(
    () => deriveTheme(activeColors[0], activeColors[1] ?? activeColors[0]),
    [activeColors]
  );

  const handleSeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeed(event.target.value);
    setGardenId(null);
  };

  const handleGardenPick = (garden: GardenPalette) => {
    setGardenId(garden.id);
    setSeed(garden.colors[0]);
  };

  const handleCopy = async () => {
    const record: Record<string, string> = { seed: activeColors[0], ...theme };
    SCHEMES.forEach(({ key }) => {
      palettes[key].forEach((hex, index) => {
        record[`${key}-${index + 1}`] = hex;
      });
    });

    try {
      await navigator.clipboard.writeText(exportToCSSVariables(record));
      setCopied(true);
      if (toastTimer.current) clearTimeout(toastTimer.current);
      toastTimer.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const previewKey = `${seed}-${gardenId ?? scheme}`;

  return (
    <div className={cn('flex flex-col gap-14', className)}>
      {/* Seed color */}
      <BuilderSection id="seed" title={copy.seedColorLabel} hint={copy.seedHint}>
        <div className="flex flex-wrap items-center gap-6 rounded-2xl border border-border bg-card p-6 shadow-md">
          <div className="relative">
            <label htmlFor="theme-builder-seed" className="sr-only">
              {copy.seedColorLabel}
            </label>
            <input
              id="theme-builder-seed"
              type="color"
              value={seed}
              onChange={handleSeedChange}
              className="h-24 w-24 cursor-pointer rounded-full border-2 border-border bg-transparent p-0 shadow-md transition-transform duration-300 hover:scale-105 [&::-webkit-color-swatch]:rounded-full [&::-webkit-color-swatch]:border-0 [&::-webkit-color-swatch-wrapper]:p-0"
            />
            <Sprout
              className="pointer-events-none absolute -right-1 -top-1 h-6 w-6 text-[var(--color-accent-text)]"
              aria-hidden="true"
            />
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/50">
              {copy.seedColorLabel}
            </span>
            <span className="font-display text-2xl text-foreground">{seed.toUpperCase()}</span>
            <span className="max-w-xs text-sm text-foreground/60">{copy.seedHint}</span>
          </div>
        </div>
      </BuilderSection>

      {/* Generated harmonies */}
      <BuilderSection id="palettes" title={copy.palettesLabel} hint={copy.palettesHint}>
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
          variants={swatchList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {SCHEMES.map((schemeInfo) => {
            const isActive = !activeGarden && scheme === schemeInfo.key;
            return (
              <motion.button
                key={schemeInfo.key}
                type="button"
                variants={cardVariants}
                aria-pressed={isActive}
                onClick={() => {
                  setScheme(schemeInfo.key);
                  setGardenId(null);
                }}
                className={cn(
                  'flex flex-col gap-3 rounded-2xl border p-4 text-left transition-colors duration-300',
                  isActive
                    ? 'border-accent bg-accent/10 shadow-md'
                    : 'border-border bg-card hover:border-accent/50'
                )}
              >
                <span className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-foreground">{schemeInfo.name}</span>
                  <span className="text-xs leading-snug text-foreground/55">{schemeInfo.note}</span>
                </span>

                <motion.ul
                  className="grid grid-cols-3 gap-1.5"
                  variants={swatchList}
                  initial="hidden"
                  animate="visible"
                >
                  {palettes[schemeInfo.key].map((hex, index) => (
                    <Swatch key={`${hex}-${index}`} hex={hex} index={index} />
                  ))}
                </motion.ul>
              </motion.button>
            );
          })}
        </motion.div>
      </BuilderSection>

      {/* Garden palettes */}
      <BuilderSection id="garden" title={copy.gardenPalettesLabel} hint={copy.gardenPalettesHint}>
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
          variants={swatchList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {GARDEN_PALETTES.map((garden) => {
            const Icon = garden.icon;
            const isActive = activeGarden?.id === garden.id;
            return (
              <motion.button
                key={garden.id}
                type="button"
                variants={cardVariants}
                aria-pressed={isActive}
                onClick={() => handleGardenPick(garden)}
                className={cn(
                  'flex flex-col gap-3 rounded-2xl border p-4 text-left transition-colors duration-300',
                  isActive
                    ? 'border-accent bg-accent/10 shadow-md'
                    : 'border-border bg-card hover:border-accent/50'
                )}
              >
                <span className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[var(--color-accent-text)]" aria-hidden="true" />
                  <span className="text-sm font-semibold text-foreground">{garden.name}</span>
                </span>
                <span className="text-xs leading-snug text-foreground/55">{garden.note}</span>
                <ul className="flex h-8 overflow-hidden rounded-lg border border-border">
                  {garden.colors.map((hex, index) => (
                    <motion.li
                      key={`${hex}-${index}`}
                      className="h-full flex-1"
                      style={{ backgroundColor: hex }}
                      animate={{ backgroundColor: hex }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                    >
                      <span className="sr-only">{hex}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.button>
            );
          })}
        </motion.div>
      </BuilderSection>

      {/* Typography preview */}
      <BuilderSection id="preview" title={copy.previewLabel} hint={copy.previewHint}>
        <AnimatePresence mode="wait">
          <motion.div
            key={previewKey}
            initial={{ opacity: 0, scale: 0.97, filter: 'blur(4px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.99, filter: 'blur(4px)' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <TypographyPreview theme={theme} colors={activeColors} />
          </motion.div>
        </AnimatePresence>
      </BuilderSection>

      {/* Export */}
      <BuilderSection id="export" title={copy.exportLabel} hint={copy.exportHint}>
        <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-md">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-[var(--color-navy-darkest)] transition-opacity duration-300 hover:opacity-85"
          >
            {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
            {copy.exportButton}
          </button>

          <span className="font-mono text-xs uppercase text-foreground/50">{activeColors[0]}</span>

          <AnimatePresence>
            {copied && (
              <motion.span
                role="status"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1.5 text-sm font-medium text-foreground"
              >
                <Sprout className="h-4 w-4" aria-hidden="true" />
                {copy.exportedToast}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </BuilderSection>
    </div>
  );
}

export default ThemeBuilder;
