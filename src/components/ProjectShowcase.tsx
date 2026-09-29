import { Link } from 'react-router-dom';
import { formatPlace, projectIndex, type Project } from '../data/projects';
import { cn } from '../lib/cn';
import { ArrowLink } from './ArrowLink';
import { Reveal } from './Reveal';

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  return (
    <div>
      {projects.map((project, index) => {
        const flipped = index % 2 === 1;
        return (
          <article key={project.slug} className="border-t border-ink/10">
            <div className="grid lg:grid-cols-12">
              <div
                className={cn(
                  'flex flex-col justify-between px-5 py-12 sm:px-8 lg:col-span-4 lg:px-12 lg:py-16',
                  flipped && 'lg:order-2',
                )}
              >
                <Reveal>
                  <p className="display text-6xl text-ink/25 md:text-7xl">{projectIndex(project.slug)}</p>
                </Reveal>
                <Reveal delay={80}>
                  <h3 className="display mt-10 text-[clamp(2.2rem,3.2vw,3.5rem)] text-ink lg:mt-16">{project.title}</h3>
                  <p className="kicker mt-6 text-ink">{formatPlace(project.location)}</p>
                  <p className="mt-3 text-sm text-body">{project.category}</p>
                  <p className="mt-1 text-sm text-body/70">{project.year}</p>
                  <ArrowLink to={`/projects/${project.slug}`} surface="light" className="mt-8">
                    View project
                  </ArrowLink>
                </Reveal>
              </div>
              <Reveal variant="media" className={cn('lg:col-span-8', flipped && 'lg:order-1')}>
                <Link to={`/projects/${project.slug}`} className="media-frame block overflow-hidden bg-ink-2">
                  <img
                    src={project.hero.src}
                    alt={project.hero.alt}
                    className="h-[68vw] max-h-[460px] min-h-[260px] w-full object-cover lg:h-[78vh] lg:max-h-[820px] lg:min-h-[560px]"
                    loading="lazy"
                    decoding="async"
                  />
                </Link>
              </Reveal>
            </div>
          </article>
        );
      })}
    </div>
  );
}
