import { Link } from 'react-router-dom';
import { company, footerNav, socialLinks } from '../data/site';
import { Container } from './Container';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-white/75">{company.tagline}</p>
        </div>
        <div>
          <h2 className="text-xs font-semibold tracking-[0.16em] text-white/50">NAVIGATION</h2>
          <ul className="mt-4 space-y-2">
            {footerNav.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-white/85 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold tracking-[0.16em] text-white/50">CONTACT</h2>
          <ul className="mt-4 space-y-2 text-white/85">
            <li>{company.locationShort}</li>
            <li>
              <a className="underline decoration-white/30 underline-offset-4 hover:decoration-white" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold tracking-[0.16em] text-white/50">SOCIAL</h2>
          <ul className="mt-4 space-y-2">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/85 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/15">
        <Container className="flex flex-col gap-3 py-5 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Vertex Construction & Engineering</p>
          <ul className="flex gap-5">
            <li>
              <Link to="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white">
                Terms
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
