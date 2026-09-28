import type { ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  title,
  intro,
  action,
  id,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  action?: ReactNode;
  id?: string;
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="text-xs font-semibold tracking-[0.18em] text-accent-ink uppercase">{eyebrow}</p>
        ) : null}
        <h2 id={id} className="mt-3 text-3xl font-semibold md:text-4xl">
          {title}
        </h2>
        {intro ? <p className="mt-4 text-lg text-muted">{intro}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
