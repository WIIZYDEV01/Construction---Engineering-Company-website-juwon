import { Container } from '../components/Container';
import { CtaBand } from '../components/CtaBand';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { StatsSection } from '../components/StatsSection';
import { aboutStats } from '../data/site';
import { usePageMeta } from '../hooks/usePageMeta';

const organisation = [
  {
    title: 'Construction',
    text: 'Site leadership for buildings, civils and industrial facilities. The person running the job is close enough to the workface to know whether the programme will hold.',
  },
  {
    title: 'Engineering',
    text: 'Structural, civil and services coordination, from the drawing that gets built to the query that appears when the ground is opened.',
  },
  {
    title: 'Project management',
    text: 'Programme, cost, risk and client reporting, held by people who still understand how the work is built. One accountable lead, not a chain of commentaries.',
  },
];

const standards = [
  {
    title: 'Safety',
    text: 'Every project has a named lead for risk, a supervision plan, and a clear right to stop work. We report hours and incidents with the same regularity as cost.',
  },
  {
    title: 'Quality',
    text: 'Hold points are agreed before work starts. Inspections are done by the people who will have to live with the result at handover, not by a separate process that arrives too late.',
  },
  {
    title: 'Sustainability',
    text: 'We measure what we can influence: waste leaving site, materials with a known end of life, energy where we control the specification, and the disruption a project causes. Where a client is targeting BREEAM or a planning condition, that requirement is written into procurement.',
  },
];

export function AboutPage() {
  usePageMeta(
    'About · Vertex Construction & Engineering',
    'Vertex was founded in London in 2012. The company combines construction, engineering and project management on complex building and infrastructure work.',
  );

  return (
    <>
      <PageHeader
        eyebrow="About Vertex"
        title="Built on experience. Driven by progress."
        intro="Vertex combines construction expertise, engineering knowledge and project management in one team, and keeps that team accountable from the first programme to handover."
      />

      <section className="py-16 md:py-24" aria-labelledby="story-heading">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 id="story-heading" className="text-3xl font-semibold">
                A London company for work that crosses disciplines.
              </h2>
              <div className="mt-6 space-y-4 text-muted">
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
            <div className="lg:col-span-6">
              <div className="overflow-hidden bg-light">
                <img
                  src="/images/steel.jpg"
                  alt="Tower crane erecting a steel frame on a building under construction"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="mt-4 text-sm text-muted">
                Founded in 2012. The experience of the people leading projects is longer than the age of the company.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <StatsSection stats={aboutStats} label="Vertex in figures" />

      <section className="py-16 md:py-24" aria-labelledby="organisation-heading">
        <Container>
          <Reveal>
            <h2 id="organisation-heading" className="max-w-2xl text-3xl font-semibold md:text-4xl">
              How the company is organised
            </h2>
            <ul className="mt-12 grid gap-10 md:grid-cols-3">
              {organisation.map((item) => (
                <li key={item.title} className="border-t border-navy pt-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-muted">{item.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line bg-light py-16 md:py-24" aria-labelledby="standards-heading">
        <Container>
          <Reveal>
            <h2 id="standards-heading" className="max-w-2xl text-3xl font-semibold md:text-4xl">
              What we hold ourselves to
            </h2>
            <ul className="mt-12 grid gap-8 lg:grid-cols-3">
              {standards.map((item) => (
                <li key={item.title}>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-muted">{item.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Work with a team that stays accountable."
        text="If you are planning a building, a piece of infrastructure or an industrial facility, start with a conversation about the constraint that actually matters."
      />
    </>
  );
}
