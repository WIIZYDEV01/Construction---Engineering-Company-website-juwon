import { cn } from '../lib/cn';

export function StatsSection({
  stats,
  label,
}: {
  stats: ReadonlyArray<{ value: string; label: string }>;
  label: string;
}) {
  return (
    <section className="border-y border-line bg-light" aria-label={label}>
      <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-10">
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <li
              key={stat.label}
              className={cn(
                'px-2 py-8 sm:px-6 sm:py-10',
                index % 2 === 1 && 'border-l border-line',
                index > 1 && 'border-t border-line lg:border-t-0',
                index > 0 && 'lg:border-l lg:border-line',
              )}
            >
              <p className="font-display text-[2rem] leading-none font-semibold text-navy sm:text-5xl">{stat.value}</p>
              <p className="mt-3 max-w-[12rem] text-sm leading-snug text-muted sm:text-base">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
