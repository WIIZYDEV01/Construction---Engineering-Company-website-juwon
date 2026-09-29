import { ArrowLink } from '../components/ArrowLink';
import { Container } from '../components/Container';
import { Hero } from '../components/Hero';
import { Reveal } from '../components/Reveal';
import { StatsSection } from '../components/StatsSection';
import { aboutStats } from '../data/site';
import { usePageMeta } from '../hooks/usePageMeta';

const organisation = [
  {
    number: '01',
    title: 'Construction',
    text: 'Site leadership for buildings, civils and industrial facilities. The person running the job is close enough to the workface to know whether the programme will hold.',
  },
  {
    number: '02',
    title: 'Engineering',
    text: 'Structural, civil and services coordination, from the drawing that gets built to the query that appears when the ground is opened.',
  },
  {
    number: '03',
    title: 'Project management',
    text: 'Programme, cost, risk and client reporting, held by people who still understand how the work is built. One accountable lead, not a chain of commentaries.',
  },
];

const standards = [
  {
    number: '01',
    title: 'Safety',
    text: 'Every project has a named lead for risk, a supervision plan, and a clear right to stop work. We report hours and incidents with the same regularity as cost.',
  },
  {
    number: '02',
    title: 'Quality',
    text: 'Hold points are agreed before work starts. Inspections are done by the people who will have to live with the result at handover, not by a separate process that arrives too late.',
  },
  {
    number: '03',
    title: 'Sustainability',
    text: 'We measure what we can influence: waste leaving site, materials with a known end of life, energy where we control the specification, and the disruption a project causes. Where a client is targeting BREEAM or a planning condition, that requirement is written into procurement.',
  },
];

export function AboutPage() {
  usePageMeta(
    'Studio · Vertex Construction & Engineering',
    'Vertex was founded in London in 2012. The company combines construction, engineering and project management on complex building and infrastructure work.',
  );

  return (
    <>
      <Hero
        kicker="Studio"
        title="Experience you can build on."
        lede="Vertex combines construction expertise, engineering knowledge and project management in one team, and keeps that team accountable from the first programme to handover."
        image={{
          src: '/images/structure.jpg',
          alt: 'Operatives working from a scissor lift beside a reinforced concrete wall',
        }}
      />

      <StatsSection stats={aboutStats} label="Vertex in figures" tone="light" />

      <section className="bg-paper py-20 md:py-28" aria-labelledby="story-heading">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <p className="kicker text-ink">The practice</p>
              <h2 id="story-heading" className="display mt-5 text-[clamp(2.4rem,4vw,4rem)] text-ink">
                A London company for work that crosses disciplines.
              </h2>
            </Reveal>
            <div className="space-y-5 text-base leading-relaxed text-body lg:col-span-6 lg:pt-16">
              <p>
                Vertex was established in London in 2012 by engineers who had already spent their careers on major projects. The firm was set up for work that falls between the usual appointments: buildings that depend on a civil interface, infrastructure that has to be delivered in a live city, and industrial facilities that cannot stop while they grow.
              </p>
              <p>
                Since then the company has delivered more than 180 projects for developers, occupiers, manufacturers and public clients. Work has taken Vertex teams to 12 countries, most often with UK clients expanding abroad. The centre of the business remains in London.
              </p>
              <p>
                What has not changed is how the company is organised. Construction, engineering and project management sit together. The person accountable for the programme is close enough to the engineering to make a decision, and close enough to the site to know whether it will hold.
              </p>
              <p>
                The 850 professionals and partners behind the work include directly employed staff, long-term site supervision and specialist firms we build with repeatedly. We do not pretend that a project of this kind is delivered by a logo. It is delivered by people who stay on it.
              </p>
            </div>
          </div>
          <Reveal variant="media" className="mt-16">
            <img
              src="/images/about.jpg"
              alt="Steel fixers working among reinforcement on a concrete slab"
              className="aspect-[16/9] w-full object-cover md:aspect-[2.2/1]"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
          <p className="mt-4 text-sm text-body/70">Founded in 2012. The experience of the people leading projects is longer than the age of the company.</p>
        </Container>
      </section>

      <section className="bg-sand py-20 md:py-28" aria-labelledby="approach-heading">
        <Container>
          <Reveal>
            <p className="kicker text-ink">Our approach</p>
            <h2 id="approach-heading" className="display mt-5 max-w-[14em] text-[clamp(2.5rem,5vw,4.6rem)] text-ink">
              How the company is organised.
            </h2>
            <ul className="mt-16">
              {organisation.map((item) => (
                <li key={item.title} className="grid gap-4 border-t border-ink/15 py-10 md:grid-cols-12 md:gap-8">
                  <p className="kicker text-ink/70 md:col-span-2">{item.number}</p>
                  <h3 className="display text-4xl text-ink md:col-span-4 md:text-5xl">{item.title}</h3>
                  <p className="max-w-md text-sm leading-relaxed text-body md:col-span-6">{item.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="tone-dark bg-ink py-20 text-white md:py-28" aria-labelledby="standards-heading">
        <Container>
          <Reveal>
            <p className="kicker text-gold">Standards</p>
            <h2 id="standards-heading" className="display mt-5 max-w-[12em] text-[clamp(2.5rem,5vw,4.6rem)] text-white">
              What we hold ourselves to.
            </h2>
            <ul className="mt-16 grid gap-14 lg:grid-cols-3">
              {standards.map((item) => (
                <li key={item.title}>
                  <p className="kicker text-gold">{item.number}</p>
                  <h3 className="display mt-4 text-5xl text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-mute">{item.text}</p>
                </li>
              ))}
            </ul>
            <ArrowLink to="/contact" surface="dark" className="mt-16">
              Start a conversation
            </ArrowLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
