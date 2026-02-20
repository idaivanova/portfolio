// ============================================
// BumblebeeCursor Component
// Enhanced bumblebee with cursor-following and click interactions
// ============================================

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface Position {
  x: number;
  y: number;
}

interface TrailDot {
  id: number;
  x: number;
  y: number;
  createdAt: number;
}

// Pollination Trail
function PollinationTrail({ dots, color = '#FFB800' }: { dots: TrailDot[]; color?: string }) {
  const now = Date.now();
  const activeDots = dots.filter(dot => now - dot.createdAt < 1500);

  return (
    <>
      {activeDots.map((dot) => (
        <motion.div
          key={dot.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0.3, y: -15 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            left: dot.x,
            top: dot.y,
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: color,
            pointerEvents: 'none',
            zIndex: 9998,
          }}
        />
      ))}
    </>
  );
}

// Bee Icon Component
function BumblebeeIcon({ emotion }: { emotion: 'idle' | 'curious' | 'startled' | 'happy' }) {
  const getWingSpeed = () => {
    switch (emotion) {
      case 'startled': return 0.03;
      case 'happy': return 0.15;
      default: return 0.08;
    }
  };

  return (
    <svg viewBox="0 0 64 64" className="w-full h-full drop-shadow-lg" xmlns="http://www.w3.org/2000/svg">
      <motion.g
        animate={{ rotate: [0, -20, 20, -10, 0] }}
        transition={{ duration: getWingSpeed(), repeat: Infinity, ease: 'linear' }}
      >
        <ellipse cx="20" cy="18" rx="14" ry="10" fill="rgba(255,255,255,0.7)" stroke="rgba(100,100,100,0.3)" strokeWidth="1" transform="rotate(-20,20,18)" />
        <ellipse cx="44" cy="18" rx="14" ry="10" fill="rgba(255,255,255,0.7)" stroke="rgba(100,100,100,0.3)" strokeWidth="1" transform="rotate(20,44,18)" />
      </motion.g>
      
      <ellipse cx="32" cy="36" rx="16" ry="14" fill="#FCD34D" />
      <path d="M18 34 Q32 28 46 34" stroke="#1F2937" strokeWidth="3" fill="none" />
      <path d="M20 40 Q32 34 44 40" stroke="#1F2937" strokeWidth="3" fill="none" />
      
      <circle cx="32" cy="24" r="8" fill="#1F2937" />
      
      {emotion === 'curious' ? (
        <>
          <circle cx="29" cy="22" r="3" fill="#FCD34D" />
          <circle cx="35" cy="22" r="3" fill="#FCD34D" />
          <circle cx="29" cy="22" r="1" fill="#1F2937" />
          <circle cx="35" cy="22" r="1" fill="#1F2937" />
        </>
      ) : emotion === 'startled' ? (
        <>
          <circle cx="27" cy="24" r="3" fill="#FCD34D" />
          <circle cx="37" cy="24" r="3" fill="#FCD34D" />
        </>
      ) : (
        <>
          <circle cx="29" cy="22" r="2" fill="#FCD34D" />
          <circle cx="35" cy="22" r="2" fill="#FCD34D" />
        </>
      )}
      
      <motion.path
        d="M28 18 Q24 12 26 8"
        stroke="#1F2937"
        strokeWidth="2"
        fill="none"
        animate={emotion === 'happy' ? { d: ['M28 18 Q24 12 26 8', 'M28 18 Q20 14 22 10', 'M28 18 Q24 12 26 8'] } : {}}
        transition={{ duration: 0.3, repeat: emotion === 'happy' ? Infinity : 0 }}
      />
      <motion.path
        d="M36 18 Q40 12 38 8"
        stroke="#1F2937"
        strokeWidth="2"
        fill="none"
        animate={emotion === 'happy' ? { d: ['M36 18 Q40 12 38 8', 'M36 18 Q44 14 42 10', 'M36 18 Q40 12 38 8'] } : {}}
        transition={{ duration: 0.3, repeat: emotion === 'happy' ? Infinity : 0 }}
      />
      
      <path d="M32 50 L30 56 L34 56 Z" fill="#1F2937" />
    </svg>
  );
}

export function BumblebeeCursor() {
  const [cursorPosition, setCursorPosition] = useState<Position>({ x: 0, y: 0 });
  const [isBeeVisible, setIsBeeVisible] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isInvestigating, setIsInvestigating] = useState(false);
  const [emotion, setEmotion] = useState<'idle' | 'curious' | 'startled' | 'happy'>('idle');
  const [trailDots, setTrailDots] = useState<TrailDot[]>([]);
  const [hint, setHint] = useState<string | null>(null);
  
  const controls = useAnimation();
  const lastMouseMoveTime = useRef<number>(Date.now());
  const trailIdCounter = useRef<number>(0);
  const interactionCount = useRef<number>(0);

  // Initial entrance
  useEffect(() => {
    setIsBeeVisible(true);
    controls.start({
      left: window.innerWidth / 2,
      top: window.innerHeight / 2,
      transition: { duration: 1.5, ease: 'easeOut' },
    });
    setHint('Move your cursor to lead the bee');
    setTimeout(() => setHint(null), 2500);
  }, [controls]);

  // Track cursor
  useEffect(() => {
    if (!isBeeVisible) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      lastMouseMoveTime.current = Date.now();
      
      if (isInvestigating) setIsInvestigating(false);
      
      // Trail
      if (Math.random() > 0.75) {
        setTrailDots(prev => [...prev.slice(-25), {
          id: trailIdCounter.current++,
          x: e.clientX - 3,
          y: e.clientY - 3,
          createdAt: Date.now(),
        }]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isBeeVisible, isInvestigating]);

  // Idle investigation
  useEffect(() => {
    if (!isBeeVisible) return;

    const checkIdle = setInterval(() => {
      const idleTime = Date.now() - lastMouseMoveTime.current;
      
      if (idleTime > 3000 && !isFollowing && !isInvestigating) {
        setIsFollowing(true);
        setEmotion('curious');
        
        controls.start({
          left: cursorPosition.x,
          top: cursorPosition.y,
          transition: { duration: 1, ease: 'easeOut' },
        }).then(() => {
          setIsFollowing(false);
          setIsInvestigating(true);
          
          // Circle around
          const circle = async () => {
            for (let i = 0; i < 3; i++) {
              const angle = (Math.PI * 2 * i) / 3;
              await controls.start({
                left: cursorPosition.x + Math.cos(angle) * 35,
                top: cursorPosition.y + Math.sin(angle) * 35,
                transition: { duration: 0.4, ease: 'easeInOut' },
              });
            }
          };
          circle();
          
          setTimeout(() => {
            setIsInvestigating(false);
            setEmotion('idle');
            controls.start({
              left: cursorPosition.x + (Math.random() - 0.5) * 100,
              top: cursorPosition.y + (Math.random() - 0.5) * 100,
              transition: { duration: 0.8, ease: 'easeOut' },
            });
          }, 2000);
        });
      }
    }, 500);

    return () => clearInterval(checkIdle);
  }, [isBeeVisible, isFollowing, isInvestigating, cursorPosition, controls]);

  // Click interactions
  const handleClick = () => {
    interactionCount.current++;
    const count = interactionCount.current;
    
    // Different responses based on click number
    const responses = [
      { hint: 'Buzz! Bee startled!', emotion: 'startled' as const, duration: 400 },
      { hint: 'Happy bounce!', emotion: 'happy' as const, duration: 600 },
      { hint: 'Spin!', emotion: 'idle' as const, duration: 500 },
      { hint: 'Bee giggles!', emotion: 'happy' as const, duration: 500 },
    ];
    
    const response = responses[count % responses.length];
    
    setEmotion(response.emotion);
    setHint(response.hint);
    
    // Fun click animation
    controls.start({
      scale: [1, 1.5, 0.8, 1.2, 1],
      rotate: [0, 30, -30, 15, 0],
      transition: { duration: 0.4 },
    }).then(() => {
      // Fly to corner then back
      const corner = [
        { x: -50, y: -50 },
        { x: window.innerWidth + 50, y: -50 },
        { x: -50, y: window.innerHeight + 50 },
        { x: window.innerWidth + 50, y: window.innerHeight + 50 },
      ][Math.floor(Math.random() * 4)];
      
      controls.start({
        left: corner.x,
        top: corner.y,
        transition: { duration: 0.3, ease: 'easeIn' },
      }).then(() => {
        // Come back quickly
        setTimeout(() => {
          controls.start({
            left: window.innerWidth / 2,
            top: window.innerHeight / 2,
            transition: { duration: 0.6, ease: 'easeOut' },
          });
          setEmotion('idle');
          setHint(null);
        }, count % 2 === 0 ? 500 : 200);
      });
    });
    
    setTimeout(() => setHint(null), response.duration + 800);
  };

  if (!isBeeVisible) return null;

  return (
    <>
      {trailDots.length > 0 && <PollinationTrail dots={trailDots} />}
      
      {hint && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-[10000] pointer-events-none"
        >
          <div className="bg-navy-dark/90 backdrop-blur-sm text-cream px-4 py-2 rounded-full text-sm border border-cream/10">
            {hint}
          </div>
        </motion.div>
      )}

      <motion.div
        className="fixed pointer-events-auto cursor-pointer z-[9999] w-14 h-14"
        animate={controls}
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
      >
        <BumblebeeIcon emotion={emotion} />
      </motion.div>
    </>
  );
}

export function BumblebeeCursorWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <BumblebeeCursor />
    </div>
  );
}

export default BumblebeeCursor;
