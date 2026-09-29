import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/cn';

export function ArrowLink({
  to,
  children,
  surface = 'light',
  quiet = false,
  className,
}: {
  to: string;
  children: ReactNode;
  surface?: 'light' | 'dark';
  quiet?: boolean;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        'group inline-flex min-h-11 items-center gap-3 text-[12px] font-medium tracking-[0.18em] uppercase',
        surface === 'dark' ? 'text-white' : 'text-ink',
        quiet && 'text-white/80',
        className,
      )}
    >
      <span className={cn(!quiet && 'border-b border-current pb-1')}>{children}</span>
      <span aria-hidden="true" className="arrow">
        →
      </span>
    </Link>
  );
}
