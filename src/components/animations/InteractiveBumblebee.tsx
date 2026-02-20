import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type BeeEmotion = 'idle' | 'flying' | 'curious' | 'startled' | 'happy' | 'sleeping' | 'waking' | 'walking' | 'landing' | 'investigating';

type MovementMode = 'flying' | 'walking' | 'hovering' | 'resting';

interface TrailDot {
  id: number;
  x: number;
  y: number;
  createdAt: number;
}

interface UIElement {
  element: Element;
  rect: DOMRect;
  type: 'button' | 'link' | 'interactive';
}

interface TouchTarget {
  x: number;
  y: number;
  timestamp: number;
}

const isMobile = () => typeof window !== 'undefined' && window.innerWidth < 768;

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
  movementMode = 'flying',
  rotation = 0,
  className = '' 
}: { 
  emotion: BeeEmotion; 
  scale?: number;
  movementMode?: MovementMode;
  rotation?: number;
  className?: string;
}) => {
  const getWingSpeed = () => {
    if (movementMode === 'walking') return 0.4;
    if (movementMode === 'resting') return 1;
    switch (emotion) {
      case 'startled': return 0.02;
      case 'flying': return 0.06;
      case 'curious': return 0.08;
      case 'happy': return 0.12;
      case 'waking': return 0.1;
      case 'sleeping': return 0.25;
      case 'investigating': return 0.05;
      default: return 0.08;
    }
  };

  const getWingRotation = () => {
    if (movementMode === 'walking' || movementMode === 'resting') return [0, -3, 3, -2, 0];
    switch (emotion) {
      case 'startled': return [-30, 30, -20, 10, 0];
      case 'sleeping': return [0, -2, 2, -1, 0];
      default: return [-20, 20, -10, 5, 0];
    }
  };

  const getBodyBob = () => {
    if (movementMode === 'resting') {
      return { y: [0, 1.5, 0, 1, 0], scale: [1, 1.02, 1, 1.01, 1] };
    }
    if (movementMode === 'walking') {
      return { y: [0, -1, 0, -1, 0], rotate: [0, 2, 0, -2, 0] };
    }
    switch (emotion) {
      case 'sleeping': return { y: [0, 1, 0] };
      case 'waking': return { y: [-2, 0] };
      default: return {};
    }
  };

  const getEyeExpression = () => {
    switch (emotion) {
      case 'curious':
      case 'investigating':
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

  const antennaWiggle = emotion === 'happy' || emotion === 'waking' || emotion === 'curious' || movementMode === 'walking';

  const getLegAnimation = () => {
    if (movementMode === 'walking') {
      return {
        leftLeg: { rotate: [-10, 10, -10], x: [0, 2, 0] },
        rightLeg: { rotate: [10, -10, 10], x: [0, -2, 0] },
      };
    }
    return { leftLeg: {}, rightLeg: {} };
  };

  const legAnim = getLegAnimation();

  return (
    <svg 
      viewBox="0 0 64 64" 
      className={`w-full h-full drop-shadow-lg ${className}`}
      style={{ transform: `scale(${scale}) rotate(${rotation}deg)` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        animate={{ rotate: getWingRotation() }}
        transition={{ duration: getWingSpeed(), repeat: Infinity, ease: 'linear' }}
      >
        <ellipse cx="18" cy="16" rx="13" ry="9" fill="rgba(255,255,255,0.65)" stroke="rgba(100,100,100,0.25)" strokeWidth="1" transform="rotate(-25,18,16)" />
        <ellipse cx="46" cy="16" rx="13" ry="9" fill="rgba(255,255,255,0.65)" stroke="rgba(100,100,100,0.25)" strokeWidth="1" transform="rotate(25,46,16)" />
      </motion.g>
      
      <motion.g animate={getBodyBob()} transition={{ duration: emotion === 'sleeping' || movementMode === 'resting' ? 3 : movementMode === 'walking' ? 0.3 : 0.3, repeat: emotion === 'sleeping' || movementMode === 'resting' || movementMode === 'walking' ? Infinity : 0, ease: 'easeInOut' }}>
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
          transition={{ duration: emotion === 'curious' || movementMode === 'walking' ? 0.15 : 0.25, repeat: antennaWiggle ? Infinity : 0 }}
        />
        <motion.path
          d="M36 18 Q40 12 38 8"
          stroke="#1F2937"
          strokeWidth="2"
          fill="none"
          animate={antennaWiggle ? { d: ['M36 18 Q40 12 38 8', 'M36 18 Q42 14 41 10', 'M36 18 Q40 12 38 8'] } : {}}
          transition={{ duration: emotion === 'curious' || movementMode === 'walking' ? 0.15 : 0.25, repeat: antennaWiggle ? Infinity : 0 }}
        />
        
        <path d="M32 49 L30 55 L34 55 Z" fill="#1F2937" />
        
        <motion.g animate={legAnim.leftLeg} transition={{ duration: 0.2, repeat: movementMode === 'walking' ? Infinity : 0, ease: 'easeInOut' }}>
          <path d="M22 44 L18 52" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
        </motion.g>
        <motion.g animate={legAnim.rightLeg} transition={{ duration: 0.2, repeat: movementMode === 'walking' ? Infinity : 0, ease: 'easeInOut', delay: 0.1 }}>
          <path d="M42 44 L46 52" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" />
        </motion.g>
      </motion.g>

      {movementMode === 'walking' && (
        <motion.circle
          cx="32"
          cy="58"
          r="2"
          fill="rgba(0,0,0,0.1)"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
    </svg>
  );
};

interface InteractiveBumblebeeProps {
  enabled?: boolean;
  appearanceProbability?: number;
}

export function InteractiveBumblebee({ 
  enabled = true,
  appearanceProbability 
}: InteractiveBumblebeeProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [emotion, setEmotion] = useState<BeeEmotion>('idle');
  const [movementMode, setMovementMode] = useState<MovementMode>('flying');
  const [trailDots, setTrailDots] = useState<TrailDot[]>([]);
  const [hint, setHint] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  
  const beeRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: -100, y: 100 });
  const targetRef = useRef({ x: -100, y: 100 });
  const mouseRef = useRef({ x: -100, y: -100 });
  const touchTargetRef = useRef<TouchTarget | null>(null);
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
  const isWalkingEdge = useRef(false);
  const isInvestigatingUI = useRef(false);
  const isResting = useRef(false);
  const activityStartTime = useRef(Date.now());
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isLongPress = useRef(false);
  const mobileDetected = useRef(isMobile());

  const EDGE_THRESHOLD = 40;
  const CORNER_THRESHOLD = 60;
  const ACTIVE_DURATION_BEFORE_REST = 30000;
  const UI_INVESTIGATION_CHANCE = 0.3;

  const getViewportEdges = useCallback(() => {
    return {
      top: EDGE_THRESHOLD,
      right: window.innerWidth - EDGE_THRESHOLD,
      bottom: window.innerHeight - EDGE_THRESHOLD,
      left: EDGE_THRESHOLD,
    };
  }, []);

  const getUIElements = useCallback((): UIElement[] => {
    if (!mobileDetected.current) return [];
    
    const elements: UIElement[] = [];
    const interactiveSelectors = 'button, a, [role="button"], input, textarea, select, [tabindex]:not([tabindex="-1"])';
    
    document.querySelectorAll(interactiveSelectors).forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        const tagName = el.tagName.toLowerCase();
        let type: 'button' | 'link' | 'interactive' = 'interactive';
        if (tagName === 'a') type = 'link';
        else if (tagName === 'button' || el.getAttribute('role') === 'button') type = 'button';
        
        elements.push({ element: el, rect, type });
      }
    });
    
    return elements;
  }, []);

  const detectCurrentEdge = useCallback((x: number, y: number): 'top' | 'right' | 'bottom' | 'left' | null => {
    const edges = getViewportEdges();
    
    if (y < edges.top) return 'top';
    if (x > edges.right) return 'right';
    if (y > edges.bottom) return 'bottom';
    if (x < edges.left) return 'left';
    
    return null;
  }, [getViewportEdges]);

  const detectCorner = useCallback((x: number, y: number): 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | null => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    
    if (x < CORNER_THRESHOLD && y < CORNER_THRESHOLD) return 'top-left';
    if (x > w - CORNER_THRESHOLD && y < CORNER_THRESHOLD) return 'top-right';
    if (x < CORNER_THRESHOLD && y > h - CORNER_THRESHOLD) return 'bottom-left';
    if (x > w - CORNER_THRESHOLD && y > h - CORNER_THRESHOLD) return 'bottom-right';
    
    return null;
  }, []);

  const getWalkingRotation = useCallback((direction: 'up' | 'down' | 'left' | 'right'): number => {
    switch (direction) {
      case 'up': return 0;
      case 'right': return 90;
      case 'down': return 180;
      case 'left': return -90;
      default: return 0;
    }
  }, []);

  const walkAlongEdge = useCallback(async (startEdge: 'top' | 'right' | 'bottom' | 'left') => {
    if (isWalkingEdge.current) return;
    isWalkingEdge.current = true;
    setMovementMode('walking');
    setEmotion('curious');

    const w = window.innerWidth;
    const h = window.innerHeight;
    const beeSize = 28;
    
    let currentPos = { ...positionRef.current };
    let walkDistance = 0;
    const maxWalkDistance = Math.random() * 300 + 100;
    
    const getEdgePosition = (edge: 'top' | 'right' | 'bottom' | 'left', progress: number) => {
      switch (edge) {
        case 'top': return { x: progress * w, y: beeSize };
        case 'right': return { x: w - beeSize, y: progress * h };
        case 'bottom': return { x: w - progress * w, y: h - beeSize };
        case 'left': return { x: beeSize, y: h - progress * h };
      }
    };

    const startProgress = (() => {
      switch (startEdge) {
        case 'top': return currentPos.x / w;
        case 'right': return currentPos.y / h;
        case 'bottom': return 1 - currentPos.x / w;
        case 'left': return 1 - currentPos.y / h;
      }
    })();

    const direction = Math.random() > 0.5 ? 1 : -1;
    const directionMap: Record<string, 'up' | 'down' | 'left' | 'right'> = {
      'top': direction > 0 ? 'right' : 'left',
      'right': direction > 0 ? 'down' : 'up',
      'bottom': direction > 0 ? 'left' : 'right',
      'left': direction > 0 ? 'up' : 'down',
    };
    
    setRotation(getWalkingRotation(directionMap[startEdge]));

    for (let i = 0; i < 40 && walkDistance < maxWalkDistance; i++) {
      const progress = startProgress + (direction * walkDistance) / (startEdge === 'top' || startEdge === 'bottom' ? w : h);
      const newPos = getEdgePosition(startEdge, Math.max(0, Math.min(1, progress)));
      
      targetRef.current = newPos;
      
      walkDistance += 8;
      
      await new Promise(resolve => setTimeout(resolve, 50));
      
      const corner = detectCorner(newPos.x, newPos.y);
      if (corner) {
        await handleCornerTurn(corner, startEdge);
        break;
      }
    }

    isWalkingEdge.current = false;
    setMovementMode('flying');
    setEmotion('flying');
    setRotation(0);
  }, [getViewportEdges, detectCorner, getWalkingRotation]);

  const handleCornerTurn = useCallback(async (
    corner: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',
    fromEdge: 'top' | 'right' | 'bottom' | 'left'
  ) => {
    setEmotion('curious');
    setHint('🔍 Corner!');
    
    const cornerPos = {
      'top-left': { x: 30, y: 30 },
      'top-right': { x: window.innerWidth - 30, y: 30 },
      'bottom-left': { x: 30, y: window.innerHeight - 30 },
      'bottom-right': { x: window.innerWidth - 30, y: window.innerHeight - 30 },
    }[corner];
    
    targetRef.current = cornerPos;
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const turnSequence: Record<string, { rotations: number[], delays: number[] }> = {
      'top-left-top': { rotations: [45, 90], delays: [200, 200] },
      'top-left-left': { rotations: [-45, -90], delays: [200, 200] },
      'top-right-top': { rotations: [-45, -90], delays: [200, 200] },
      'top-right-right': { rotations: [45, 90], delays: [200, 200] },
      'bottom-left-bottom': { rotations: [-45, -90], delays: [200, 200] },
      'bottom-left-left': { rotations: [45, 90], delays: [200, 200] },
      'bottom-right-bottom': { rotations: [45, 90], delays: [200, 200] },
      'bottom-right-right': { rotations: [-45, -90], delays: [200, 200] },
    };
    
    const sequence = turnSequence[`${corner}-${fromEdge}`];
    if (sequence) {
      for (let i = 0; i < sequence.rotations.length; i++) {
        setRotation(sequence.rotations[i]);
        await new Promise(resolve => setTimeout(resolve, sequence.delays[i]));
      }
    }
    
    setHint(null);
    
    const nextEdgeMap: Record<string, 'top' | 'right' | 'bottom' | 'left'> = {
      'top-left-top': 'left',
      'top-left-left': 'top',
      'top-right-top': 'right',
      'top-right-right': 'top',
      'bottom-left-bottom': 'left',
      'bottom-left-left': 'bottom',
      'bottom-right-bottom': 'right',
      'bottom-right-right': 'bottom',
    };
    const nextEdge = nextEdgeMap[`${corner}-${fromEdge}`] || fromEdge;
    
    return nextEdge;
  }, []);

  const investigateUIElement = useCallback(async (uiElement: UIElement) => {
    if (isInvestigatingUI.current) return;
    isInvestigatingUI.current = true;
    
    setEmotion('investigating');
    setMovementMode('hovering');
    setHint('🌸 Flower?');
    
    const { rect } = uiElement;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const orbitPoints = 5;
    const orbitRadius = Math.max(rect.width, rect.height) / 2 + 30;
    
    for (let i = 0; i < orbitPoints; i++) {
      const angle = (i / orbitPoints) * Math.PI * 2;
      targetRef.current = {
        x: centerX + Math.cos(angle) * orbitRadius,
        y: centerY + Math.sin(angle) * orbitRadius,
      };
      setRotation((angle * 180 / Math.PI) + 90);
      await new Promise(resolve => setTimeout(resolve, 300));
    }
    
    targetRef.current = { x: centerX, y: centerY };
    setMovementMode('walking');
    setHint('🍯 Yum!');
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setEmotion('happy');
    await new Promise(resolve => setTimeout(resolve, 300));
    
    targetRef.current = {
      x: centerX + (Math.random() - 0.5) * 100,
      y: centerY - 50,
    };
    
    setHint(null);
    setMovementMode('flying');
    setEmotion('flying');
    setRotation(0);
    
    isInvestigatingUI.current = false;
  }, []);

  const startResting = useCallback(async () => {
    if (isResting.current) return;
    isResting.current = true;
    hasLanded.current = true;
    
    const corners = [
      { x: 40, y: 40 },
      { x: window.innerWidth - 40, y: 40 },
      { x: 40, y: window.innerHeight - 40 },
      { x: window.innerWidth - 40, y: window.innerHeight - 40 },
    ];
    
    const corner = corners[Math.floor(Math.random() * corners.length)];
    targetRef.current = corner;
    
    setMovementMode('flying');
    setEmotion('flying');
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setMovementMode('resting');
    setEmotion('sleeping');
    setHint('💤 Zzz...');
    
    setTimeout(() => setHint(null), 2000);
  }, []);

  const wakeUp = useCallback(() => {
    if (!isResting.current) return;
    
    isResting.current = false;
    hasLanded.current = false;
    activityStartTime.current = Date.now();
    
    setEmotion('waking');
    setHint('☀️ Good morning!');
    
    setTimeout(() => {
      setMovementMode('flying');
      setEmotion('flying');
      setHint(null);
      
      targetRef.current = {
        x: window.innerWidth * 0.2 + (Math.random() - 0.5) * 100,
        y: window.innerHeight * 0.3 + (Math.random() - 0.5) * 100,
      };
    }, 500);
  }, []);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    const touchX = touch.clientX;
    const touchY = touch.clientY;
    
    touchTargetRef.current = { x: touchX, y: touchY, timestamp: Date.now() };
    
    const beeRect = beeRef.current?.getBoundingClientRect();
    if (beeRect) {
      const isTouchingBee = 
        touchX >= beeRect.left - 20 && 
        touchX <= beeRect.right + 20 &&
        touchY >= beeRect.top - 20 && 
        touchY <= beeRect.bottom + 20;
      
      if (isTouchingBee) {
        isLongPress.current = false;
        longPressTimerRef.current = setTimeout(() => {
          isLongPress.current = true;
          if (!isResting.current) {
            startResting();
          }
        }, 800);
      }
    }
  }, [startResting]);

  const handleTouchMove = useCallback(() => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  }, []);

  const handleTouchEnd = useCallback(async (e: TouchEvent) => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
    
    if (isLongPress.current) {
      isLongPress.current = false;
      return;
    }
    
    const touch = e.changedTouches[0];
    const touchX = touch.clientX;
    const touchY = touch.clientY;
    
    const beeRect = beeRef.current?.getBoundingClientRect();
    if (beeRect) {
      const isTouchingBee = 
        touchX >= beeRect.left - 30 && 
        touchX <= beeRect.right + 30 &&
        touchY >= beeRect.top - 30 && 
        touchY <= beeRect.bottom + 30;
      
      if (isTouchingBee) {
        if (isResting.current) {
          wakeUp();
        } else {
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
          
          await new Promise(resolve => setTimeout(resolve, 600));
          
          setTimeout(() => {
            targetRef.current = {
              x: window.innerWidth * 0.1 + (Math.random() - 0.5) * 100,
              y: window.innerHeight * 0.2 + (Math.random() - 0.5) * 100,
            };
            setEmotion('flying');
            setHint('👋 I\'m back!');
            setTimeout(() => setHint(null), 2000);
          }, 1200);
        }
        return;
      }
    }
    
    if (isResting.current) {
      wakeUp();
    } else if (!isInvestigatingUI.current) {
      setEmotion('curious');
      setHint('🤔 What\'s there?');
      
      targetRef.current = { x: touchX, y: touchY };
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      if (mobileDetected.current && Math.random() > 0.7) {
        const uiElements = getUIElements();
        const nearbyElement = uiElements.find(el => {
          const dx = (el.rect.left + el.rect.width / 2) - touchX;
          const dy = (el.rect.top + el.rect.height / 2) - touchY;
          return Math.sqrt(dx * dx + dy * dy) < 100;
        });
        
        if (nearbyElement) {
          setHint('🌸 Ooh, a flower!');
          await investigateUIElement(nearbyElement);
        }
      }
      
      setHint(null);
      setEmotion('flying');
    }
  }, [wakeUp, getUIElements, investigateUIElement, startResting]);

  const animateBee = useCallback(() => {
    if (!isBeeActive.current) return;

    const dx = targetRef.current.x - positionRef.current.x;
    const dy = targetRef.current.y - positionRef.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    const speed = movementMode === 'walking' ? 0.03 : movementMode === 'resting' ? 0.01 : 0.08;
    
    if (distance > 1) {
      positionRef.current.x += dx * speed;
      positionRef.current.y += dy * speed;
      
      if (movementMode === 'flying' && distance > 5) {
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;
        setRotation(angle);
      }
      
      if (beeRef.current) {
        beeRef.current.style.left = `${positionRef.current.x}px`;
        beeRef.current.style.top = `${positionRef.current.y}px`;
      }
    }

    if (movementMode === 'flying' && !hasLanded.current && !isWalkingEdge.current && !isInvestigatingUI.current && isBeeActive.current) {
      if (Math.random() > 0.96) {
        const buzzOffset = {
          x: (Math.random() - 0.5) * 8,
          y: (Math.random() - 0.5) * 8,
        };
        targetRef.current = {
          x: targetRef.current.x + buzzOffset.x,
          y: targetRef.current.y + buzzOffset.y,
        };
      }
    }

    if (Math.random() > 0.95 && !hasLanded.current && isBeeActive.current && movementMode === 'flying') {
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

    if (mobileDetected.current && !isResting.current && !isWalkingEdge.current) {
      const edge = detectCurrentEdge(positionRef.current.x, positionRef.current.y);
      if (edge && Math.random() > 0.98) {
        walkAlongEdge(edge);
      }
    }

    if (mobileDetected.current && !isResting.current) {
      const activeTime = Date.now() - activityStartTime.current;
      if (activeTime > ACTIVE_DURATION_BEFORE_REST && !isInvestigatingUI.current) {
        startResting();
      }
    }

    if (!mobileDetected.current) {
      const now = Date.now();
      const idleTime = now - lastMouseMoveTime.current;
      
      if (idleTime > 10000 && !hasLanded.current && isBeeActive.current && emotion !== 'sleeping') {
        handleIdle();
      }
    }

    animationFrameRef.current = requestAnimationFrame(animateBee);
  }, [movementMode, detectCurrentEdge, walkAlongEdge, startResting, emotion]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
    lastMouseMoveTime.current = Date.now();

    if (isIdle.current || isResting.current) {
      isIdle.current = false;
      if (emotion === 'sleeping') {
        wakeUp();
      }
    }

    if (!hasLanded.current && !isFollowingCursor.current && isBeeActive.current && !isInvestigatingUI.current) {
      targetRef.current = {
        x: mouseRef.current.x + (Math.random() - 0.5) * 60 - 28,
        y: mouseRef.current.y + (Math.random() - 0.5) * 60 - 28,
      };
      
      if (emotion !== 'flying' && emotion !== 'curious') {
        setEmotion('flying');
      }
    }
  }, [emotion, wakeUp]);

  const handleClick = useCallback(async () => {
    const now = Date.now();
    const isDoubleClick = now - lastClickTime.current < 300;
    lastClickTime.current = now;

    if (emotion === 'sleeping' || isResting.current) {
      wakeUp();
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
  }, [emotion, wakeUp]);

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
    if (isFlyingAcross.current || hasLanded.current || isIdle.current || isResting.current) return;
    
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
    if (emotion !== 'sleeping' && !isResting.current) {
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

    const determinedProbability = appearanceProbability ?? (mobileDetected.current ? 1.0 : 0.15 + Math.random() * 0.1);
    const shouldShow = Math.random() < determinedProbability;
    
    if (!shouldShow) return;

    const entranceDelay = setTimeout(() => {
      setIsVisible(true);
      isBeeActive.current = true;
      activityStartTime.current = Date.now();
      
      const startX = mobileDetected.current 
        ? window.innerWidth * (0.1 + Math.random() * 0.8)
        : window.innerWidth * 0.1;
      const startY = mobileDetected.current
        ? window.innerHeight * (0.1 + Math.random() * 0.3)
        : window.innerHeight * 0.3;
      
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
        setHint(mobileDetected.current ? '🐝 Tap me!' : '👋 Hi! I\'m Buzz!');
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
  }, [enabled, animateBee, appearanceProbability]);

  useEffect(() => {
    if (!isVisible || !enabled) return;

    if (mobileDetected.current) {
      window.addEventListener('touchstart', handleTouchStart, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleTouchEnd, { passive: true });
      
      return () => {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    } else {
      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [isVisible, enabled, handleMouseMove, handleTouchStart, handleTouchMove, handleTouchEnd]);

  useEffect(() => {
    if (!isVisible || !enabled) return;

    if (mobileDetected.current) {
      const mobileActivityInterval = setInterval(() => {
        if (!isResting.current && !isWalkingEdge.current && !isInvestigatingUI.current && Math.random() > 0.7) {
          const uiElements = getUIElements();
          if (uiElements.length > 0 && Math.random() > (1 - UI_INVESTIGATION_CHANCE)) {
            const randomElement = uiElements[Math.floor(Math.random() * uiElements.length)];
            investigateUIElement(randomElement);
          } else if (Math.random() > 0.5) {
            const edgeOptions: Array<'top' | 'right' | 'bottom' | 'left'> = ['top', 'right', 'bottom', 'left'];
            const randomEdge = edgeOptions[Math.floor(Math.random() * edgeOptions.length)];
            walkAlongEdge(randomEdge);
          }
        }
      }, 8000);

      return () => {
        clearInterval(mobileActivityInterval);
      };
    } else {
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
    }
  }, [isVisible, enabled, startFlyAcrossSequence, getUIElements, investigateUIElement, walkAlongEdge, getViewportEdges]);

  const beeScale = mobileDetected.current ? 1 : 1;

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
            <BumblebeeIcon emotion={emotion} scale={beeScale} movementMode={movementMode} rotation={rotation} />
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