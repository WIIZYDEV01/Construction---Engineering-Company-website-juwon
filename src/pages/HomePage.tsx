import { Compass, Leaf, ShieldCheck, Timer } from 'lucide-react';
import { Button, TextLink } from '../components/Button';
import { Container } from '../components/Container';
import { CtaBand } from '../components/CtaBand';
import { ProjectGrid } from '../components/ProjectGrid';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceItem } from '../components/ServiceItem';
import { StatsSection } from '../components/StatsSection';
import { featuredProjects } from '../data/projects';
import { services } from '../data/services';
import { homeStats } from '../data/site';
import { usePageMeta } from '../hooks/usePageMeta';

const reasons = [
  {
    title: 'Safety First',
    text: 'Every site is led against a written plan for risk, supervision and the authority to stop work. Hours, incidents and close calls are reviewed in the same meeting as the programme.',
    icon: ShieldCheck,
  },
  {
    title: 'Technical Excellence',
    text: 'Engineers and construction managers work as one team. Details are resolved before they reach the workface. When the ground disagrees with the drawing, the decision is made by someone who understands both.',
    icon: Compass,
  },
  {
    title: 'Reliable Delivery',
    text: 'Programmes are built from the interfaces that usually slip: access, utilities, long-lead items and approvals. Clients see the same report every month, with changes explained rather than absorbed.',
    icon: Timer,
  },
  {
    title: 'Sustainable Construction',
    text: 'We cut waste, specify materials with a clear end of life, and plan the job so neighbours and operators are not an afterthought. Certification targets are written into procurement, not added at handover.',
    icon: Leaf,
  },
];

export function HomePage() {
  usePageMeta(
    'Vertex Construction & Engineering',
    'Vertex Construction & Engineering delivers complex construction, civil engineering and infrastructure projects from London.',
  );

  return (
    <>
      <section className="relative lg:min-h-[calc(100vh-4.5rem)]">
        <Container className="relative z-10 lg:grid lg:min-h-[calc(100vh-4.5rem)] lg:grid-cols-2">
          <div className="flex flex-col justify-center py-14 sm:py-16 lg:py-20 lg:pr-16">
            <p className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.18em] text-accent-ink sm:text-xs">
              <span className="inline-block h-px w-8 shrink-0 bg-accent" aria-hidden="true" />
              CONSTRUCTION • ENGINEERING • INFRASTRUCTURE
            </p>
            <h1 className="mt-5 max-w-xl text-[2.35rem] leading-[1.08] font-semibold sm:text-5xl xl:text-[3.4rem]">
              Building the infrastructure behind tomorrow.
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted">
              Vertex Construction & Engineering delivers complex construction and infrastructure projects with precision, safety and long-term thinking.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button to="/projects">View our projects</Button>
              <Button to="/contact" variant="outline">
                Start a conversation
              </Button>
            </div>
          </div>
        </Container>
        <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            src="/images/hero.jpg"
            alt="Project team reviewing a reinforced concrete deck on a large construction site"
            className="h-[300px] w-full object-cover sm:h-[440px] lg:h-full"
            fetchPriority="high"
          />
        </div>
      </section>

      <StatsSection stats={homeStats} label="Company figures" />

      <section className="py-20 md:py-28" aria-labelledby="about-preview-heading">
        <Container>
          <Reveal>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="overflow-hidden bg-light">
                <img
                  src="/images/about.jpg"
                  alt="Steel fixers working among reinforcement on a concrete slab"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h2 id="about-preview-heading" className="text-3xl font-semibold md:text-4xl">
                  Engineering confidence into every project.
                </h2>
                <div className="mt-6 space-y-4 text-muted">
                  <p>
                    Vertex was founded in London in 2012 to deliver work that does not sit neatly in one discipline. A commercial building that depends on a civil interface. An infrastructure scheme that has to be built in a street that stays open. An industrial plant that has to keep producing while it expands.
                  </p>
                  <p>
                    The people leading that work bring more than fifteen years of construction and engineering experience. Safety, quality and a measured approach to carbon sit inside the programme, not in a report written after the fact. Clients return because the same team is still accountable when the difficult part of the job arrives.
                  </p>
                </div>
                <div className="mt-8">
                  <TextLink to="/about">Meet Vertex →</TextLink>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line py-20 md:py-28" aria-labelledby="services-heading">
        <Container>
          <Reveal>
            <SectionHeading
              id="services-heading"
              eyebrow="Services"
              title="Six ways we are appointed."
              intro="Vertex leads the whole of a project, or the part that carries the risk."
              action={<TextLink to="/services">All services →</TextLink>}
            />
            <ul className="mt-10 border-t border-line">
              {services.map((service) => (
                <li key={service.id}>
                  <ServiceItem
                    number={service.number}
                    title={service.title}
                    description={service.summary}
                    href={`/services#${service.id}`}
                  />
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="bg-light py-20 md:py-28" aria-labelledby="projects-heading">
        <Container>
          <Reveal>
            <SectionHeading
              id="projects-heading"
              eyebrow="Selected work"
              title="Featured projects"
              intro="Recent building, civil and industrial work in the cities where our clients operate."
              action={<TextLink to="/projects">View all projects →</TextLink>}
            />
            <div className="mt-12">
              <ProjectGrid projects={featuredProjects} />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-28" aria-labelledby="why-heading">
        <Container>
          <Reveal>
            <h2 id="why-heading" className="text-3xl font-semibold md:text-4xl">
              Why Vertex
            </h2>
            <ul className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((reason) => (
                <li key={reason.title}>
                  <reason.icon className="h-6 w-6 text-navy" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-semibold">{reason.title}</h3>
                  <p className="mt-3 text-muted">{reason.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Planning a complex build?"
        text="Tell us about the site, the constraints and the outcome you need. A director will come back with a clear view of how Vertex can help."
        action="Start a conversation"
      />
    </>
  );
}
