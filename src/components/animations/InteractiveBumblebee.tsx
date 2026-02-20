import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type BeeEmotion = 'idle' | 'flying' | 'curious' | 'startled' | 'happy' | 'sleeping' | 'waking';

interface TrailDot {
  id: number;
  x: number;
  y: number;
  createdAt: number;
}

const PollinationTrail = ({ dots, color = '#FFB800' }: { dots: TrailDot[]; color?: string }) => {
  const now = Date.now();
  const activeDots = dots.filter(dot => now - dot.createdAt < 1200);

  return (
    <>
      {activeDots.map((dot) => (
        <motion.div
          key={dot.id}
          initial={{ opacity: 0.7, scale: 1 }}
          animate={{ opacity: 0, scale: 0.2, y: -10 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            left: dot.x,
            top: dot.y,
            width: 5,
            height: 5,
            borderRadius: '50%',
            backgroundColor: color,
            pointerEvents: 'none',
            zIndex: 9998,
          }}
        />
      ))}
    </>
  );
};

const BumblebeeIcon = ({ 
  emotion, 
  scale = 1,
  className = '' 
}: { 
  emotion: BeeEmotion; 
  scale?: number;
  className?: string;
}) => {
  const getWingSpeed = () => {
    switch (emotion) {
      case 'startled': return 0.02;
      case 'flying': return 0.06;
      case 'curious': return 0.08;
      case 'happy': return 0.12;
      case 'waking': return 0.1;
      case 'sleeping': return 0.25;
      default: return 0.08;
    }
  };

  const getWingRotation = () => {
    switch (emotion) {
      case 'startled': return [-30, 30, -20, 10, 0];
      case 'sleeping': return [0, -2, 2, -1, 0];
      default: return [-20, 20, -10, 5, 0];
    }
  };

  const getBodyBob = () => {
    switch (emotion) {
      case 'sleeping': return { y: [0, 1, 0] };
      case 'waking': return { y: [-2, 0] };
      default: return {};
    }
  };

  const getEyeExpression = () => {
    switch (emotion) {
      case 'curious':
        return (
          <>
            <circle cx="28" cy="22" r="3.5" fill="#FCD34D" />
            <circle cx="36" cy="22" r="3.5" fill="#FCD34D" />
            <circle cx="28" cy="22" r="1.5" fill="#1F2937" />
            <circle cx="36" cy="22" r="1.5" fill="#1F2937" />
          </>
        );
      case 'startled':
        return (
          <>
            <circle cx="26" cy="24" r="4" fill="#FCD34D" />
            <circle cx="38" cy="24" r="4" fill="#FCD34D" />
            <ellipse cx="26" cy="24" rx="1.5" ry="3" fill="#1F2937" />
            <ellipse cx="38" cy="24" rx="1.5" ry="3" fill="#1F2937" />
          </>
        );
      case 'happy':
        return (
          <>
            <circle cx="28" cy="21" r="3" fill="#FCD34D" />
            <circle cx="36" cy="21" r="3" fill="#FCD34D" />
            <path d="M26 25 Q28 27 30 25" stroke="#1F2937" strokeWidth="1.5" fill="none" />
            <path d="M34 25 Q36 27 38 25" stroke="#1F2937" strokeWidth="1.5" fill="none" />
          </>
        );
      case 'sleeping':
        return (
          <>
            <path d="M26 22 L30 22" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
            <path d="M34 22 L38 22" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
            <path d="M27 26 Q32 28 37 26" stroke="#1F2937" strokeWidth="1.5" fill="none" />
          </>
        );
      default:
        return (
          <>
            <circle cx="28" cy="22" r="2.5" fill="#FCD34D" />
            <circle cx="36" cy="22" r="2.5" fill="#FCD34D" />
          </>
        );
    }
  };

  const antennaWiggle = emotion === 'happy' || emotion === 'waking';

  return (
    <svg 
      viewBox="0 0 64 64" 
      className={`w-full h-full drop-shadow-lg ${className}`}
      style={{ transform: `scale(${scale})` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        animate={{ rotate: getWingRotation() }}
        transition={{ duration: getWingSpeed(), repeat: Infinity, ease: 'linear' }}
      >
        <ellipse cx="18" cy="16" rx="13" ry="9" fill="rgba(255,255,255,0.65)" stroke="rgba(100,100,100,0.25)" strokeWidth="1" transform="rotate(-25,18,16)" />
        <ellipse cx="46" cy="16" rx="13" ry="9" fill="rgba(255,255,255,0.65)" stroke="rgba(100,100,100,0.25)" strokeWidth="1" transform="rotate(25,46,16)" />
      </motion.g>
      
      <motion.g animate={getBodyBob()} transition={{ duration: emotion === 'sleeping' ? 2 : 0.3, repeat: emotion === 'sleeping' ? Infinity : 0, ease: 'easeInOut' }}>
        <ellipse cx="32" cy="36" rx="15" ry="13" fill="#FCD34D" />
        <path d="M19 34 Q32 28 45 34" stroke="#1F2937" strokeWidth="2.5" fill="none" />
        <path d="M21 39 Q32 33 43 39" stroke="#1F2937" strokeWidth="2.5" fill="none" />
        
        <circle cx="32" cy="24" r="7" fill="#1F2937" />
        
        {getEyeExpression()}
        
        <motion.path
          d="M28 18 Q24 12 26 8"
          stroke="#1F2937"
          strokeWidth="2"
          fill="none"
          animate={antennaWiggle ? { d: ['M28 18 Q24 12 26 8', 'M28 18 Q22 14 23 10', 'M28 18 Q24 12 26 8'] } : {}}
          transition={{ duration: 0.25, repeat: antennaWiggle ? Infinity : 0 }}
        />
        <motion.path
          d="M36 18 Q40 12 38 8"
          stroke="#1F2937"
          strokeWidth="2"
          fill="none"
          animate={antennaWiggle ? { d: ['M36 18 Q40 12 38 8', 'M36 18 Q42 14 41 10', 'M36 18 Q40 12 38 8'] } : {}}
          transition={{ duration: 0.25, repeat: antennaWiggle ? Infinity : 0 }}
        />
        
        <path d="M32 49 L30 55 L34 55 Z" fill="#1F2937" />
      </motion.g>
    </svg>
  );
};

interface InteractiveBumblebeeProps {
  enabled?: boolean;
}

export function InteractiveBumblebee({ enabled = true }: InteractiveBumblebeeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [emotion, setEmotion] = useState<BeeEmotion>('idle');
  const [trailDots, setTrailDots] = useState<TrailDot[]>([]);
  const [hint, setHint] = useState<string | null>(null);
  
  const beeRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: -100, y: 100 });
  const targetRef = useRef({ x: -100, y: 100 });
  const mouseRef = useRef({ x: -100, y: -100 });
  const animationFrameRef = useRef<number | null>(null);
  const trailIdCounter = useRef(0);
  const lastClickTime = useRef(0);
  const isFollowingCursor = useRef(false);
  const hasLanded = useRef(false);
  const isIdle = useRef(false);
  const lastMouseMoveTime = useRef(Date.now());
  const isBeeActive = useRef(false);
  const isFlyingAcross = useRef(false);
  const flyAcrossPhase = useRef<'to_edge' | 'crossing' | 'returning' | null>(null);

  const animateBee = useCallback(() => {
    if (!isBeeActive.current) return;

    const dx = targetRef.current.x - positionRef.current.x;
    const dy = targetRef.current.y - positionRef.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance > 1) {
      const ease = 0.08;
      positionRef.current.x += dx * ease;
      positionRef.current.y += dy * ease;
      
      if (beeRef.current) {
        beeRef.current.style.left = `${positionRef.current.x}px`;
        beeRef.current.style.top = `${positionRef.current.y}px`;
      }
    }

    if (Math.random() > 0.92 && !hasLanded.current && isBeeActive.current) {
      setTrailDots(prev => {
        const newDot = {
          id: trailIdCounter.current++,
          x: positionRef.current.x + 24,
          y: positionRef.current.y + 24,
          createdAt: Date.now(),
        };
        return [...prev.slice(-30), newDot];
      });
    }

    const now = Date.now();
    const idleTime = now - lastMouseMoveTime.current;
    
    if (idleTime > 10000 && !hasLanded.current && isBeeActive.current && emotion !== 'sleeping') {
      handleIdle();
    }

    animationFrameRef.current = requestAnimationFrame(animateBee);
  }, [emotion]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
    lastMouseMoveTime.current = Date.now();

    if (isIdle.current) {
      isIdle.current = false;
      if (emotion === 'sleeping') {
        setEmotion('waking');
        setTimeout(() => {
          setEmotion('flying');
          setHint(null);
        }, 500);
      }
    }

    if (!hasLanded.current && !isFollowingCursor.current && isBeeActive.current) {
      targetRef.current = {
        x: mouseRef.current.x + (Math.random() - 0.5) * 60 - 28,
        y: mouseRef.current.y + (Math.random() - 0.5) * 60 - 28,
      };
      
      if (emotion !== 'flying' && emotion !== 'curious') {
        setEmotion('flying');
      }
    }
  }, [emotion]);

  const handleClick = useCallback(async () => {
    const now = Date.now();
    const isDoubleClick = now - lastClickTime.current < 300;
    lastClickTime.current = now;

    if (emotion === 'sleeping') {
      setEmotion('waking');
      setHint('☀️ Good morning!');
      
      setTimeout(() => {
        setEmotion('flying');
        setHint(null);
        hasLanded.current = false;
        isIdle.current = false;
        
        targetRef.current = {
          x: window.innerWidth * 0.2,
          y: window.innerHeight * 0.25,
        };
      }, 500);
      return;
    }

    if (isDoubleClick) {
      setEmotion('happy');
      setHint('🎉 Yay!');
      
      isFollowingCursor.current = true;
      for (let i = 0; i < 3; i++) {
        targetRef.current = {
          x: mouseRef.current.x + Math.cos(i * Math.PI * 2 / 3) * 60 - 28,
          y: mouseRef.current.y + Math.sin(i * Math.PI * 2 / 3) * 60 - 28,
        };
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      
      targetRef.current = {
        x: mouseRef.current.x - 28,
        y: mouseRef.current.y - 28,
      };
      
      await new Promise(resolve => setTimeout(resolve, 300));
      isFollowingCursor.current = false;
      
      setTimeout(() => {
        setHint(null);
        setEmotion('flying');
      }, 1000);
      return;
    }

    setEmotion('startled');
    setHint('💛 Buzz!');

    const corners = [
      { x: -80, y: -80 },
      { x: window.innerWidth + 80, y: -80 },
      { x: -80, y: window.innerHeight + 80 },
      { x: window.innerWidth + 80, y: window.innerHeight + 80 },
    ];
    const corner = corners[Math.floor(Math.random() * corners.length)];
    
    targetRef.current = corner;
    
    await new Promise(resolve => setTimeout(resolve, 400));
    
    setTimeout(() => {
      targetRef.current = {
        x: window.innerWidth * 0.1 + (Math.random() - 0.5) * 100,
        y: window.innerHeight * 0.2 + (Math.random() - 0.5) * 100,
      };
      setEmotion('flying');
      hasLanded.current = false;
      setHint('👋 I\'m back!');
      setTimeout(() => setHint(null), 2000);
    }, 1500);
  }, [emotion]);

  const handleIdle = useCallback(async () => {
    if (hasLanded.current) return;
    
    isIdle.current = true;
    hasLanded.current = true;
    
    const corners = [
      { x: 80, y: 80 },
      { x: window.innerWidth - 80, y: 80 },
      { x: 80, y: window.innerHeight - 80 },
      { x: window.innerWidth - 80, y: window.innerHeight - 80 },
    ];
    
    const corner = corners[Math.floor(Math.random() * corners.length)];
    targetRef.current = corner;
    
    setEmotion('sleeping');
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setHint('💤 Zzz...');
    setTimeout(() => setHint(null), 2000);
  }, []);

  const startFlyAcrossSequence = useCallback(async () => {
    if (isFlyingAcross.current || hasLanded.current || isIdle.current) return;
    
    isFlyingAcross.current = true;
    flyAcrossPhase.current = 'to_edge';
    
    const edges = [
      { start: { x: -80, y: Math.random() * window.innerHeight }, end: { x: window.innerWidth + 80, y: Math.random() * window.innerHeight } },
      { start: { x: window.innerWidth + 80, y: Math.random() * window.innerHeight }, end: { x: -80, y: Math.random() * window.innerHeight } },
      { start: { x: Math.random() * window.innerWidth, y: -80 }, end: { x: Math.random() * window.innerWidth, y: window.innerHeight + 80 } },
      { start: { x: Math.random() * window.innerWidth, y: window.innerHeight + 80 }, end: { x: Math.random() * window.innerWidth, y: -80 } },
    ];
    
    const edge = edges[Math.floor(Math.random() * edges.length)];
    
    targetRef.current = { x: edge.start.x - 28, y: edge.start.y - 28 };
    setEmotion('flying');
    
    await new Promise(resolve => setTimeout(resolve, 600));
    
    flyAcrossPhase.current = 'crossing';
    
    const steps = 20;
    const dx = (edge.end.x - edge.start.x) / steps;
    const dy = (edge.end.y - edge.start.y) / steps;
    
    for (let i = 0; i < steps; i++) {
      targetRef.current = {
        x: edge.start.x + dx * (i + 1) - 28,
        y: edge.start.y + dy * (i + 1) - 28,
      };
      
      setTrailDots(prev => {
        const newDot = {
          id: trailIdCounter.current++,
          x: edge.start.x + dx * (i + 1),
          y: edge.start.y + dy * (i + 1),
          createdAt: Date.now(),
        };
        return [...prev.slice(-50), newDot];
      });
      
      await new Promise(resolve => setTimeout(resolve, 80));
    }
    
    flyAcrossPhase.current = 'returning';
    
    const returnX = mouseRef.current.x - 28;
    const returnY = mouseRef.current.y - 28;
    targetRef.current = { x: returnX, y: returnY };
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    isFlyingAcross.current = false;
    flyAcrossPhase.current = null;
    
    setEmotion('flying');
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (emotion !== 'sleeping') {
      setEmotion('startled');
      setTimeout(() => {
        if (emotion === 'startled' && !hasLanded.current) {
          setEmotion('flying');
        }
      }, 300);
    }
  }, [emotion]);

  useEffect(() => {
    if (!enabled) return;

    const entranceDelay = setTimeout(() => {
      setIsVisible(true);
      isBeeActive.current = true;
      
      const startX = window.innerWidth * 0.1;
      const startY = window.innerHeight * 0.3;
      
      positionRef.current = { x: startX, y: startY };
      targetRef.current = { 
        x: window.innerWidth * 0.2, 
        y: window.innerHeight * 0.25 
      };
      
      if (beeRef.current) {
        beeRef.current.style.left = `${startX}px`;
        beeRef.current.style.top = `${startY}px`;
      }

      animationFrameRef.current = requestAnimationFrame(animateBee);

      setTimeout(() => {
        setEmotion('flying');
        setHint('👋 Hi! I\'m Buzz!');
        setTimeout(() => setHint(null), 2500);
      }, 2000);
    }, 1500);

    return () => {
      clearTimeout(entranceDelay);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      isBeeActive.current = false;
    };
  }, [enabled, animateBee]);

  useEffect(() => {
    if (!isVisible || !enabled) return;

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isVisible, enabled, handleMouseMove]);

  useEffect(() => {
    if (!isVisible || !enabled) return;

    const scheduleFlyAcross = () => {
      const delay = 10000 + Math.random() * 10000;
      const timerId = window.setTimeout(() => {
        startFlyAcrossSequence();
        scheduleFlyAcross();
      }, delay);
      return timerId;
    };

    const timerId = scheduleFlyAcross();

    return () => {
      clearTimeout(timerId);
    };
  }, [isVisible, enabled, startFlyAcrossSequence]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const beeScale = isMobile ? 0.75 : 1;

  if (!enabled) return null;

  return (
    <>
      <AnimatePresence>
        {trailDots.length > 0 && <PollinationTrail dots={trailDots} />}
      </AnimatePresence>

      <AnimatePresence>
        {hint && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.9 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-[10000] pointer-events-none"
          >
            <div className="bg-navy-dark/90 backdrop-blur-sm text-cream px-4 py-2 rounded-full text-sm border border-cream/10 shadow-lg">
              {hint}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={beeRef}
            className="fixed pointer-events-auto cursor-pointer z-[9999]"
            style={{
              left: positionRef.current.x,
              top: positionRef.current.y,
              width: 56 * beeScale,
              height: 56 * beeScale,
              x: -28 * beeScale,
              y: -28 * beeScale,
            }}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            initial={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
          >
            <BumblebeeIcon emotion={emotion} scale={beeScale} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface InteractiveBumblebeeWrapperProps {
  children: React.ReactNode;
}

export function InteractiveBumblebeeWrapper({ children }: InteractiveBumblebeeWrapperProps) {
  return (
    <div className="relative">
      {children}
      <InteractiveBumblebee enabled={true} />
    </div>
  );
}

export default InteractiveBumblebee;
