import type { ReactNode } from 'react';
import { cn } from '../lib/cn';

export function SectionHeading({
  id,
  index,
  label,
  title,
  intro,
  action,
  tone = 'light',
  className,
}: {
  id?: string;
  index?: string;
  label: string;
  title: string;
  intro?: string;
  action?: ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
}) {
  const light = tone === 'light';

  return (
    <div className={cn('flex flex-col gap-8 md:flex-row md:items-end md:justify-between', className)}>
      <div className="max-w-4xl">
        <p className={cn('kicker', light ? 'text-ink' : 'text-gold')}>
          {index ? `${index} / ${label}` : label}
        </p>
        <h2
          id={id}
          className={cn('display mt-5 text-[clamp(2.5rem,5vw,4.6rem)]', light ? 'text-ink' : 'text-white')}
        >
          {title}
        </h2>
        {intro ? <p className={cn('mt-6 max-w-xl text-base leading-relaxed', light ? 'text-body' : 'text-mute')}>{intro}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
