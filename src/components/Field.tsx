import type { ReactNode } from 'react';
import { cn } from '../lib/cn';

export function Field({
  id,
  label,
  required = false,
  error,
  surface = 'light',
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  surface?: 'light' | 'dark';
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={cn('kicker', surface === 'dark' ? 'text-white/70' : 'text-ink/70')}>
        {label}
        {required ? (
          <>
            <span aria-hidden="true"> *</span>
            <span className="sr-only"> required</span>
          </>
        ) : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} className={cn('mt-2 text-sm', surface === 'dark' ? 'text-[#ffb4b4]' : 'text-[#7f1d1d]')}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function controlClass(invalid: boolean, surface: 'light' | 'dark' = 'light') {
  return cn(
    'w-full border-0 border-b bg-transparent px-0 py-3 text-base outline-none',
    surface === 'dark' ? 'dark-control text-white' : 'text-ink',
    invalid
      ? surface === 'dark'
        ? 'border-[#ffb4b4]'
        : 'border-[#7f1d1d]'
      : surface === 'dark'
        ? 'border-white/25 focus:border-gold'
        : 'border-ink/20 focus:border-ink',
  );
}
