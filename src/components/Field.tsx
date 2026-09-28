import type { ReactNode } from 'react';
import { cn } from '../lib/cn';

export function Field({
  id,
  label,
  required = false,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-navy">
        {label}
        {required ? (
          <>
            <span className="text-accent-ink" aria-hidden="true">
              {' '}
              *
            </span>
            <span className="sr-only"> required</span>
          </>
        ) : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-800">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function controlClass(invalid: boolean) {
  return cn(
    'w-full border bg-white px-3 py-3 text-base text-charcoal',
    invalid ? 'border-red-800' : 'border-line focus:border-navy',
  );
}
