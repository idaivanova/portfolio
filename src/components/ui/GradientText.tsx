// ============================================
// GradientText Component
// Animated gradient text effect
// ============================================

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  colors?: string[];
  animationDuration?: number;
  className?: string;
  direction?: 'horizontal' | 'vertical' | 'diagonal';
}

export function GradientText({
  children,
  colors = ['#FF6647', '#FF8A70', '#FFB800'],
  animationDuration = 3,
  className = '',
  direction = 'horizontal',
}: GradientTextProps) {
  // Create gradient keyframes based on direction
  const gradientStyle = useMemo(() => {
    const colorStops = colors.join(', ');
    
    return {
      background: `linear-gradient(${direction}, ${colorStops})`,
      backgroundSize: '200% 200%',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    };
  }, [colors, direction]);

  return (
    <motion.span
      className={className}
      style={gradientStyle}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      }}
      transition={{
        duration: animationDuration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.span>
  );
}

export default GradientText;
