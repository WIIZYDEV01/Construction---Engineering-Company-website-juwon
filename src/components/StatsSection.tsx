import { Container } from './Container';
import { Reveal } from './Reveal';

export function StatsSection({
  stats,
  label,
  tone = 'dark',
}: {
  stats: ReadonlyArray<{ value: string; label: string }>;
  label: string;
  tone?: 'dark' | 'light';
}) {
  const dark = tone === 'dark';

  return (
    <section aria-label={label} className={dark ? 'tone-dark bg-ink text-white' : 'bg-sand text-ink'}>
      <Container className="grid grid-cols-2 gap-x-6 gap-y-14 py-20 md:grid-cols-4 md:py-28">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 70}>
            <p className={cnValue(dark)}>{stat.value}</p>
            <p className={dark ? 'kicker mt-4 text-mute' : 'kicker mt-4 text-ink/60'}>{stat.label}</p>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}

function cnValue(dark: boolean) {
  return `display text-[clamp(3.4rem,6.4vw,6.4rem)] leading-none ${dark ? 'text-white' : 'text-ink'}`;
}
