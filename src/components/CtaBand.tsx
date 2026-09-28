import { Button } from './Button';
import { Container } from './Container';

export function CtaBand({
  title,
  text,
  action = 'Start a conversation',
  to = '/contact',
}: {
  title: string;
  text: string;
  action?: string;
  to?: string;
}) {
  return (
    <section className="bg-navy text-white" aria-label="Next step">
      <Container className="flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between md:py-20">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-white/80">{text}</p>
        </div>
        <Button to={to} variant="accent" className="shrink-0">
          {action}
        </Button>
      </Container>
    </section>
  );
}
