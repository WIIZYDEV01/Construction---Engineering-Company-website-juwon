import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '../lib/cn';

export function Reveal({
  children,
  className,
  variant = 'text',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  variant?: 'text' | 'media';
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const motion = document.documentElement.classList.contains('motion');
    if (!motion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(variant === 'media' ? 'media-reveal' : 'reveal', visible && 'is-visible', className)}
    >
      {children}
    </div>
  );
}
