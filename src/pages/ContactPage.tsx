import { useSearchParams } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';
import { Container } from '../components/Container';
import { company } from '../data/site';
import { usePageMeta } from '../hooks/usePageMeta';

export function ContactPage() {
  usePageMeta(
    'Contact · Vertex Construction & Engineering',
    'Contact Vertex Construction & Engineering in London to discuss a construction, civil engineering or infrastructure project.',
  );

  const [params] = useSearchParams();
  const initialProjectType = params.get('type') ?? '';

  return (
    <div className="tone-dark flex flex-1 flex-col bg-ink text-white">
      <Container className="grid flex-1 gap-16 pt-36 pb-20 lg:grid-cols-12 lg:pt-44 lg:pb-28">
        <div className="lg:col-span-5">
          <p className="kicker text-gold">Contact</p>
          <h1 className="display mt-5 text-[clamp(3rem,6vw,5.4rem)] text-white">Have a project worth building?</h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/75">
            Tell us what you&apos;re planning. Our team will get back to you to discuss the next step.
          </p>
          <address className="mt-12 space-y-3 text-base not-italic text-white/85">
            <p>{company.location}</p>
            <p>
              <a className="underline decoration-white/30 underline-offset-4 hover:decoration-white" href={`mailto:${company.email}`}>
                {company.email}
              </a>
            </p>
            <p>
              <a className="underline decoration-white/30 underline-offset-4 hover:decoration-white" href={company.phoneHref}>
                {company.phoneDisplay}
              </a>
            </p>
          </address>
          <p className="mt-8 text-sm text-mute">Office hours: {company.hours}</p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <h2 className="sr-only">Project enquiry</h2>
          <ContactForm initialProjectType={initialProjectType} />
        </div>
      </Container>
    </div>
  );
}
