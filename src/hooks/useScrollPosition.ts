import { useState, useEffect, useCallback, useRef } from 'react';

interface ScrollPosition {
  scrollX: number;
  scrollY: number;
  scrollVelocity: number;
  direction: 'up' | 'down' | 'none';
  progress: number;
  isAtTop: boolean;
  isAtBottom: boolean;
}

interface UseScrollPositionOptions {
  throttleMs?: number;
  velocityThreshold?: number;
}

export function useScrollPosition(options: UseScrollPositionOptions = {}): ScrollPosition {
  const { throttleMs = 16 } = options;
  
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollX: 0,
    scrollY: 0,
    scrollVelocity: 0,
    direction: 'none',
    progress: 0,
    isAtTop: true,
    isAtBottom: false,
  });

  const lastScrollY = useRef(0);
  const lastUpdateTime = useRef(Date.now());
  const documentHeight = useRef(0);

  const calculatePosition = useCallback(() => {
    const currentScrollY = window.scrollY;
    const now = Date.now();
    const timeDelta = now - lastUpdateTime.current;
    
    const velocity = timeDelta > 0 
      ? Math.abs(currentScrollY - lastScrollY.current) / timeDelta * 16
      : 0;
    
    const direction: 'up' | 'down' | 'none' = 
      currentScrollY > lastScrollY.current ? 'down' :
      currentScrollY < lastScrollY.current ? 'up' : 'none';

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? currentScrollY / docHeight : 0;

    documentHeight.current = docHeight;

    lastScrollY.current = currentScrollY;
    lastUpdateTime.current = now;

    return {
      scrollX: window.scrollX,
      scrollY: currentScrollY,
      scrollVelocity: velocity,
      direction,
      progress,
      isAtTop: currentScrollY < 50,
      isAtBottom: currentScrollY >= docHeight - 50,
    };
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollPosition(calculatePosition());
          ticking = false;
        });
        ticking = true;
      }
    };

    const throttledScroll = throttleMs === 16 
      ? handleScroll 
      : (() => {
          let lastCall = 0;
          return () => {
            const now = Date.now();
            if (now - lastCall >= throttleMs) {
              lastCall = now;
              handleScroll();
            }
          };
        })();

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    setScrollPosition(calculatePosition());

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [calculatePosition, throttleMs]);

  return scrollPosition;
}

export function useScrollVelocity(_threshold = 5): number {
  const { scrollVelocity } = useScrollPosition();
  return scrollVelocity;
}

export function useScrollDirection(): 'up' | 'down' | 'none' {
  const { direction } = useScrollPosition();
  return direction;
}

export function usePageProgress(): number {
  const { progress } = useScrollPosition();
  return progress;
}
