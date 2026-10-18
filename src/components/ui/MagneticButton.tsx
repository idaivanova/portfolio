import { useEffect, useState } from 'react';
import type { MouseEvent, ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';

/**
 * Magnetic CTA button, ported from the concept mockup:
 *
 *   dx = (mouseX - centerX) / width   -> outer translate up to 8px
 *   dy = (mouseY - centerY) / height  -> inner label follows at up to 5px
 *
 * Springs instead of raw transforms so the return to rest reads as deliberate.
 * Disabled on touch pointers and under prefers-reduced-motion.
 */

export interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  /** Renders an anchor. Omit for a button element. */
  href?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement> | MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  /** Max outer travel in px. */
  strength?: number;
  /** Max inner-label travel in px. */
  innerStrength?: number;
  'aria-label'?: string;
}

const SPRING = { stiffness: 260, damping: 22, mass: 0.4 } as const;

function clamp(value: number, limit: number): number {
  return Math.max(-limit, Math.min(limit, value));
}

function useFinePointer(): boolean {
  const [isFine, setIsFine] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(hover: hover) and (pointer: fine)');
    const sync = () => setIsFine(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  return isFine;
}

export function MagneticButton({
  children,
  className,
  innerClassName,
  href,
  onClick,
  type = 'button',
  disabled = false,
  strength = 8,
  innerStrength = 5,
  'aria-label': ariaLabel,
}: MagneticButtonProps) {
  const reduceMotion = useReducedMotion() === true;
  const isFinePointer = useFinePointer();
  const isActive = isFinePointer && !reduceMotion && !disabled;

  const outerXRaw = useMotionValue(0);
  const outerYRaw = useMotionValue(0);
  const innerXRaw = useMotionValue(0);
  const innerYRaw = useMotionValue(0);

  const outerX = useSpring(outerXRaw, SPRING);
  const outerY = useSpring(outerYRaw, SPRING);
  const innerX = useSpring(innerXRaw, SPRING);
  const innerY = useSpring(innerYRaw, SPRING);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!isActive) return;

    const rect = event.currentTarget.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const dx = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
    const dy = (event.clientY - (rect.top + rect.height / 2)) / rect.height;

    outerXRaw.set(clamp(dx * strength * 2, strength));
    outerYRaw.set(clamp(dy * strength * 2, strength));
    innerXRaw.set(clamp(dx * innerStrength * 2, innerStrength));
    innerYRaw.set(clamp(dy * innerStrength * 2, innerStrength));
  };

  const reset = () => {
    outerXRaw.set(0);
    outerYRaw.set(0);
    innerXRaw.set(0);
    innerYRaw.set(0);
  };

  const label = (
    <motion.span
      className={innerClassName}
      style={{ x: innerX, y: innerY, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
    >
      {children}
    </motion.span>
  );

  if (href !== undefined) {
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        className={className}
        style={{ x: outerX, y: outerY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        onClick={onClick}
      >
        {label}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      className={className}
      style={{ x: outerX, y: outerY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
}
