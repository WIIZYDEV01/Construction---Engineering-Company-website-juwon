import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { PageHeader } from '../components/PageHeader';
import { getProject } from '../data/projects';
import { services } from '../data/services';
import { usePageMeta } from '../hooks/usePageMeta';

export function ServicesPage() {
  usePageMeta(
    'Services · Vertex Construction & Engineering',
    'Commercial construction, civil engineering, infrastructure, industrial construction, project management, and renovation from Vertex.',
  );

  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Services led by the people who will deliver them."
        intro="Vertex is appointed for the whole of a project or for the part that carries the risk. These are the services clients ask us to lead."
      />

      <Container>
        <nav aria-label="Services on this page" className="border-b border-line py-6">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {services.map((service) => (
              <li key={service.id}>
                <a
                  href={`#${service.id}`}
                  className="text-sm font-semibold text-navy underline decoration-transparent underline-offset-4 hover:decoration-accent"
                >
                  {service.number} {service.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {services.map((service) => {
          const related = getProject(service.relatedSlug);
          return (
            <article key={service.id} id={service.id} className="scroll-mt-28 border-b border-line py-14 md:py-20">
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                  <p className="font-display text-sm font-semibold tracking-[0.16em] text-accent-ink">{service.number}</p>
                  <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{service.title}</h2>
                </div>
                <div className="lg:col-span-8">
                  <div className="space-y-4 text-muted">
                    {service.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <h3 className="mt-8 text-lg font-semibold">Key capabilities</h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {service.capabilities.map((capability) => (
                      <li key={capability} className="flex gap-3 border-t border-line pt-3 text-charcoal">
                        <span className="mt-2 h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                  {related ? (
                    <Link
                      to={`/projects/${related.slug}`}
                      className="media-zoom group mt-8 grid grid-cols-1 border border-line bg-white sm:grid-cols-[180px_minmax(0,1fr)]"
                    >
                      <img
                        src={related.hero.src}
                        alt={related.hero.alt}
                        className="aspect-[16/10] h-full w-full object-cover sm:aspect-auto sm:min-h-full"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="flex flex-col justify-center px-5 py-5">
                        <span className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">Related project</span>
                        <span className="mt-2 font-display text-xl font-semibold text-navy transition-colors group-hover:text-accent-ink">
                          {related.title}
                        </span>
                        <span className="mt-1 text-sm text-muted">
                          {related.location}
                          <span aria-hidden="true"> · </span>
                          {related.year}
                        </span>
                      </span>
                    </Link>
                  ) : null}
                  <div className="mt-8">
                    <Button to={`/contact?type=${encodeURIComponent(service.title)}`} variant="outline">
                      Discuss this service
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </Container>
    </>
  );
}
