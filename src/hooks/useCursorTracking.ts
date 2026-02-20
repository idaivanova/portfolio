import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

export interface CursorPosition {
  x: number;
  y: number;
}

export interface CursorVelocity {
  speed: number;
  directionX: number;
  directionY: number;
}

export interface CursorTrackingState {
  position: CursorPosition;
  velocity: CursorVelocity;
  isIdle: boolean;
  idleTime: number;
  isOverInteractive: boolean;
}

interface UseCursorTrackingOptions {
  idleThresholdMs?: number;
  velocityThreshold?: number;
  onIdle?: (idleTime: number) => void;
  onReturn?: () => void;
}

export function useCursorTracking(options: UseCursorTrackingOptions = {}): CursorTrackingState {
  const {
    idleThresholdMs = 10000,
    onIdle,
    onReturn,
  } = options;

  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState<CursorVelocity>({ speed: 0, directionX: 0, directionY: 0 });
  const [isIdle, setIsIdle] = useState(false);
  const [idleTime, setIdleTime] = useState(0);
  const [isOverInteractive, setIsOverInteractive] = useState(false);

  const lastPosition = useRef<CursorPosition>({ x: 0, y: 0 });
  const lastUpdateTime = useRef(Date.now());
  const idleTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const idleStartTime = useRef<number | null>(null);
  const wasIdle = useRef(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = Date.now();
    const timeDelta = now - lastUpdateTime.current;
    
    const newPosition = { x: e.clientX, y: e.clientY };
    
    let newSpeed = 0;
    let directionX = 0;
    let directionY = 0;
    
    if (timeDelta > 0 && (lastPosition.current.x !== 0 || lastPosition.current.y !== 0)) {
      const dx = newPosition.x - lastPosition.current.x;
      const dy = newPosition.y - lastPosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      newSpeed = distance / timeDelta * 16;
      directionX = dx !== 0 ? dx / Math.abs(dx) : 0;
      directionY = dy !== 0 ? dy / Math.abs(dy) : 0;
    }

    setPosition(newPosition);
    setVelocity({ speed: newSpeed, directionX, directionY });
    
    lastPosition.current = newPosition;
    lastUpdateTime.current = now;

    if (isIdle) {
      setIsIdle(false);
      setIdleTime(0);
      idleStartTime.current = null;
      
      if (wasIdle.current && onReturn) {
        onReturn();
      }
      wasIdle.current = false;
    }
  }, [isIdle, onReturn]);

  const handleMouseLeave = useCallback(() => {
    if (!isIdle) {
      setIsIdle(true);
      idleStartTime.current = Date.now();
      wasIdle.current = true;
    }
  }, [isIdle]);

  useEffect(() => {
    const handleMouseEnter = () => {
      if (isIdle) {
        setIsIdle(false);
        setIdleTime(0);
        idleStartTime.current = null;
      }
    };

    window.addEventListener('mouseenter', handleMouseEnter);
    return () => window.removeEventListener('mouseenter', handleMouseEnter);
  }, [isIdle]);

  useEffect(() => {
    idleTimerRef.current = setInterval(() => {
      const now = Date.now();
      const timeSinceLastMove = now - lastUpdateTime.current;
      
      if (timeSinceLastMove >= idleThresholdMs && !isIdle) {
        setIsIdle(true);
        idleStartTime.current = now - idleThresholdMs;
        if (onIdle) {
          onIdle(idleThresholdMs);
        }
      }
      
      if (isIdle && idleStartTime.current !== null) {
        setIdleTime(now - idleStartTime.current);
      }
    }, 100);

    return () => {
      if (idleTimerRef.current) {
        clearInterval(idleTimerRef.current);
      }
    };
  }, [idleThresholdMs, isIdle, onIdle]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    lastPosition.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  useEffect(() => {
    const interactiveSelectors = [
      'a',
      'button',
      '[role="button"]',
      'input',
      'select',
      'textarea',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(interactiveSelectors);
      setIsOverInteractive(!!isInteractive);
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  const state: CursorTrackingState = useMemo(() => ({
    position,
    velocity,
    isIdle,
    idleTime,
    isOverInteractive,
  }), [position, velocity, isIdle, idleTime, isOverInteractive]);

  return state;
}

export function useCursorVelocity(_threshold = 2): number {
  const { velocity } = useCursorTracking();
  return velocity.speed;
}

export function useIsCursorIdle(thresholdMs = 10000): boolean {
  const { isIdle, idleTime } = useCursorTracking({ idleThresholdMs: thresholdMs });
  return isIdle || idleTime >= thresholdMs;
}

export function useCursorNearElement(ref: React.RefObject<HTMLElement>, threshold = 100): boolean {
  const { position } = useCursorTracking();
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const rect = element.getBoundingClientRect();

    const expandedRect = {
      left: rect.left - threshold,
      right: rect.right + threshold,
      top: rect.top - threshold,
      bottom: rect.bottom + threshold,
    };

    const isPositionNear = 
      position.x >= expandedRect.left &&
      position.x <= expandedRect.right &&
      position.y >= expandedRect.top &&
      position.y <= expandedRect.bottom;

    setIsNear(isPositionNear);
  }, [position, ref, threshold]);

  return isNear;
}
