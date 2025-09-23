import { useEffect, useRef, useState } from 'react';

// Hook para detectar quando um elemento entra no viewport
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasIntersected, options]);

  return { ref, isIntersecting, hasIntersected };
};

// Hook para animações de scroll com stagger (sequencial)
export const useScrollAnimation = (delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '20px',
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay]);

  return { ref, isVisible };
};

// Hook para progress de scroll
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScroll / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return scrollProgress;
};

// Hook para parallax sutil
export const useParallax = (speed = 0.5) => {
  const [transform, setTransform] = useState('translateY(0px)');
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const scrolled = window.scrollY;
      const rate = scrolled * -speed;
      
      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        setTransform(`translateY(${rate}px)`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, transform };
};

// Componente wrapper para animações
export const AnimateOnScroll = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  duration = 0.8,
  className = '' 
}) => {
  const { ref, isVisible } = useScrollAnimation(delay);

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'translateY(0px) scale(1)' 
          : animation.includes('up') 
            ? 'translateY(30px) scale(0.95)'
            : animation.includes('left')
            ? 'translateX(-30px) scale(0.95)'
            : animation.includes('right')
            ? 'translateX(30px) scale(0.95)'
            : 'scale(0.9)',
        transition: `all ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Componente de indicador de progresso de scroll
export const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
    />
  );
};