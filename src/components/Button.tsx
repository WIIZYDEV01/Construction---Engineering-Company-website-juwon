import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/cn';

const variants = {
  primary: 'bg-navy text-white hover:bg-charcoal',
  accent: 'bg-accent text-navy hover:bg-[#d06820]',
  outline: 'border border-navy bg-transparent text-navy hover:bg-navy hover:text-white',
  outlineLight: 'border border-white/70 bg-transparent text-white hover:bg-white hover:text-navy',
} as const;

type Variant = keyof typeof variants;

type Props = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  to?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
};

const base =
  'inline-flex min-h-11 items-center justify-center px-5 text-center text-[15px] font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60';

export function Button({
  children,
  variant = 'primary',
  className,
  to,
  href,
  type = 'button',
  onClick,
  disabled,
}: Props) {
  const classes = cn(base, variants[variant], className);

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export function TextLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex min-h-11 items-center font-semibold text-navy underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-accent-ink"
    >
      {children}
    </Link>
  );
}
