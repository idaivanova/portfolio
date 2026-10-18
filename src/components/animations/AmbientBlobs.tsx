import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Ambient depth blobs from the concept mockup: a large structural blue
 * field-glow bottom-left and a smaller coral spark top-right.
 *
 * They drift on a sin/cos loop (t += 0.005 per frame) with a gentle scroll
 * parallax, sit at z-index -2 and never intercept pointer events.
 *
 * Colours are literal rgba from the concept — deliberately not routed through
 * `--accent`, which is the surface token, not the coral.
 */

interface BlobGeometry {
  size: number;
  darkAlpha: string;
  lightAlpha: string;
  placement: CSSProperties;
  /** Scroll parallax factor, per concept: blue 0.1, coral -0.06. */
  parallax: number;
}

const BLUE_BLOB: BlobGeometry = {
  size: 640,
  darkAlpha: 'rgba(91,132,196,.30)',
  lightAlpha: 'rgba(91,132,196,.16)',
  placement: { bottom: '-200px', left: '-160px' },
  parallax: 0.1,
};

const CORAL_BLOB: BlobGeometry = {
  size: 460,
  darkAlpha: 'rgba(238,123,84,.24)',
  lightAlpha: 'rgba(238,123,84,.14)',
  placement: { top: '-140px', right: '-100px' },
  parallax: -0.06,
};

function useLightTheme(): boolean {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setIsLight(root.classList.contains('light'));
    sync();

    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return isLight;
}

export function AmbientBlobs() {
  const reduceMotion = useReducedMotion() === true;
  const isLight = useLightTheme();
  const blueRef = useRef<HTMLDivElement>(null);
  const coralRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;

    const blue = blueRef.current;
    const coral = coralRef.current;
    const nodes: Array<[HTMLDivElement | null, number, number]> = [
      [blue, BLUE_BLOB.parallax, 0],
      [coral, CORAL_BLOB.parallax, 1],
    ];

    let frame = 0;
    let time = 0;
    let running = true;

    const loop = () => {
      if (!running) return;
      if (document.hidden) {
        frame = requestAnimationFrame(loop);
        return;
      }

      time += 0.005;
      const scrollY = window.scrollY || 0;

      nodes.forEach(([node, parallax, index]) => {
        if (!node) return;
        const dx = Math.sin(time + index * 2) * 32;
        const dy = Math.cos(time * 0.8 + index * 2) * 26 + scrollY * parallax;
        const scale = 1 + Math.sin(time * 0.6 + index) * 0.05;
        node.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px) scale(${scale.toFixed(3)})`;
      });

      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
    };
  }, [reduceMotion]);

  const blobStyle = (geometry: BlobGeometry): CSSProperties => ({
    position: 'fixed',
    width: geometry.size,
    height: geometry.size,
    borderRadius: '50%',
    zIndex: -2,
    pointerEvents: 'none',
    filter: 'blur(100px)',
    willChange: 'transform',
    background: `radial-gradient(circle, ${isLight ? geometry.lightAlpha : geometry.darkAlpha}, transparent 70%)`,
    ...geometry.placement,
  });

  return (
    <>
      <div ref={blueRef} aria-hidden="true" style={blobStyle(BLUE_BLOB)} />
      <div ref={coralRef} aria-hidden="true" style={blobStyle(CORAL_BLOB)} />
    </>
  );
}
