import { Container } from '../components/Container';
import { PageHeader } from '../components/PageHeader';
import { company } from '../data/site';
import { usePageMeta } from '../hooks/usePageMeta';

export function PrivacyPage() {
  usePageMeta(
    'Privacy · Vertex Construction & Engineering',
    'How Vertex Construction & Engineering uses personal information submitted through this website.',
  );

  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy"
        intro="This notice explains what Vertex Construction & Engineering does with personal information you send us through this website."
      />
      <Container className="py-14 md:py-20">
        <div className="max-w-3xl space-y-8 text-muted">
          <section>
            <h2 className="text-2xl font-semibold text-navy">Who we are</h2>
            <p className="mt-3">
              Vertex Construction & Engineering is a construction, civil engineering and infrastructure company based in {company.location}. For questions about your information, write to{' '}
              <a className="font-semibold text-navy underline decoration-accent decoration-2 underline-offset-4" href={`mailto:${company.email}`}>
                {company.email}
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy">Information you give us</h2>
            <p className="mt-3">
              If you send a project enquiry or a job application, we collect the details you choose to provide. That may include your name, email address, telephone number, company, the type of project, a budget range, and the message you write.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy">How we use it</h2>
            <p className="mt-3">
              We use enquiry information to reply, to decide whether we are the right firm for the work, and to keep a record of that conversation. We use application information to consider you for a role and to contact you about it. We do not sell personal information, and we do not use it for unrelated marketing.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy">How long we keep it</h2>
            <p className="mt-3">
              Enquiry records are kept for as long as the conversation is active and for a limited period afterwards, so that we can deal with follow-up questions. Unsuccessful applications are kept only for the period we need in order to respond to a query about the decision, unless you ask us to keep your details for a future role.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy">Your rights</h2>
            <p className="mt-3">
              You can ask us for a copy of the information we hold about you, ask us to correct it, or ask us to delete it where we have no continuing reason to keep it. You can also complain to the Information Commissioner’s Office if you believe we have handled your information improperly.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-navy">Contact</h2>
            <p className="mt-3">
              {company.location}
              <br />
              <a className="font-semibold text-navy underline decoration-accent decoration-2 underline-offset-4" href={`mailto:${company.email}`}>
                {company.email}
              </a>
              <br />
              <a className="font-semibold text-navy underline decoration-accent decoration-2 underline-offset-4" href={company.phoneHref}>
                {company.phoneDisplay}
              </a>
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
