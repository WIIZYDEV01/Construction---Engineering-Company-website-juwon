import { Container } from '../components/Container';
import { PageHeader } from '../components/PageHeader';
import { company } from '../data/site';
import { usePageMeta } from '../hooks/usePageMeta';

export function TermsPage() {
  usePageMeta(
    'Terms · Vertex Construction & Engineering',
    'Terms for using the Vertex Construction & Engineering website.',
  );

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms"
        intro="These terms apply to your use of the Vertex Construction & Engineering website."
      />
      <Container className="py-14 md:py-20">
        <div className="max-w-3xl space-y-8 text-muted">
          <section>
            <h2 className="text-2xl font-semibold text-navy">Using this website</h2>
            <p className="mt-3">
              The pages on this site describe the work of {company.name}. They are general information. They are not a tender, a specification, or advice for a particular site. You should not rely on them as a substitute for a proper appointment and a project-specific review.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy">Enquiries</h2>
            <p className="mt-3">
              Sending an enquiry or an application does not appoint Vertex and does not create a contract. Any appointment is made only in a written agreement signed by both parties. Figures shown on project pages are contract values for those projects. They are not an offer for future work.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy">Intellectual property</h2>
            <p className="mt-3">
              The text, structure and marks on this website belong to Vertex Construction & Engineering unless stated otherwise. You may read them and share links to them. You may not copy the site, or present the material as your own.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy">Liability</h2>
            <p className="mt-3">
              We take care to keep the site accurate. We do not accept liability for decisions made solely on the basis of these pages, or for loss arising from a temporary interruption to the site, except where the law does not allow us to exclude it.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy">Law</h2>
            <p className="mt-3">
              These terms are governed by the law of England and Wales. The courts of England and Wales have exclusive jurisdiction, except where you have a legal right to bring a claim elsewhere.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
