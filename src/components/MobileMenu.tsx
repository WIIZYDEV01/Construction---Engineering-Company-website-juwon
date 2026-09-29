import { NavLink } from 'react-router-dom';
import { navLinks } from '../data/site';
import { cn } from '../lib/cn';
import { ArrowLink } from './ArrowLink';

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Primary"
      hidden={!open}
      className="tone-dark fixed inset-0 z-40 overflow-y-auto bg-ink px-5 pt-28 pb-12 text-white sm:px-8"
    >
      <nav aria-label="Mobile">
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={onClose}
                className={({ isActive }) =>
                  cn('display block py-1 text-[3.1rem] leading-none text-white', isActive && 'italic text-gold')
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ArrowLink to="/contact" surface="dark">
            Start a project
          </ArrowLink>
        </div>
      </nav>
    </div>
  );
}
