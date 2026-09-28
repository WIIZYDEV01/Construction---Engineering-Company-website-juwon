import type { Job } from '../data/careers';
import { Button } from './Button';

export function JobCard({ job, onApply }: { job: Job; onApply: (jobId: string) => void }) {
  return (
    <article className="grid gap-5 border-b border-line py-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
      <div>
        <h3 className="text-2xl font-semibold">{job.title}</h3>
        <p className="mt-2 text-sm font-semibold tracking-[0.12em] text-muted uppercase">
          {job.location}
          <span aria-hidden="true"> · </span>
          {job.department}
          <span aria-hidden="true"> · </span>
          {job.type}
        </p>
        <p className="mt-4 max-w-3xl text-muted">{job.summary}</p>
      </div>
      <Button
        type="button"
        variant="outline"
        onClick={() => onApply(job.id)}
        className="w-full sm:w-auto"
      >
        Apply now
      </Button>
    </article>
  );
}
