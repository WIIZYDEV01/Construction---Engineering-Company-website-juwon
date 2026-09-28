import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/site';
import { cn } from '../lib/cn';
import { Button } from './Button';
import { Container } from './Container';
import { Logo } from './Logo';

export function Navbar({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <Container className="flex h-[4.5rem] items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-x-4 xl:gap-x-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'relative py-2 text-[14px] font-semibold whitespace-nowrap text-charcoal transition-colors hover:text-navy xl:text-[15px]',
                  'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-accent after:transition-transform after:duration-200',
                  isActive ? 'text-navy after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button to="/contact" variant="accent" className="px-4 whitespace-nowrap">
            Request a consultation
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-navy lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={onToggle}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </Container>
    </header>
  );
}
