import type { CSSProperties, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Coral brush-stroke highlight, ported from the concept mockup:
 *
 *   .mark            { position: relative; white-space: nowrap; color: --mark-fg }
 *   .mark::before    { clip-path: inset(0 100% 0 0) }   -- hidden
 *   .mark.in::before { clip-path: inset(0 0 0 0) }      -- drawn in
 *
 * The pseudo-element is rendered as an absolutely positioned child span so it
 * is inspectable and stylable from React without a global CSS rule.
 */

export interface MarkerHighlightProps {
  children: ReactNode;
  /** Seconds to wait before the stroke draws in. */
  delay?: number;
  className?: string;
}

const CLIP_HIDDEN = 'inset(0 100% 0 0)';
const CLIP_SHOWN = 'inset(0 0 0 0)';

/* Coral comes from the brand ramp; the text on top is deep navy for contrast. */
const MARK_BG = 'var(--color-accent, #EE7B54)';
const MARK_FG = 'var(--color-navy-darkest, #08152C)';
const MARK_GLOW = 'var(--glow, 0 0 38px -10px rgba(238,123,84,.45))';

const strokeStyle: CSSProperties = {
  position: 'absolute',
  zIndex: -1,
  left: '-0.08em',
  right: '-0.08em',
  top: '0.1em',
  bottom: '0.06em',
  background: MARK_BG,
  boxShadow: MARK_GLOW,
  transform: 'rotate(-1deg)',
  borderRadius: '0.4em 0.7em 0.5em 0.8em / 0.9em 0.6em 0.8em 0.5em',
  pointerEvents: 'none',
};

export function MarkerHighlight({ children, delay = 0, className }: MarkerHighlightProps) {
  const reduceMotion = useReducedMotion() === true;

  return (
    <span
      className={className}
      style={{
        position: 'relative',
        zIndex: 0,
        whiteSpace: 'nowrap',
        color: MARK_FG,
        padding: '0 0.06em',
      }}
    >
      <motion.span
        aria-hidden="true"
        style={strokeStyle}
        initial={{ clipPath: reduceMotion ? CLIP_SHOWN : CLIP_HIDDEN }}
        whileInView={{ clipPath: CLIP_SHOWN }}
        viewport={{ once: true, amount: 0.2 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 0.8, delay, ease: [0.5, 0.1, 0.2, 1] }
        }
      />
      {children}
    </span>
  );
}
