import { Link } from 'react-router-dom';
import { ArrowLink } from '../components/ArrowLink';
import { Container } from '../components/Container';
import { Hero } from '../components/Hero';
import { Reveal } from '../components/Reveal';
import { getProject } from '../data/projects';
import { services } from '../data/services';
import { cn } from '../lib/cn';
import { usePageMeta } from '../hooks/usePageMeta';

export function ServicesPage() {
  usePageMeta(
    'Services · Vertex Construction & Engineering',
    'Commercial construction, civil engineering, infrastructure, industrial construction, project management, and renovation from Vertex.',
  );

  return (
    <>
      <Hero
        kicker="Services"
        title="Six disciplines. One accountable team."
        lede="Vertex is appointed for the whole of a project or for the part that carries the risk. These are the services clients ask us to lead."
        image={{
          src: '/images/concrete.jpg',
          alt: 'Crew tying reinforcement cages on a structure under construction',
        }}
      />

      <nav aria-label="Services on this page" className="border-b border-ink/10 bg-paper">
        <Container className="py-5">
          <div className="flex gap-x-6 gap-y-3 overflow-x-auto">
            {services.map((service) => (
              <a key={service.id} href={`#${service.id}`} className="kicker shrink-0 py-2 text-ink/70 hover:text-ink">
                {service.number} {service.title}
              </a>
            ))}
          </div>
        </Container>
      </nav>

      {services.map((service, index) => {
        const related = getProject(service.relatedSlug);
        const flipped = index % 2 === 1;
        return (
          <article key={service.id} id={service.id} className={cn('scroll-mt-24', index % 2 === 0 ? 'bg-paper' : 'bg-sand')}>
            <div className="grid lg:grid-cols-2">
              <Reveal variant="media" className={cn(flipped && 'lg:order-2')}>
                {related ? (
                  <img
                    src={related.hero.src}
                    alt={related.hero.alt}
                    className="h-[70vw] max-h-[520px] min-h-[280px] w-full object-cover lg:h-full lg:max-h-none lg:min-h-[640px]"
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
              </Reveal>
              <div className={cn('flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-14 lg:py-24', flipped && 'lg:order-1')}>
                <Reveal>
                  <p className="display text-7xl text-ink/20 md:text-8xl">{service.number}</p>
                  <h2 className="display mt-4 text-[clamp(2.4rem,4vw,4rem)] text-ink">{service.title}</h2>
                  <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-body">
                    {service.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <h3 className="kicker mt-10 text-ink/60">Capabilities</h3>
                  <ul className="mt-4 max-w-xl">
                    {service.capabilities.map((capability) => (
                      <li key={capability} className="border-t border-ink/15 py-3 text-sm text-ink">
                        {capability}
                      </li>
                    ))}
                  </ul>
                  {related ? (
                    <p className="mt-8 text-sm text-body">
                      <span className="kicker text-ink/70">Related project</span>
                      <Link to={`/projects/${related.slug}`} className="group mt-3 flex items-center gap-3 text-ink">
                        <span className="display text-3xl">{related.title}</span>
                        <span aria-hidden="true" className="arrow">
                          →
                        </span>
                      </Link>
                    </p>
                  ) : null}
                  <ArrowLink
                    to={`/contact?type=${encodeURIComponent(service.title)}`}
                    surface="light"
                    className="mt-8"
                  >
                    Discuss this service
                  </ArrowLink>
                </Reveal>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
}
