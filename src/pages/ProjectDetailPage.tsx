import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { getProject } from '../data/projects';
import { usePageMeta } from '../hooks/usePageMeta';

const facts = [
  { key: 'location', label: 'Location' },
  { key: 'category', label: 'Category' },
  { key: 'year', label: 'Year' },
  { key: 'client', label: 'Client' },
  { key: 'value', label: 'Project value' },
  { key: 'duration', label: 'Project duration' },
] as const;

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProject(slug);

  usePageMeta(
    project ? `${project.title} · Vertex Construction & Engineering` : 'Project · Vertex Construction & Engineering',
    project
      ? `${project.title} in ${project.location}. ${project.category}, completed ${project.year} for ${project.client}.`
      : 'This project is not in the Vertex archive.',
  );

  if (!project) {
    return (
      <Container className="py-24">
        <p className="text-xs font-semibold tracking-[0.18em] text-accent-ink uppercase">Projects</p>
        <h1 className="mt-4 text-4xl font-semibold">That project is not in the archive.</h1>
        <p className="mt-4 max-w-xl text-muted">
          The address does not match a Vertex project. The archive is the reliable list.
        </p>
        <div className="mt-8">
          <Button to="/projects">Back to projects</Button>
        </div>
      </Container>
    );
  }

  return (
    <article>
      <Container className="pt-10 md:pt-14">
        <p className="text-sm text-muted">
          <Link to="/projects" className="font-semibold text-navy underline decoration-accent decoration-2 underline-offset-4">
            Projects
          </Link>
          <span aria-hidden="true"> / </span>
          <span>{project.title}</span>
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold md:text-5xl">{project.title}</h1>
        <dl className="mt-8 grid grid-cols-2 border-y border-line md:grid-cols-3 lg:grid-cols-6">
          {facts.map((fact) => (
            <div key={fact.key} className="border-b border-line px-1 py-5 sm:px-4 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <dt className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase sm:text-xs">{fact.label}</dt>
              <dd className="mt-2 font-display text-base font-semibold text-navy sm:text-lg">{project[fact.key]}</dd>
            </div>
          ))}
        </dl>
      </Container>

      <img
        src={project.hero.src}
        alt={project.hero.alt}
        className="mt-8 aspect-[4/3] w-full object-cover sm:aspect-[16/9] lg:aspect-[2/1] lg:max-h-[680px]"
        fetchPriority="high"
      />

      <Container className="py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold">Project overview</h2>
            <p className="mt-4 text-muted">{project.overview}</p>
            <h2 className="mt-10 text-2xl font-semibold">Challenge</h2>
            <p className="mt-4 text-muted">{project.challenge}</p>
            <h2 className="mt-10 text-2xl font-semibold">Solution</h2>
            <p className="mt-4 text-muted">{project.solution}</p>
          </div>
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold">Results</h2>
            <ul className="mt-4">
              {project.results.map((result) => (
                <li key={result} className="flex gap-4 border-t border-line py-4">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="mt-16 text-2xl font-semibold">Gallery</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.gallery.map((image) => (
            <li key={image.src + image.alt} className="overflow-hidden bg-light">
              <img src={image.src} alt={image.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
      </Container>

      <section className="bg-navy text-white">
        <Container className="flex flex-col gap-8 py-16 md:flex-row md:items-end md:justify-between md:py-20">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Have a project in mind?</h2>
          <Button to="/contact" variant="accent">
            Start a conversation →
          </Button>
        </Container>
      </section>
    </article>
  );
}
