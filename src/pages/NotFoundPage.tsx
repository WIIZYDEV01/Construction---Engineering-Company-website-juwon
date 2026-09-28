import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { usePageMeta } from '../hooks/usePageMeta';

export function NotFoundPage() {
  usePageMeta(
    'Page not found · Vertex Construction & Engineering',
    'The page you requested is not on the Vertex Construction & Engineering website.',
  );

  return (
    <Container className="py-24 md:py-32">
      <p className="text-xs font-semibold tracking-[0.18em] text-accent-ink uppercase">404</p>
      <h1 className="mt-4 max-w-xl text-4xl font-semibold md:text-5xl">We can’t find that page.</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        The address may have changed, or the page may never have existed. The project archive and the home page are the surest places to continue.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button to="/">Back to home</Button>
        <Button to="/projects" variant="outline">
          View projects
        </Button>
      </div>
    </Container>
  );
}
