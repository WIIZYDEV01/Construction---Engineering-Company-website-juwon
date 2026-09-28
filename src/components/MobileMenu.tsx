import { useEffect, useId } from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/site';
import { Button } from './Button';

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKey);
    const first = document.querySelector<HTMLElement>('#mobile-menu a, #mobile-menu button');
    first?.focus();

    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal={open}
      aria-labelledby={titleId}
      aria-hidden={!open}
      className={`fixed inset-x-0 top-[4.5rem] bottom-0 z-40 bg-white transition duration-200 lg:hidden ${
        open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
      }`}
    >
      <nav className="flex h-full flex-col px-5 py-8 sm:px-8" aria-label="Mobile">
        <p id={titleId} className="sr-only">
          Menu
        </p>
        <ul className="space-y-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={onClose}
                className={({ isActive }) =>
                  `block border-b border-line py-3 font-display text-3xl font-semibold ${
                    isActive ? 'text-accent-ink' : 'text-navy'
                  }`
                }
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button to="/contact" variant="accent" onClick={onClose} className="w-full">
            Request a consultation
          </Button>
        </div>
      </nav>
    </div>
  );
}
