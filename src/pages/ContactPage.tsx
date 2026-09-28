import { Mail, MapPin, Phone } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';
import { Container } from '../components/Container';
import { PageHeader } from '../components/PageHeader';
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
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something remarkable."
        intro="Tell us what you are trying to build, and the constraint that will decide whether it succeeds. A director will respond."
      />
      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="text-2xl font-semibold">London office</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-navy">Address</p>
                    <p className="text-muted">{company.location}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-navy">Email</p>
                    <a className="text-muted underline decoration-accent decoration-2 underline-offset-4" href={`mailto:${company.email}`}>
                      {company.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-navy" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-navy">Phone</p>
                    <a className="text-muted underline decoration-accent decoration-2 underline-offset-4" href={company.phoneHref}>
                      {company.phoneDisplay}
                    </a>
                  </div>
                </li>
              </ul>
              <p className="mt-8 text-sm text-muted">Office hours: {company.hours}</p>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-2xl font-semibold">Project enquiry</h2>
              <div className="mt-6">
                <ContactForm initialProjectType={initialProjectType} />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
