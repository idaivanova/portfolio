import { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';

// ========================
// 10 PATH SCENARIOS
// ========================

type PathScenario = {
  id: number;
  name: string;
  description: string;
  path: { x: number; y: number }[];
  duration: number;
};

// Scenario 1: Straight horizontal flight - left to right
const SCENARIO_1: PathScenario = {
  id: 1,
  name: 'Straight Shot',
  description: 'Flies straight across from left edge to right edge',
  path: [
    { x: -100, y: 30 },
    { x: 25, y: 30 },
    { x: 50, y: 30 },
    { x: 75, y: 30 },
    { x: 110, y: 30 },
  ],
  duration: 8000,
};

// Scenario 2: Top-to-bottom with slight wobble
const SCENARIO_2: PathScenario = {
  id: 2,
  name: 'Diving Flight',
  description: 'Dives from top, zigzags down to bottom',
  path: [
    { x: 20, y: -100 },
    { x: 30, y: -50 },
    { x: 15, y: -25 },
    { x: 35, y: 0 },
    { x: 20, y: 25 },
    { x: 40, y: 50 },
    { x: 25, y: 75 },
    { x: 30, y: 110 },
  ],
  duration: 10000,
};

// Scenario 3: Diagonal - bottom-left to top-right
const SCENARIO_3: PathScenario = {
  id: 3,
  name: 'Diagonal Ascend',
  description: 'Flies diagonally upward from bottom-left to top-right',
  path: [
    { x: -10, y: 110 },
    { x: 20, y: 75 },
    { x: 40, y: 50 },
    { x: 60, y: 25 },
    { x: 80, y: 0 },
    { x: 110, y: -20 },
  ],
  duration: 9000,
};

// Scenario 4: S-curve through center
const SCENARIO_4: PathScenario = {
  id: 4,
  name: 'S-Curve',
  description: 'Wavy S-curve path through the center of screen',
  path: [
    { x: -50, y: 50 },
    { x: 0, y: 20 },
    { x: 25, y: 60 },
    { x: 50, y: 40 },
    { x: 75, y: 60 },
    { x: 100, y: 30 },
    { x: 130, y: 50 },
  ],
  duration: 10000,
};

// Scenario 5: Crawl then fly - lands, explores, then takes off
const SCENARIO_5: PathScenario = {
  id: 5,
  name: 'Explorer',
  description: 'Lands on page, crawls around, then flies away',
  path: [
    { x: -20, y: 40 },
    { x: 10, y: 40 },
    { x: 15, y: 45 }, // land
    { x: 18, y: 48 }, // crawl
    { x: 22, y: 45 },
    { x: 20, y: 40 },
    { x: 25, y: 35 }, // ready to fly
    { x: 50, y: -20 }, // takeoff
    { x: 100, y: -50 },
  ],
  duration: 15000,
};

// Scenario 6: Hover and pause at content areas
const SCENARIO_6: PathScenario = {
  id: 6,
  name: 'Content Visitor',
  description: 'Pauses at different sections like visiting content',
  path: [
    { x: -30, y: 50 },
    { x: 15, y: 50 }, // pause at hero
    { x: 20, y: 48 },
    { x: 15, y: 52 },
    { x: 15, y: 50 },
    { x: 50, y: 30 }, // move to features
    { x: 48, y: 28 },
    { x: 52, y: 32 },
    { x: 50, y: 30 },
    { x: 80, y: 50 }, // move to CTA
    { x: 120, y: 50 },
  ],
  duration: 18000,
};

// Scenario 7: Zigzag sharp turns
const SCENARIO_7: PathScenario = {
  id: 7,
  name: 'Zigzag',
  description: 'Sharp zigzag pattern across the screen',
  path: [
    { x: -20, y: -10 },
    { x: 20, y: 40 },
    { x: 40, y: -10 },
    { x: 60, y: 40 },
    { x: 80, y: -10 },
    { x: 100, y: 40 },
    { x: 120, y: -10 },
  ],
  duration: 7000,
};

// Scenario 8: Circular tour around edges
const SCENARIO_8: PathScenario = {
  id: 8,
  name: 'Edge Tour',
  description: 'Flies around the edges of the viewport',
  path: [
    { x: -20, y: 50 },
    { x: 10, y: 20 },
    { x: 50, y: -20 },
    { x: 90, y: 20 },
    { x: 120, y: 50 },
    { x: 90, y: 80 },
    { x: 50, y: 120 },
    { x: 10, y: 80 },
    { x: -20, y: 50 },
  ],
  duration: 15000,
};

// Scenario 9: Spiral in then fly out
const SCENARIO_9: PathScenario = {
  id: 9,
  name: 'Spiral',
  description: 'Spirals inward to center then flies out',
  path: [
    { x: -50, y: -50 },
    { x: 70, y: 30 },
    { x: 30, y: 70 },
    { x: 60, y: 40 },
    { x: 40, y: 60 },
    { x: 50, y: 50 }, // center
    { x: 70, y: 30 },
    { x: 100, y: 0 },
    { x: 130, y: -30 },
  ],
  duration: 12000,
};

// Scenario 10: The shy bee - crawls slowly, click to scare away
const SCENARIO_10: PathScenario = {
  id: 10,
  name: 'Shy Crawler',
  description: 'Crawls slowly on page, flies away fast if clicked',
  path: [
    { x: 30, y: 60 },
    { x: 35, y: 62 },
    { x: 40, y: 60 },
    { x: 45, y: 62 },
    { x: 50, y: 60 },
    { x: 55, y: 58 },
    { x: 60, y: 55 },
  ],
  duration: 20000,
};

const SCENARIOS: PathScenario[] = [
  SCENARIO_1,
  SCENARIO_2,
  SCENARIO_3,
  SCENARIO_4,
  SCENARIO_5,
  SCENARIO_6,
  SCENARIO_7,
  SCENARIO_8,
  SCENARIO_9,
  SCENARIO_10,
];

// ========================
// BUMBLEBEE SVG COMPONENT
// ========================

function BumblebeeIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Wings */}
      <motion.g
        animate={{
          rotate: [0, -10, 10, -5, 0],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* Left wing */}
        <ellipse
          cx="20"
          cy="18"
          rx="14"
          ry="10"
          fill="rgba(255, 255, 255, 0.7)"
          stroke="rgba(100, 100, 100, 0.3)"
          strokeWidth="1"
          transform="rotate(-20, 20, 18)"
        />
        {/* Right wing */}
        <ellipse
          cx="44"
          cy="18"
          rx="14"
          ry="10"
          fill="rgba(255, 255, 255, 0.7)"
          stroke="rgba(100, 100, 100, 0.3)"
          strokeWidth="1"
          transform="rotate(20, 44, 18)"
        />
      </motion.g>
      
      {/* Body */}
      <ellipse cx="32" cy="36" rx="16" ry="14" fill="#FCD34D" />
      
      {/* Stripes */}
      <path d="M18 34 Q32 28 46 34" stroke="#1F2937" strokeWidth="3" fill="none" />
      <path d="M20 40 Q32 34 44 40" stroke="#1F2937" strokeWidth="3" fill="none" />
      
      {/* Head */}
      <circle cx="32" cy="24" r="8" fill="#1F2937" />
      
      {/* Eyes */}
      <circle cx="29" cy="22" r="2" fill="#FCD34D" />
      <circle cx="35" cy="22" r="2" fill="#FCD34D" />
      
      {/* Antennae */}
      <motion.path
        d="M28 18 Q24 12 26 8"
        stroke="#1F2937"
        strokeWidth="2"
        fill="none"
        animate={{ d: ['M28 18 Q24 12 26 8', 'M28 18 Q24 14 25 10', 'M28 18 Q24 12 26 8'] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
      <motion.path
        d="M36 18 Q40 12 38 8"
        stroke="#1F2937"
        strokeWidth="2"
        fill="none"
        animate={{ d: ['M36 18 Q40 12 38 8', 'M36 18 Q40 14 39 10', 'M36 18 Q40 12 38 8'] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
      
      {/* Stinger */}
      <path d="M32 50 L30 56 L34 56 Z" fill="#1F2937" />
    </svg>
  );
}

// ========================
// MAIN COMPONENT
// ========================

interface BumblebeeProps {
  // Probability of appearing (0-1). Default 15% chance
  appearanceChance?: number;
  // Minimum time between appearances in ms. Default 30 seconds
  minInterval?: number;
  // Maximum time between appearances in ms. Default 90 seconds
  maxInterval?: number;
}

export function Bumblebee({
  appearanceChance = 0.15,
  minInterval = 30000,
  maxInterval = 90000,
}: BumblebeeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentScenario, setCurrentScenario] = useState<PathScenario | null>(null);
  const [isFlyingAway, setIsFlyingAway] = useState(false);
  const controls = useAnimation();

  // Calculate next appearance time
  const getNextAppearanceTime = useCallback(() => {
    return Math.random() * (maxInterval - minInterval) + minInterval;
  }, [minInterval, maxInterval]);

  // Schedule next appearance - can appear multiple times
  useEffect(() => {
    const scheduleAppearance = () => {
      const timeUntilAppearance = getNextAppearanceTime();
      
      const timer = setTimeout(() => {
        // Roll for appearance
        if (Math.random() < appearanceChance) {
          // Select random scenario
          const randomScenario = SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
          setCurrentScenario(randomScenario);
          setIsVisible(true);
          setIsFlyingAway(false);
        }
        // Schedule next check
        scheduleAppearance();
      }, timeUntilAppearance);

      return timer;
    };

    // Initial delay before first appearance
    const initialTimer = setTimeout(() => {
      scheduleAppearance();
    }, 5000); // Start after 5 seconds

    return () => clearTimeout(initialTimer);
  }, [appearanceChance, getNextAppearanceTime]);

  // Handle flying away animation
  useEffect(() => {
    if (!isVisible || !currentScenario) return;

    const flyAwaySequence = async () => {
      // Play the scenario path
      await controls.start({
        left: `${currentScenario.path[currentScenario.path.length - 1].x}%`,
        top: `${currentScenario.path[currentScenario.path.length - 1].y}%`,
        transition: {
          duration: currentScenario.duration / 1000,
          ease: 'linear',
        },
      });
      
      // Fade out
      await controls.start({ opacity: 0, transition: { duration: 0.3 } });
      setIsVisible(false);
      setCurrentScenario(null);
    };

    if (!isFlyingAway) {
      flyAwaySequence();
    }
  }, [isVisible, currentScenario, controls, isFlyingAway]);

  // Click handler - scare the bee away
  const handleClick = useCallback(() => {
    if (!isVisible || isFlyingAway) return;
    
    setIsFlyingAway(true);
    
    // Pick a random corner to fly to
    const corners = [
      { x: -20, y: -20 },   // top-left
      { x: 120, y: -20 },   // top-right
      { x: -20, y: 120 },   // bottom-left
      { x: 120, y: 120 },   // bottom-right
    ];
    const corner = corners[Math.floor(Math.random() * corners.length)];
    
    // Fly away faster than normal
    controls.start({
      left: `${corner.x}%`,
      top: `${corner.y}%`,
      scale: 0.5,
      rotate: Math.random() * 360,
      transition: {
        duration: 0.5, // Much faster!
        ease: [0.25, 0.1, 0.25, 1],
      },
    }).then(() => {
      controls.start({ opacity: 0, transition: { duration: 0.2 } });
      setIsVisible(false);
      setIsFlyingAway(false);
      setCurrentScenario(null);
    });
  }, [isVisible, isFlyingAway, controls]);

  if (!isVisible || !currentScenario) return null;

  return (
    <motion.div
      className="fixed pointer-events-auto cursor-pointer z-[9999]"
      style={{
        left: `${currentScenario.path[0].x}%`,
        top: `${currentScenario.path[0].y}%`,
        width: 64,
        height: 64,
      }}
      animate={controls}
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      {/* Tooltip on hover */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
        <span className="text-xs bg-black/75 text-white px-2 py-1 rounded">
          {isFlyingAway ? 'Buzzing away!' : '👋 Click to shoo!'}
        </span>
      </div>
      
      <BumblebeeIcon className="w-full h-full drop-shadow-lg" />
    </motion.div>
  );
}

// ========================
// WRAPPER FOR OCCASIONAL APPEARANCE
// ========================

interface BumblebeeWrapperProps {
  children: React.ReactNode;
}

export function BumblebeeWrapper({ children }: BumblebeeWrapperProps) {
  return (
    <div className="relative">
      {children}
      <Bumblebee
        appearanceChance={0.3}
        minInterval={30000}
        maxInterval={60000}
      />
    </div>
  );
}

export default Bumblebee;
