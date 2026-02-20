// ============================================
// CountUp Component
// Animated number counter with easing
// ============================================

import { useEffect, useState, useRef } from 'react';

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  separator?: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  trigger?: boolean;
}

export function CountUp({
  from = 0,
  to,
  duration = 2,
  separator = '',
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
  trigger = true,
}: CountUpProps) {
  const [count, setCount] = useState(from);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!trigger || hasAnimated.current) return;
    
    let startTime: number;
    let animationFrame: number;
    hasAnimated.current = true;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function (ease out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = from + (to - from) * easeOut;
      
      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [from, to, duration, trigger]);

  const formatNumber = (value: number): string => {
    const fixed = value.toFixed(decimals);
    const parts = fixed.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return parts.join('.');
  };

  return (
    <span className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
}

export default CountUp;
