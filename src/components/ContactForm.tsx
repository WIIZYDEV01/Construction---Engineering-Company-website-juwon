import { ChevronDown } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { budgetRanges, projectTypes } from '../data/site';
import { Button } from './Button';
import { Field, controlClass } from './Field';

type Values = {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = {
  fullName: '',
  email: '',
  company: '',
  phone: '',
  projectType: '',
  budget: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+().\-\s]{8,20}$/;

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (values.fullName.trim().length < 2) {
    errors.fullName = 'Enter your full name.';
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (values.company.trim().length > 120) {
    errors.company = 'Company name should be 120 characters or fewer.';
  }

  if (values.phone.trim() && !phonePattern.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number, including the area code.';
  }

  if (!values.projectType) {
    errors.projectType = 'Select a project type.';
  }

  if (values.message.trim().length < 20) {
    errors.message = 'Describe the project in at least 20 characters.';
  }

  return errors;
}

export function ContactForm({ initialProjectType = '' }: { initialProjectType?: string }) {
  const startingType = projectTypes.includes(initialProjectType as (typeof projectTypes)[number])
    ? initialProjectType
    : '';

  const [values, setValues] = useState<Values>({ ...empty, projectType: startingType });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

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
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setStatus('submitting');
    window.setTimeout(() => setStatus('sent'), 350);
  }

  if (status === 'sent') {
    return (
      <div role="status" className="border border-line bg-light px-6 py-12 sm:px-10">
        <p className="font-display text-3xl font-semibold text-navy">Thank you. Your enquiry has been received.</p>
        <p className="mt-4 max-w-lg text-muted">
          A director will reply using the details you provided. If the matter is urgent, call the London office.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-8"
          onClick={() => {
            setValues({ ...empty, projectType: startingType });
            setErrors({});
            setStatus('idle');
          }}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <p className="text-sm text-muted">Fields marked with * are required.</p>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full Name" required error={errors.fullName}>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            value={values.fullName}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            className={controlClass(Boolean(errors.fullName))}
            onChange={(event) => update('fullName', event.target.value)}
          />
        </Field>
        <Field id="email" label="Email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={controlClass(Boolean(errors.email))}
            onChange={(event) => update('email', event.target.value)}
          />
        </Field>
        <Field id="company" label="Company" error={errors.company}>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            value={values.company}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? 'company-error' : undefined}
            className={controlClass(Boolean(errors.company))}
            onChange={(event) => update('company', event.target.value)}
          />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={controlClass(Boolean(errors.phone))}
            onChange={(event) => update('phone', event.target.value)}
          />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="projectType" label="Project Type" required error={errors.projectType}>
          <div className="relative">
            <select
              id="projectType"
              name="projectType"
              value={values.projectType}
              aria-invalid={Boolean(errors.projectType)}
              aria-describedby={errors.projectType ? 'projectType-error' : undefined}
              className={`${controlClass(Boolean(errors.projectType))} appearance-none pr-10`}
              onChange={(event) => update('projectType', event.target.value)}
            >
              <option value="">Select a project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-navy" aria-hidden="true" />
          </div>
        </Field>
        <Field id="budget" label="Estimated Budget" error={errors.budget}>
          <div className="relative">
            <select
              id="budget"
              name="budget"
              value={values.budget}
              className={`${controlClass(false)} appearance-none pr-10`}
              onChange={(event) => update('budget', event.target.value)}
            >
              <option value="">Select a budget range</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-navy" aria-hidden="true" />
          </div>
        </Field>
      </div>
      <Field id="message" label="Message" required error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={controlClass(Boolean(errors.message))}
          onChange={(event) => update('message', event.target.value)}
        />
      </Field>
      <Button type="submit" variant="accent" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send enquiry'}
      </Button>
    </form>
  );
}
