import { useEffect, useState, type ReactNode } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { cn } from '../lib/cn';
import { ArrowLink } from './ArrowLink';
import { Container } from './Container';

export function Hero({
  kicker,
  title,
  lede,
  image,
  primary,
  secondary,
  scrollCue = false,
  size = 'page',
  titleClassName,
}: {
  kicker: string;
  title: ReactNode;
  lede?: string;
  image?: { src: string; alt: string };
  primary?: { to: string; label: string };
  secondary?: { to: string; label: string };
  scrollCue?: boolean;
  size?: 'home' | 'page' | 'compact';
  titleClassName?: string;
}) {
  const reduced = useReducedMotion();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (reduced || !image) return;
    const onScroll = () => setOffset(Math.min(window.scrollY, 480) * 0.14);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [reduced, image]);

  return (
    <section
      className={cn(
        'tone-dark relative flex items-end overflow-hidden bg-ink text-white',
        size === 'home' ? 'min-h-[100svh]' : size === 'compact' ? '' : 'min-h-[78svh]',
      )}
    >
      {image ? (
        <img
          src={image.src}
          alt={image.alt}
          fetchPriority="high"
          style={reduced ? undefined : { transform: `translate3d(0, ${offset}px, 0) scale(1.08)` }}
          className="absolute top-[-8%] left-0 h-[120%] w-full object-cover"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/35" aria-hidden="true" />
      <Container className={cn('relative z-10 pt-32 md:pt-40', scrollCue ? 'pb-28' : 'pb-16 md:pb-20')}>
        <p className="kicker text-gold">{kicker}</p>
        <h1 className={cn('display mt-6 max-w-full text-[clamp(3rem,7.2vw,6.8rem)] md:max-w-[9.2em]', titleClassName)}>
          {title}
        </h1>
        {lede ? <p className="mt-8 max-w-xl text-base leading-relaxed text-white/78 sm:text-lg">{lede}</p> : null}
        {primary || secondary ? (
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
            {primary ? (
              <ArrowLink to={primary.to} surface="dark">
                {primary.label}
              </ArrowLink>
            ) : null}
            {secondary ? (
              <ArrowLink to={secondary.to} surface="dark" quiet>
                {secondary.label}
              </ArrowLink>
            ) : null}
          </div>
        ) : null}
      </Container>
      {scrollCue ? (
        <div className="absolute bottom-7 left-5 z-10 flex items-center gap-3 sm:left-8 lg:left-12">
          <span className="scroll-line block h-12 w-px bg-white/70" aria-hidden="true" />
          <span className="kicker text-white/70">Scroll</span>
        </div>
      ) : null}
    </section>
  );
}
