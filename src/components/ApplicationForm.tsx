import { ChevronDown } from 'lucide-react';
import { useEffect, useState, type FormEvent, type RefObject } from 'react';
import { jobs } from '../data/careers';
import { Button } from './Button';
import { Field, controlClass } from './Field';

type Values = {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  introduction: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+().\-\s]{8,20}$/;

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (values.fullName.trim().length < 2) errors.fullName = 'Enter your full name.';
  if (!emailPattern.test(values.email.trim())) errors.email = 'Enter a valid email address.';
  if (values.phone.trim() && !phonePattern.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number, including the area code.';
  }
  if (!values.position) errors.position = 'Select a position.';
  if (values.introduction.trim().length < 20) {
    errors.introduction = 'Tell us briefly what you want to be responsible for. Use at least 20 characters.';
  }
  return errors;
}

export function ApplicationForm({
  positionId,
  formRef,
}: {
  positionId: string;
  formRef: RefObject<HTMLDivElement | null>;
}) {
  const [values, setValues] = useState<Values>({
    fullName: '',
    email: '',
    phone: '',
    position: positionId,
    introduction: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

  useEffect(() => {
    if (!positionId) return;
    setValues((current) => ({ ...current, position: positionId }));
    setStatus('idle');
  }, [positionId]);

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = (Object.keys(nextErrors) as Array<keyof Values>)[0];
    if (firstInvalid) {
      document.getElementById(`application-${firstInvalid}`)?.focus();
      return;
    }
    setStatus('submitting');
    window.setTimeout(() => setStatus('sent'), 350);
  }

  return (
    <div ref={formRef} id="apply" className="scroll-mt-28 border border-line bg-light px-5 py-10 sm:px-8 md:px-10">
      <h2 className="text-3xl font-semibold">Apply now</h2>
      <p className="mt-3 max-w-2xl text-muted">
        Tell us which role you want and what you want to be responsible for. If nothing listed fits, choose a speculative application.
      </p>
      {status === 'sent' ? (
        <div role="status" className="mt-8 max-w-xl">
          <p className="font-display text-2xl font-semibold text-navy">Thank you. Your application has been received.</p>
          <p className="mt-3 text-muted">If we take it further, we will write to the email address you provided.</p>
          <Button
            type="button"
            variant="outline"
            className="mt-6"
            onClick={() => {
              setValues({ fullName: '', email: '', phone: '', position: positionId, introduction: '' });
              setErrors({});
              setStatus('idle');
            }}
          >
            Submit another application
          </Button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate className="mt-8 max-w-3xl space-y-5">
          <p className="text-sm text-muted">Fields marked with * are required.</p>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="application-fullName" label="Full Name" required error={errors.fullName}>
              <input
                id="application-fullName"
                name="fullName"
                autoComplete="name"
                value={values.fullName}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? 'application-fullName-error' : undefined}
                className={controlClass(Boolean(errors.fullName))}
                onChange={(event) => update('fullName', event.target.value)}
              />
            </Field>
            <Field id="application-email" label="Email" required error={errors.email}>
              <input
                id="application-email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'application-email-error' : undefined}
                className={controlClass(Boolean(errors.email))}
                onChange={(event) => update('email', event.target.value)}
              />
            </Field>
            <Field id="application-phone" label="Phone" error={errors.phone}>
              <input
                id="application-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={values.phone}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'application-phone-error' : undefined}
                className={controlClass(Boolean(errors.phone))}
                onChange={(event) => update('phone', event.target.value)}
              />
            </Field>
            <Field id="application-position" label="Position" required error={errors.position}>
              <div className="relative">
                <select
                  id="application-position"
                  name="position"
                  value={values.position}
                  aria-invalid={Boolean(errors.position)}
                  aria-describedby={errors.position ? 'application-position-error' : undefined}
                  className={`${controlClass(Boolean(errors.position))} appearance-none pr-10`}
                  onChange={(event) => update('position', event.target.value)}
                >
                  <option value="">Select a position</option>
                  {jobs.map((job) => (
                    <option key={job.id} value={job.id}>
                      {job.title}
                    </option>
                  ))}
                  <option value="speculative">Speculative application</option>
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-navy" aria-hidden="true" />
              </div>
            </Field>
          </div>
          <Field id="application-introduction" label="Introduction" required error={errors.introduction}>
            <textarea
              id="application-introduction"
              name="introduction"
              rows={6}
              value={values.introduction}
              aria-invalid={Boolean(errors.introduction)}
              aria-describedby={errors.introduction ? 'application-introduction-error' : undefined}
              className={controlClass(Boolean(errors.introduction))}
              onChange={(event) => update('introduction', event.target.value)}
            />
          </Field>
          <Button type="submit" variant="accent" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Submit application'}
          </Button>
        </form>
      )}
    </div>
  );
}
