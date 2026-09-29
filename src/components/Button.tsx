import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/cn';

type Props = {
  children: ReactNode;
  surface?: 'light' | 'dark';
  className?: string;
  to?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
};

const base =
  'group inline-flex min-h-11 items-center gap-3 text-[12px] font-medium tracking-[0.18em] uppercase disabled:cursor-not-allowed disabled:opacity-50';

export function Button({ children, surface = 'light', className, to, type = 'button', onClick, disabled }: Props) {
  const classes = cn(base, surface === 'dark' ? 'text-white' : 'text-ink', className);
  const content = (
    <>
      <span className="border-b border-current pb-1">{children}</span>
      <span aria-hidden="true" className="arrow">
        →
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
