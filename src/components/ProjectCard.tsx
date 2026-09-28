import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="h-full">
      <Link
        to={`/projects/${project.slug}`}
        className="media-zoom group block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
      >
        <div className="overflow-hidden bg-light">
          <img
            src={project.hero.src}
            alt={project.hero.alt}
            className="aspect-[3/2] w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mt-4 text-xs font-semibold tracking-[0.16em] text-muted uppercase">
          {project.category}
          <span aria-hidden="true"> · </span>
          {project.year}
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-navy transition-colors group-hover:text-accent-ink">
          {project.title}
        </h3>
        <p className="mt-1 text-muted">{project.location}</p>
      </Link>
    </article>
  );
}
