import { ArrowLink } from '../components/ArrowLink';
import { Container } from '../components/Container';
import { Hero } from '../components/Hero';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceList } from '../components/ServiceList';
import { StatsSection } from '../components/StatsSection';
import { homeProjects } from '../data/projects';
import { homeStats, principles } from '../data/site';
import { usePageMeta } from '../hooks/usePageMeta';

export function HomePage() {
  usePageMeta(
    'Vertex Construction & Engineering',
    'Vertex Construction & Engineering delivers complex construction, civil engineering and infrastructure projects from London.',
  );

  return (
    <>
      <Hero
        size="home"
        scrollCue
        kicker="Construction / Engineering / Infrastructure"
        title={
          <>
            We build the structures <span className="italic">that move cities forward.</span>
          </>
        }
        lede="From complex infrastructure to ambitious commercial developments, Vertex brings engineering precision and construction expertise to projects built for the long term."
        image={{
          src: '/images/steel.jpg',
          alt: 'Tower crane erecting a steel frame on a building under construction',
        }}
        primary={{ to: '/projects', label: 'Explore projects' }}
        secondary={{ to: '/contact', label: 'Start a conversation' }}
      />

      <section className="bg-paper" aria-labelledby="who-heading">
        <div className="grid lg:grid-cols-12">
          <div className="flex flex-col justify-center px-5 py-20 sm:px-8 lg:col-span-6 lg:px-12 lg:py-28 xl:px-16">
            <Reveal>
              <p className="kicker text-ink">01 / Who we are</p>
              <h2 id="who-heading" className="display mt-6 text-[clamp(2.15rem,4vw,4rem)] text-ink">
                Construction is more than putting things together. It is shaping how people move, work and live.
              </h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-body">
                Vertex was founded in London in 2012 for work that crosses disciplines: commercial buildings with civil interfaces, infrastructure in streets that stay open, and industrial facilities that cannot stop while they grow.
              </p>
              <ArrowLink to="/about" surface="light" className="mt-10">
                Discover our approach
              </ArrowLink>
            </Reveal>
          </div>
          <Reveal variant="media" className="lg:col-span-6">
            <img
              src="/images/architecture.jpg"
              alt="Contemporary building with a glazed wall and metal-clad volumes"
              className="h-[72vw] max-h-[520px] min-h-[280px] w-full object-cover lg:h-full lg:max-h-none lg:min-h-[720px]"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-paper pb-8" aria-labelledby="projects-heading">
        <Container className="pt-8 pb-6 md:pt-4">
          <h2 id="projects-heading" className="kicker text-ink">
            02 / Selected work
          </h2>
        </Container>
        <ProjectShowcase projects={homeProjects} />
        <Container className="py-10">
          <ArrowLink to="/projects" surface="light">
            All projects
          </ArrowLink>
        </Container>
      </section>

      <StatsSection stats={homeStats} label="Company figures" />

      <section className="bg-paper py-20 md:py-28" aria-labelledby="services-heading">
        <Container>
          <Reveal>
            <SectionHeading
              id="services-heading"
              index="03"
              label="Services"
              title="What clients appoint us to lead."
              action={
                <ArrowLink to="/services" surface="light">
                  All services
                </ArrowLink>
              }
            />
            <div className="mt-12 md:mt-16">
              <ServiceList />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="tone-dark bg-ink py-20 text-white md:py-28" aria-labelledby="studio-heading">
        <Container>
          <Reveal>
            <p className="kicker text-gold">04 / Studio</p>
            <h2 id="studio-heading" className="display mt-5 max-w-[12em] text-[clamp(2.6rem,5.4vw,5rem)] text-white">
              Built with precision. Delivered with purpose.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-mute">
              Vertex combines construction expertise, engineering discipline and project management to deliver complex projects safely and efficiently.
            </p>
            <ul className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-10">
              {principles.map((principle) => (
                <li key={principle.number} className="border-t border-white/15 pt-6">
                  <p className="kicker text-gold">{principle.number}</p>
                  <h3 className="display mt-4 text-5xl text-white md:text-6xl">{principle.title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-mute">{principle.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <ProcessTimeline />
    </>
  );
}
