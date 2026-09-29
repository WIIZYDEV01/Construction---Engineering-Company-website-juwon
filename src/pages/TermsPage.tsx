import { Container } from '../components/Container';
import { Hero } from '../components/Hero';
import { company } from '../data/site';
import { usePageMeta } from '../hooks/usePageMeta';

export function TermsPage() {
  usePageMeta(
    'Terms · Vertex Construction & Engineering',
    'Terms for using the Vertex Construction & Engineering website.',
  );

  return (
    <>
      <Hero
        size="compact"
        kicker="Legal"
        title="Terms"
        lede="These terms apply to your use of the Vertex Construction & Engineering website."
      />
      <Container className="max-w-3xl py-16 md:py-24">
        <div className="space-y-12 text-body">
          <section>
            <h2 className="display text-4xl text-ink">Using this website</h2>
            <p className="mt-4">
              The pages on this site describe the work of {company.name}. They are general information. They are not a tender, a specification, or advice for a particular site. You should not rely on them as a substitute for a proper appointment and a project-specific review.
            </p>
          </section>
          <section>
            <h2 className="display text-4xl text-ink">Enquiries</h2>
            <p className="mt-4">
              Sending an enquiry or an application does not appoint Vertex and does not create a contract. Any appointment is made only in a written agreement signed by both parties. Figures shown on project pages are contract values for those projects. They are not an offer for future work.
            </p>
          </section>
          <section>
            <h2 className="display text-4xl text-ink">Intellectual property</h2>
            <p className="mt-4">
              The text, structure and marks on this website belong to Vertex Construction & Engineering unless stated otherwise. You may read them and share links to them. You may not copy the site, or present the material as your own.
            </p>
          </section>
          <section>
            <h2 className="display text-4xl text-ink">Liability</h2>
            <p className="mt-4">
              We take care to keep the site accurate. We do not accept liability for decisions made solely on the basis of these pages, or for loss arising from a temporary interruption to the site, except where the law does not allow us to exclude it.
            </p>
          </section>
          <section>
            <h2 className="display text-4xl text-ink">Law</h2>
            <p className="mt-4">
              These terms are governed by the law of England and Wales. The courts of England and Wales have exclusive jurisdiction, except where you have a legal right to bring a claim elsewhere.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
