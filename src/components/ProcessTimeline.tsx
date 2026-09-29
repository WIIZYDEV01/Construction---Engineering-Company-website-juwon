import { processSteps } from '../data/site';
import { ArrowLink } from './ArrowLink';
import { Container } from './Container';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function ProcessTimeline() {
  return (
    <section className="bg-sand py-20 md:py-28" aria-labelledby="process-heading">
      <Container>
        <Reveal>
          <SectionHeading id="process-heading" index="05" label="Process" title="From first line to final detail." />
          <ol className="mt-16 grid gap-12 border-ink/20 lg:grid-cols-4 lg:gap-8 lg:border-t lg:pt-10">
            {processSteps.map((step) => (
              <li key={step.number} className="relative border-l border-ink/20 pl-6 lg:border-l-0 lg:pl-0">
                <span className="absolute top-1.5 -left-1 h-2 w-2 bg-ink lg:top-[-2.85rem] lg:left-0" aria-hidden="true" />
                <p className="kicker text-ink/60">{step.number}</p>
                <h3 className="display mt-3 text-4xl text-ink md:text-5xl">{step.title}</h3>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-body">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-16 flex flex-col gap-8 border-t border-ink/15 pt-12 md:mt-20 md:flex-row md:items-end md:justify-between">
            <h2 className="display max-w-[12em] text-[clamp(2.3rem,4.5vw,4.2rem)] text-ink">
              The next structure starts with a conversation.
            </h2>
            <ArrowLink to="/contact" surface="light">
              Start a project
            </ArrowLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
