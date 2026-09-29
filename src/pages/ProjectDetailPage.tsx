import { Link, useParams } from 'react-router-dom';
import { ArrowLink } from '../components/ArrowLink';
import { Container } from '../components/Container';
import { formatPlace, getNextProject, getProject, projectIndex } from '../data/projects';
import { usePageMeta } from '../hooks/usePageMeta';

const facts = [
  { key: 'location', label: 'Location' },
  { key: 'category', label: 'Category' },
  { key: 'year', label: 'Year' },
  { key: 'client', label: 'Client' },
  { key: 'value', label: 'Project value' },
  { key: 'duration', label: 'Duration' },
] as const;

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProject(slug);
  const next = project ? getNextProject(project.slug) : undefined;

  usePageMeta(
    project ? `${project.title} · Vertex Construction & Engineering` : 'Project · Vertex Construction & Engineering',
    project
      ? `${project.title} in ${project.location}. ${project.category}, completed ${project.year} for ${project.client}.`
      : 'This project is not in the Vertex archive.',
  );

  if (!project) {
    return (
      <Container className="tone-dark bg-ink py-40 text-white">
        <p className="kicker text-gold">Projects</p>
        <h1 className="display mt-5 max-w-3xl text-5xl md:text-6xl">That project is not in the archive.</h1>
        <p className="mt-6 max-w-xl text-white/75">The address does not match a Vertex project. The archive is the reliable list.</p>
        <ArrowLink to="/projects" surface="dark" className="mt-8">
          Back to projects
        </ArrowLink>
      </Container>
    );
  }

  const number = projectIndex(project.slug);

  return (
    <article>
      <header className="tone-dark bg-ink pt-36 pb-14 text-white md:pt-44 md:pb-20">
        <Container>
          <p className="text-sm text-white/60">
            <Link to="/projects" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">
              Projects
            </Link>
            <span aria-hidden="true"> / </span>
            <span>{project.title}</span>
          </p>
          <p className="kicker mt-8 text-gold">{number}</p>
          <h1 className="display mt-4 max-w-[12em] text-[clamp(3rem,6.5vw,6.2rem)] text-white">{project.title}</h1>
          <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-white/15 pt-8 sm:grid-cols-3">
            <div>
              <dt className="kicker text-white/70">Location</dt>
              <dd className="mt-2 text-lg text-white">{formatPlace(project.location)}</dd>
            </div>
            <div>
              <dt className="kicker text-white/70">Category</dt>
              <dd className="mt-2 text-lg text-white">{project.category}</dd>
            </div>
            <div>
              <dt className="kicker text-white/70">Year</dt>
              <dd className="mt-2 text-lg text-white">{project.year}</dd>
            </div>
          </dl>
        </Container>
      </header>

      <img
        src={project.hero.src}
        alt={project.hero.alt}
        className="aspect-[4/3] w-full object-cover sm:aspect-[16/9] lg:max-h-[780px] lg:aspect-[2.1/1]"
        fetchPriority="high"
      />

      <section className="bg-paper py-16 md:py-24">
        <Container className="grid gap-8 lg:grid-cols-12">
          <p className="kicker text-ink lg:col-span-3">Project statement</p>
          <p className="display text-[clamp(1.7rem,2.6vw,2.5rem)] leading-snug text-ink lg:col-span-9">{project.overview}</p>
        </Container>
      </section>

      <section className="border-t border-ink/10 bg-paper">
        <Container>
          <div className="grid gap-6 border-b border-ink/10 py-14 md:grid-cols-12 md:py-16">
            <p className="kicker text-ink/70 md:col-span-2">01</p>
            <h2 className="display text-4xl text-ink md:col-span-3 md:text-5xl">Challenge</h2>
            <p className="text-base leading-relaxed text-body md:col-span-7">{project.challenge}</p>
          </div>
          <div className="grid gap-6 border-b border-ink/10 py-14 md:grid-cols-12 md:py-16">
            <p className="kicker text-ink/70 md:col-span-2">02</p>
            <h2 className="display text-4xl text-ink md:col-span-3 md:text-5xl">Approach</h2>
            <p className="text-base leading-relaxed text-body md:col-span-7">{project.solution}</p>
          </div>
          <div className="grid gap-6 py-14 md:grid-cols-12 md:py-16">
            <p className="kicker text-ink/70 md:col-span-2">03</p>
            <h2 className="display text-4xl text-ink md:col-span-3 md:text-5xl">Outcome</h2>
            <ul className="md:col-span-7">
              {project.results.map((result) => (
                <li key={result} className="border-t border-ink/10 py-4 text-body first:border-t-0 first:pt-0">
                  {result}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-sand py-16 md:py-20" aria-labelledby="facts-heading">
        <Container>
          <h2 id="facts-heading" className="kicker text-ink">
            Project facts
          </h2>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.key} className="border-t border-ink/15 pt-4">
                <dt className="kicker text-ink/70">{fact.label}</dt>
                <dd className="display mt-3 text-3xl text-ink">{project[fact.key]}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-paper py-16 md:py-24" aria-labelledby="gallery-heading">
        <Container>
          <h2 id="gallery-heading" className="display text-4xl text-ink md:text-5xl">
            Gallery
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-12">
            {project.gallery.map((image, index) => (
              <li key={image.src + image.alt} className={index === 0 ? 'md:col-span-12' : 'md:col-span-6'}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={index === 0 ? 'aspect-[16/9] w-full object-cover' : 'aspect-[4/3] w-full object-cover'}
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {next ? (
        <Link to={`/projects/${next.slug}`} className="media-frame group grid bg-ink text-white lg:grid-cols-2">
          <span className="flex flex-col justify-end px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <span className="kicker text-gold">Next project</span>
            <span className="display mt-4 text-[clamp(2.4rem,4vw,4.2rem)] text-white">{next.title}</span>
            <span className="mt-4 text-sm text-white/70">
              {formatPlace(next.location)}
              <span aria-hidden="true"> · </span>
              {next.year}
            </span>
            <span className="mt-8 inline-flex items-center gap-3 text-[12px] font-medium tracking-[0.18em] uppercase">
              <span className="border-b border-current pb-1">View project</span>
              <span aria-hidden="true" className="arrow">
                →
              </span>
            </span>
          </span>
          <img src={next.hero.src} alt={next.hero.alt} className="h-[64vw] max-h-[520px] min-h-[240px] w-full object-cover lg:h-full lg:max-h-none lg:min-h-[420px]" />
        </Link>
      ) : null}
    </article>
  );
}
