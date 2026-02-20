import { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';

// ========================
// RACCOON EASTER EGG COMPONENT
// Occasionally appears from screen edges to hide navigation buttons
// Must click the raccoon to make it move away
// ========================

type RaccoonPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface RaccoonScenario {
  id: number;
  position: RaccoonPosition;
  name: string;
  description: string;
}

// Scenarios for different positions
const SCENARIOS: RaccoonScenario[] = [
  { id: 1, position: 'top-left', name: 'Top Left Raccoon', description: 'Appears from top-left corner' },
  { id: 2, position: 'top-right', name: 'Top Right Raccoon', description: 'Appears from top-right corner' },
  { id: 3, position: 'bottom-left', name: 'Bottom Left Raccoon', description: 'Appears from bottom-left corner' },
  { id: 4, position: 'bottom-right', name: 'Bottom Right Raccoon', description: 'Appears from bottom-right corner' },
];

// Get position styles based on corner
const getPositionStyles = (position: RaccoonPosition) => {
  switch (position) {
    case 'top-left':
      return { left: '-80px', top: '-60px' };
    case 'top-right':
      return { right: '-80px', top: '-60px' };
    case 'bottom-left':
      return { left: '-80px', bottom: '-60px' };
    case 'bottom-right':
      return { right: '-80px', bottom: '-60px' };
  }
};

// Get the target position (fully visible)
const getTargetPosition = (position: RaccoonPosition) => {
  switch (position) {
    case 'top-left':
      return { left: '0px', top: '0px' };
    case 'top-right':
      return { right: '0px', top: '0px' };
    case 'bottom-left':
      return { left: '0px', bottom: '0px' };
    case 'bottom-right':
      return { right: '0px', bottom: '0px' };
  }
};

// Raccoon SVG Icon Component
function RaccoonIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 100 80"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <ellipse cx="50" cy="50" rx="35" ry="25" fill="#6B7280" />
      
      {/* Tail with stripes */}
      <ellipse cx="85" cy="55" rx="15" ry="10" fill="#6B7280" />
      <path d="M75 52 Q80 50 75 55" stroke="#4B5563" strokeWidth="3" fill="none" />
      <path d="M80 48 Q85 46 80 51" stroke="#4B5563" strokeWidth="3" fill="none" />
      <path d="M82 54 Q87 52 82 57" stroke="#4B5563" strokeWidth="3" fill="none" />
      
      {/* Head */}
      <ellipse cx="25" cy="40" rx="20" ry="18" fill="#6B7280" />
      
      {/* Face mask (dark area) */}
      <ellipse cx="25" cy="45" rx="15" ry="10" fill="#374151" />
      
      {/* Eyes */}
      <circle cx="18" cy="42" r="4" fill="white" />
      <circle cx="18" cy="42" r="2" fill="#1F2937" />
      <circle cx="32" cy="42" r="4" fill="white" />
      <circle cx="32" cy="42" r="2" fill="#1F2937" />
      
      {/* Eye shine */}
      <circle cx="19" cy="41" r="1" fill="white" />
      <circle cx="33" cy="41" r="1" fill="white" />
      
      {/* Nose */}
      <ellipse cx="25" cy="50" rx="3" ry="2" fill="#1F2937" />
      
      {/* Ears */}
      <path d="M10 28 L15 38 L5 38 Z" fill="#6B7280" />
      <path d="M40 28 L45 38 L35 38 Z" fill="#6B7280" />
      
      {/* Ear inner */}
      <path d="M12 30 L15 35 L8 35 Z" fill="#4B5563" />
      <path d="M38 30 L41 35 L34 35 Z" fill="#4B5563" />
      
      {/* Paws */}
      <ellipse cx="30" cy="72" rx="6" ry="4" fill="#4B5563" />
      <ellipse cx="45" cy="72" rx="6" ry="4" fill="#4B5563" />
      
      {/* Whiskers */}
      <path d="M10 48 L2 45" stroke="#9CA3AF" strokeWidth="1" />
      <path d="M10 50 L2 52" stroke="#9CA3AF" strokeWidth="1" />
      <path d="M40 48 L48 45" stroke="#9CA3AF" strokeWidth="1" />
      <path d="M40 50 L48 52" stroke="#9CA3AF" strokeWidth="1" />
    </svg>
  );
}

// Individual Raccoon Component
interface RaccoonProps {
  position: RaccoonPosition;
  onRemove: () => void;
}

function Raccoon({ position, onRemove }: RaccoonProps) {
  const controls = useAnimation();
  const [isLeaving, setIsLeaving] = useState(false);
  
  const startPos = getPositionStyles(position);
  const targetPos = getTargetPosition(position);
  
  useEffect(() => {
    // Animate in from edge
    controls.start({
      ...targetPos,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    });
  }, [controls, targetPos]);
  
  const handleClick = useCallback(async () => {
    setIsLeaving(true);
    
    // Scurry away animation - go back out from the same edge
    await controls.start({
      ...startPos,
      rotate: isLeaving ? 0 : Math.random() > 0.5 ? 15 : -15,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    });
    
    // Fade out
    await controls.start({ opacity: 0, transition: { duration: 0.2 } });
    onRemove();
  }, [controls, startPos, isLeaving, onRemove]);
  
  return (
    <motion.div
      className="fixed pointer-events-auto cursor-pointer z-[9998]"
      style={{
        width: 100,
        height: 80,
        ...startPos,
      }}
      animate={controls}
      onClick={handleClick}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Tooltip */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
        <span className="text-xs bg-black/75 text-white px-2 py-1 rounded">
          👋 Click to shoo away!
        </span>
      </div>
      
      <RaccoonIcon className="w-full h-full drop-shadow-lg" />
    </motion.div>
  );
}

// Main Raccoon Manager
interface RaccoonManagerProps {
  // Probability of appearing (0-1). Default 10%
  appearanceChance?: number;
  // Minimum time between appearances in ms. Default 45 seconds
  minInterval?: number;
  // Maximum time between appearances in ms. Default 90 seconds
  maxInterval?: number;
}

export function RaccoonManager({
  appearanceChance = 0.1,
  minInterval = 45000,
  maxInterval = 90000,
}: RaccoonManagerProps) {
  const [raccoons, setRaccoons] = useState<RaccoonScenario[]>([]);
  const controls = useAnimation();
  
  // Calculate next appearance time
  const getNextAppearanceTime = useCallback(() => {
    return Math.random() * (maxInterval - minInterval) + minInterval;
  }, [minInterval, maxInterval]);
  
  // Schedule raccoon appearances
  useEffect(() => {
    const scheduleAppearance = () => {
      const timeUntilAppearance = getNextAppearanceTime();
      
      const timer = setTimeout(() => {
        // Roll for appearance
        if (Math.random() < appearanceChance) {
          // Pick a random position
          const randomScenario = SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
          
          // Only add if we don't already have a raccoon at that position
          setRaccoons(prev => {
            if (prev.some(r => r.position === randomScenario.position)) {
              return prev;
            }
            return [...prev, randomScenario];
          });
        }
        // Schedule next check
        scheduleAppearance();
      }, timeUntilAppearance);
      
      return timer;
    };
    
    // Initial delay before first appearance
    const initialTimer = setTimeout(() => {
      scheduleAppearance();
    }, 3000); // Start after 3 seconds
    
    return () => clearTimeout(initialTimer);
  }, [appearanceChance, getNextAppearanceTime]);
  
  const removeRaccoon = useCallback((id: number) => {
    setRaccoons(prev => prev.filter(r => r.id !== id));
  }, []);
  
  return (
    <>
      {raccoons.map((raccoon) => (
        <Raccoon
          key={raccoon.id}
          position={raccoon.position}
          onRemove={() => removeRaccoon(raccoon.id)}
        />
      ))}
    </>
  );
}

// Wrapper component for the app
interface RaccoonWrapperProps {
  children: React.ReactNode;
}

export function RaccoonWrapper({ children }: RaccoonWrapperProps) {
  return (
    <div className="relative">
      {children}
      <RaccoonManager
        appearanceChance={0.25}
        minInterval={8000}
        maxInterval={15000}
      />
    </div>
  );
}

export default RaccoonManager;
