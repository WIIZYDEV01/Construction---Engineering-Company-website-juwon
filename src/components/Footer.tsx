import { Link } from 'react-router-dom';
import { company, footerNav, socialLinks } from '../data/site';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="tone-dark bg-ink text-white">
      <Container className="pt-16 pb-8 md:pt-24">
        <Link to="/" className="display block max-w-full text-[clamp(4.4rem,16vw,12rem)] leading-[0.8] tracking-[-0.045em] text-white">
          VERTEX
        </Link>
        <p className="mt-6 max-w-md text-base text-mute">{company.tagline}</p>

        <div className="mt-14 grid gap-12 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          <nav aria-label="Footer">
            <p className="kicker text-mute">Index</p>
            <ul className="mt-5 space-y-2">
              {footerNav.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/85 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="kicker text-mute">Contact</p>
            <ul className="mt-5 space-y-2 text-white/85">
              <li>{company.locationShort}</li>
              <li>
                <a className="underline decoration-white/25 underline-offset-4 hover:decoration-white" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="kicker text-mute">Social</p>
            <ul className="mt-5 space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noreferrer" className="text-white/85 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
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
        </div>
      </Container>
    </footer>
  );
}
