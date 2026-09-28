import type { Project } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return <p className="text-muted">No projects match this sector.</p>;
  }

  return (
    <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2">
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
