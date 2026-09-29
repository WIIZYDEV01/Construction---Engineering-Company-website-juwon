import { ArrowLink } from '../components/ArrowLink';
import { Container } from '../components/Container';
import { usePageMeta } from '../hooks/usePageMeta';

export function NotFoundPage() {
  usePageMeta(
    'Page not found · Vertex Construction & Engineering',
    'The page you requested is not on the Vertex Construction & Engineering website.',
  );

  return (
    <Container className="tone-dark flex flex-1 flex-col bg-ink py-40 text-white">
      <p className="kicker text-gold">404</p>
      <h1 className="display mt-5 max-w-xl text-5xl md:text-6xl">We can&apos;t find that page.</h1>
      <p className="mt-6 max-w-xl text-lg text-white/75">
        The address may have changed, or the page may never have existed. The project archive and the home page are the surest places to continue.
      </p>
      <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:gap-8">
        <ArrowLink to="/" surface="dark">
          Back to home
        </ArrowLink>
        <ArrowLink to="/projects" surface="dark" quiet>
          View projects
        </ArrowLink>
      </div>
    </Container>
  );
}
