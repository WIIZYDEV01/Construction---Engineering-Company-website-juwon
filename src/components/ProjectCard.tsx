import { Link } from 'react-router-dom';
import { formatPlace, projectIndex, type Project } from '../data/projects';
import { cn } from '../lib/cn';

const frames = {
  feature: 'aspect-[4/3] md:aspect-[16/11] md:min-h-[420px]',
  portrait: 'aspect-[4/3] md:aspect-[3/4]',
  wide: 'aspect-[16/10] md:aspect-[2.4/1]',
} as const;

export const placements = [
  { kind: 'image', span: 'md:col-span-8', frame: 'feature' },
  { kind: 'image', span: 'md:col-span-4', frame: 'portrait' },
  { kind: 'image', span: 'md:col-span-12', frame: 'wide' },
  { kind: 'text', span: 'md:col-span-5', frame: 'feature' },
  { kind: 'image', span: 'md:col-span-7', frame: 'feature' },
  { kind: 'image', span: 'md:col-span-7', frame: 'feature' },
  { kind: 'text', span: 'md:col-span-5', frame: 'feature' },
  { kind: 'image', span: 'md:col-span-4', frame: 'portrait' },
  { kind: 'image', span: 'md:col-span-8', frame: 'feature' },
  { kind: 'image', span: 'md:col-span-12', frame: 'wide' },
] as const;

export function projectPlacement(index: number) {
  return placements[index % placements.length];
}

export function ProjectCard({
  project,
  placement,
}: {
  project: Project;
  placement: (typeof placements)[number];
}) {
  const number = projectIndex(project.slug);

  if (placement.kind === 'text') {
    return (
      <article className="h-full">
        <Link
          to={`/projects/${project.slug}`}
          className="group flex h-full min-h-[320px] flex-col justify-between bg-ink p-7 text-white md:min-h-full md:p-10"
        >
          <p className="kicker text-gold">{number}</p>
          <div>
            <h3 className="display text-[clamp(2rem,3vw,3.2rem)] text-white">{project.title}</h3>
            <p className="mt-4 text-sm text-mute">
              {formatPlace(project.location)}
              <span aria-hidden="true"> · </span>
              {project.year}
            </p>
            <p className="mt-4 line-clamp-4 max-w-md text-sm leading-relaxed text-white/75">{project.overview}</p>
            <span className="mt-8 inline-flex items-center gap-3 text-[12px] font-medium tracking-[0.18em] uppercase">
              <span className="border-b border-current pb-1">View project</span>
              <span aria-hidden="true" className="arrow">
                →
              </span>
            </span>
          </div>
        </Link>
      </article>
    );
  }

  const frame = frames[placement.frame];

  return (
    <article className="h-full">
      <Link to={`/projects/${project.slug}`} className="media-frame group relative block h-full overflow-hidden bg-ink-2">
        <img
          src={project.hero.src}
          alt={project.hero.alt}
          className={cn('h-full w-full object-cover', frame)}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <p className="kicker text-gold">{number}</p>
          <h3 className="display mt-3 max-w-[12em] text-[clamp(1.8rem,3vw,3rem)] text-white">{project.title}</h3>
          <p className="mt-3 text-sm text-white/75">
            {formatPlace(project.location)}
            <span aria-hidden="true"> · </span>
            {project.category}
          </p>
        </div>
      </Link>
    </article>
  );
}
