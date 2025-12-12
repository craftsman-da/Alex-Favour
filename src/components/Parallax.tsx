import { useEffect, useRef, ReactNode } from 'react';

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function Parallax({ children, speed = -20, className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if element is in viewport (with some buffer)
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate relative position in viewport (0 to 1)
        // 0 = element top is at bottom of viewport
        // 1 = element bottom is at top of viewport
        const progress = 1 - (rect.top + rect.height) / (windowHeight + rect.height);
        
        // Calculate translation
        // We want the movement to be centered (0 translation when element is in center of viewport)
        const translation = (progress - 0.5) * speed * 2;
        
        ref.current.style.transform = `translateY(${translation}px)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll);
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
