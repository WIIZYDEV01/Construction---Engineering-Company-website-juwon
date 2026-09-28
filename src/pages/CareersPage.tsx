import { useRef, useState } from 'react';
import { ApplicationForm } from '../components/ApplicationForm';
import { Container } from '../components/Container';
import { JobCard } from '../components/JobCard';
import { PageHeader } from '../components/PageHeader';
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
      <PageHeader
        eyebrow="Careers"
        title="Build your future with us."
        intro="Vertex hires people who want responsibility on live projects. The roles below are open now. If your discipline is not listed, a speculative application is welcome."
      />

      <section className="py-16 md:py-20" aria-labelledby="why-work-heading">
        <Container>
          <h2 id="why-work-heading" className="text-3xl font-semibold md:text-4xl">
            Why work with us
          </h2>
          <ul className="mt-10 grid gap-8 md:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason.title} className="border-t border-navy pt-5">
                <h3 className="text-xl font-semibold">{reason.title}</h3>
                <p className="mt-3 text-muted">{reason.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line bg-light py-16 md:py-20" aria-labelledby="disciplines-heading">
        <Container>
          <h2 id="disciplines-heading" className="text-3xl font-semibold">
            Where people work
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((discipline) => (
              <li key={discipline.title}>
                <h3 className="text-lg font-semibold">{discipline.title}</h3>
                <p className="mt-2 text-muted">{discipline.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-20" aria-labelledby="roles-heading">
        <Container>
          <div className="flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 id="roles-heading" className="text-3xl font-semibold">
              Open positions
            </h2>
            <p className="text-sm text-muted">{jobs.length} roles currently open</p>
          </div>
          <div>
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} onApply={onApply} />
            ))}
          </div>
          <div className="mt-12">
            <ApplicationForm positionId={positionId} formRef={formRef} />
          </div>
        </Container>
      </section>
    </>
  );
}
