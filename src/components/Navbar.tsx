import { useEffect, useRef, type RefObject } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/site';
import { useScrolled } from '../hooks/useScrolled';
import { cn } from '../lib/cn';
import { ArrowLink } from './ArrowLink';
import { Container } from './Container';
import { Logo } from './Logo';

export function Navbar({
  open,
  onToggle,
  toggleRef,
}: {
  open: boolean;
  onToggle: () => void;
  toggleRef: RefObject<HTMLButtonElement | null>;
}) {
  const scrolled = useScrolled();
  const solid = scrolled || open;

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500',
        solid ? 'border-b border-white/10 bg-ink/95 backdrop-blur-md' : 'border-b border-transparent bg-transparent',
      )}
    >
      <Container className={cn('flex items-center justify-between gap-4 transition-[height] duration-500', solid ? 'h-16' : 'h-20')}>
        <Logo />
        <nav className="ml-auto hidden items-center gap-x-5 xl:gap-x-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'py-2 text-[13px] tracking-[0.08em] text-white/75 uppercase transition-colors hover:text-white',
                  isActive && 'text-gold',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="ml-8 hidden lg:block">
          <ArrowLink to="/contact" surface="dark">
            Start a project
          </ArrowLink>
        </div>
        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={onToggle}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true" className="relative block h-3 w-6">
            <span
              className={cn(
                'absolute left-0 h-px w-6 bg-white transition-transform duration-300',
                open ? 'top-1.5 rotate-45' : 'top-0',
              )}
            />
            <span
              className={cn(
                'absolute left-0 h-px w-6 bg-white transition-transform duration-300',
                open ? 'top-1.5 -rotate-45' : 'top-3',
              )}
            />
          </span>
        </button>
      </Container>
    </header>
  );
}

export function useMenuFocus(open: boolean, toggleRef: RefObject<HTMLButtonElement | null>) {
  const wasOpen = useRef(false);

  useEffect(() => {
    if (!open) {
      if (wasOpen.current) toggleRef.current?.focus();
      wasOpen.current = false;
      return;
    }

    wasOpen.current = true;
    const menu = document.getElementById('mobile-menu');
    const first = menu?.querySelector<HTMLElement>('a, button');
    first?.focus();
  }, [open, toggleRef]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;
      const menu = document.getElementById('mobile-menu');
      const header = document.querySelector('header');
      const nodes = [
        ...(header?.querySelectorAll<HTMLElement>('a, button') ?? []),
        ...(menu?.querySelectorAll<HTMLElement>('a, button') ?? []),
      ];
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
}
