import { useSearchParams } from 'react-router-dom';
import { Container } from '../components/Container';
import { PageHeader } from '../components/PageHeader';
import { ProjectGrid } from '../components/ProjectGrid';
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
      <PageHeader
        eyebrow="Selected work"
        title="Projects"
        intro="A selection of building, civil and industrial work for developers, occupiers and public clients. Open a project to see how it was delivered."
      />
      <section className="py-12 md:py-16" aria-labelledby="archive-heading">
        <Container>
          <div className="flex flex-col gap-6 border-b border-line pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="archive-heading" className="text-2xl font-semibold">
                Project archive
              </h2>
              <p className="mt-2 text-sm text-muted">
                Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
              </p>
            </div>
            <div role="group" aria-label="Filter projects by sector" className="flex flex-wrap gap-2">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={active === filter}
                  onClick={() => setFilter(filter)}
                  className={cn(
                    'min-h-11 px-4 text-sm font-semibold transition-colors',
                    active === filter ? 'bg-navy text-white' : 'text-navy hover:bg-light',
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <ProjectGrid projects={visible} />
          </div>
        </Container>
      </section>
    </>
  );
}
