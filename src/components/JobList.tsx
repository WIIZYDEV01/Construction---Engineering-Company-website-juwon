import { useState } from 'react';
import type { Job } from '../data/careers';

export function JobList({ jobs, onApply }: { jobs: Job[]; onApply: (id: string) => void }) {
  const [openId, setOpenId] = useState<string | null>(jobs[0]?.id ?? null);

  return (
    <div>
      <div className="hidden border-b border-ink/15 pb-3 md:grid md:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,0.8fr))_auto] md:gap-4">
        <p className="kicker text-ink/70">Role</p>
        <p className="kicker text-ink/70">Location</p>
        <p className="kicker text-ink/70">Department</p>
        <p className="kicker text-ink/70">Type</p>
        <p className="kicker text-ink/70">
          <span className="sr-only">Apply</span>
        </p>
      </div>
      <ul>
        {jobs.map((job) => {
          const open = openId === job.id;
          const panelId = `${job.id}-panel`;
          return (
            <li key={job.id} className="border-b border-ink/15">
              <div className="grid gap-4 py-6 md:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,0.8fr))_auto] md:items-center md:gap-4">
                <div>
                  <p className="kicker text-ink/70 md:hidden">Role</p>
                  <button
                    type="button"
                    className="display mt-1 text-left text-[2rem] text-ink md:mt-0 md:text-[2.15rem]"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenId(open ? null : job.id)}
                  >
                    {job.title}
                  </button>
                </div>
                <div>
                  <p className="kicker text-ink/70 md:hidden">Location</p>
                  <p className="mt-1 text-sm md:mt-0">{job.location}</p>
                </div>
                <div>
                  <p className="kicker text-ink/70 md:hidden">Department</p>
                  <p className="mt-1 text-sm md:mt-0">{job.department}</p>
                </div>
                <div>
                  <p className="kicker text-ink/70 md:hidden">Type</p>
                  <p className="mt-1 text-sm md:mt-0">{job.type}</p>
                </div>
                <div className="md:text-right">
                  <button
                    type="button"
                    className="group inline-flex min-h-11 items-center gap-3 text-[12px] font-medium tracking-[0.18em] text-ink uppercase"
                    onClick={() => onApply(job.id)}
                  >
                    <span className="border-b border-current pb-1">Apply</span>
                    <span aria-hidden="true" className="arrow">
                      →
                    </span>
                  </button>
                </div>
              </div>
              {open ? (
                <p id={panelId} className="max-w-2xl pb-7 text-sm leading-relaxed text-body">
                  {job.summary}
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
