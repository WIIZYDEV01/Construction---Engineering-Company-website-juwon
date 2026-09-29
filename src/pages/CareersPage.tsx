import { useRef, useState } from 'react';
import { ApplicationForm } from '../components/ApplicationForm';
import { Container } from '../components/Container';
import { Hero } from '../components/Hero';
import { JobList } from '../components/JobList';
import { Reveal } from '../components/Reveal';
import { disciplines, jobs, reasons } from '../data/careers';
import { usePageMeta } from '../hooks/usePageMeta';

export function CareersPage() {
  usePageMeta(
    'Careers · Vertex Construction & Engineering',
    'Engineering, construction, project management and operations roles at Vertex Construction & Engineering in the United Kingdom.',
  );

  const [positionId, setPositionId] = useState('');
  const formRef = useRef<HTMLDivElement>(null);

  function onApply(jobId: string) {
    setPositionId(jobId);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    formRef.current?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    window.setTimeout(() => {
      document.getElementById('application-fullName')?.focus();
    }, reduce ? 0 : 400);
  }

  return (
    <>
      <Hero
        kicker="Careers"
        title="Build work that lasts."
        lede="Vertex hires people who want responsibility on live projects. The roles below are open now. If your discipline is not listed, a speculative application is welcome."
        image={{
          src: '/images/about.jpg',
          alt: 'Steel fixers working among reinforcement on a concrete slab',
        }}
      />

      <section className="bg-paper py-20 md:py-28" aria-labelledby="why-work-heading">
        <Container>
          <Reveal>
            <p className="kicker text-ink">Why Vertex</p>
            <h2 id="why-work-heading" className="display mt-5 max-w-[14em] text-[clamp(2.4rem,4.5vw,4.4rem)] text-ink">
              Responsibility on work that is technically serious.
            </h2>
            <ul className="mt-14">
              {reasons.map((reason, index) => (
                <li key={reason.title} className="grid gap-3 border-t border-ink/15 py-8 md:grid-cols-12 md:gap-8">
                  <p className="kicker text-ink/70 md:col-span-2">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="display text-3xl text-ink md:col-span-4 md:text-4xl">{reason.title}</h3>
                  <p className="text-sm leading-relaxed text-body md:col-span-6">{reason.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="bg-sand py-20 md:py-28" aria-labelledby="culture-heading">
        <Container>
          <Reveal>
            <p className="kicker text-ink">Culture</p>
            <h2 id="culture-heading" className="display mt-5 max-w-[12em] text-[clamp(2.4rem,4.5vw,4.4rem)] text-ink">
              Where people work.
            </h2>
            <ul className="mt-14 grid gap-12 md:grid-cols-2">
              {disciplines.map((discipline) => (
                <li key={discipline.title} className="border-t border-ink/15 pt-6">
                  <h3 className="display text-4xl text-ink">{discipline.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-body">{discipline.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper py-20 md:py-28" aria-labelledby="opportunities-heading">
        <Container>
          <Reveal>
            <p className="kicker text-ink">Opportunities</p>
            <h2 id="opportunities-heading" className="display mt-5 max-w-[14em] text-[clamp(2.4rem,4.5vw,4.4rem)] text-ink">
              Progression follows work you have actually delivered.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-body">
              Engineers become package leads. Site managers become construction managers. Open roles are listed below. A speculative application is welcome when your discipline is not on the list.
            </p>
          </Reveal>

          <div className="mt-14">
            <div className="mb-6 flex items-end justify-between gap-4">
              <h3 className="display text-3xl text-ink md:text-4xl">Open roles</h3>
              <p className="text-sm text-body/70">{jobs.length} roles currently open</p>
            </div>
            <JobList jobs={jobs} onApply={onApply} />
            <ApplicationForm positionId={positionId} formRef={formRef} />
          </div>
        </Container>
      </section>
    </>
  );
}
