import { useSearchParams } from 'react-router-dom';
import { Container } from '../components/Container';
import { Hero } from '../components/Hero';
import { ProjectCard, projectPlacement } from '../components/ProjectCard';
import { filterProjects, projectFilters, type ProjectFilter } from '../data/projects';
import { cn } from '../lib/cn';
import { usePageMeta } from '../hooks/usePageMeta';

function isFilter(value: string | null): value is ProjectFilter {
  return projectFilters.some((filter) => filter === value);
}

export function ProjectsPage() {
  usePageMeta(
    'Projects · Vertex Construction & Engineering',
    'A selection of commercial, infrastructure, industrial and residential projects delivered by Vertex Construction & Engineering.',
  );

  const [params, setParams] = useSearchParams();
  const requested = params.get('sector');
  const active: ProjectFilter = isFilter(requested) ? requested : 'All';
  const visible = filterProjects(active);

  function setFilter(next: ProjectFilter) {
    if (next === 'All') {
      setParams({}, { preventScrollReset: true });
      return;
    }
    setParams({ sector: next }, { preventScrollReset: true });
  }

  return (
    <>
      <Hero
        kicker="Archive"
        title="Selected work."
        lede="A selection of building, civil and industrial work for developers, occupiers and public clients. Open a project to see how it was delivered."
        image={{
          src: '/images/hero.jpg',
          alt: 'Project team reviewing a reinforced concrete deck on a large construction site',
        }}
      />

      <section className="bg-paper py-12 md:py-16" aria-labelledby="archive-heading">
        <Container>
          <div className="flex flex-col gap-6 border-b border-ink/15 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 id="archive-heading" className="display text-4xl text-ink md:text-5xl">
                The archive
              </h2>
              <p className="mt-3 text-sm text-body/70">
                Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
              </p>
            </div>
            <div role="group" aria-label="Filter projects by sector" className="flex flex-wrap gap-x-5 gap-y-2">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={active === filter}
                  onClick={() => setFilter(filter)}
                  className={cn(
                    'kicker min-h-11 border-b pb-1',
                    active === filter ? 'border-ink text-ink' : 'border-transparent text-ink/70 hover:text-ink',
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {visible.length === 0 ? (
            <p className="py-16 text-body">No projects in this sector yet.</p>
          ) : (
            <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
              {visible.map((project, index) => {
                const placement = projectPlacement(index);
                return (
                  <li key={project.slug} className={placement.span}>
                    <ProjectCard project={project} placement={placement} />
                  </li>
                );
              })}
            </ul>
          )}
        </Container>
      </section>
    </>
  );
}
