export const company = {
  name: 'Vertex Construction & Engineering',
  shortName: 'VERTEX',
  tagline: 'Building the infrastructure behind tomorrow.',
  email: 'hello@vertexconstruction.com',
  phoneDisplay: '+44 20 7946 0188',
  phoneHref: 'tel:+442079460188',
  location: 'London, United Kingdom',
  locationShort: 'London, UK',
  established: 2012,
  hours: 'Monday to Friday, 08:00–18:00',
};

export const navLinks = [
  { label: 'Projects', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'Studio', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
] as const;

export const footerNav = navLinks;

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'X', href: 'https://x.com/' },
] as const;

export const homeStats = [
  { value: '15+', label: 'Years' },
  { value: '180+', label: 'Projects' },
  { value: '12', label: 'Countries' },
  { value: '850+', label: 'Professionals & Partners' },
] as const;

export const aboutStats = [
  { value: '2012', label: 'Founded' },
  { value: '180+', label: 'Projects' },
  { value: '12', label: 'Countries' },
  { value: '850+', label: 'Professionals & Partners' },
] as const;

export const principles = [
  {
    number: '01',
    title: 'Precision',
    text: 'Drawings, temporary works and the workface stay in one conversation. Details are resolved before they become delay.',
  },
  {
    number: '02',
    title: 'Performance',
    text: 'Programmes are written from the interfaces that slip: access, utilities, long-lead items, and the people who still have to use a place.',
  },
  {
    number: '03',
    title: 'Progress',
    text: 'Safety, quality and a measured approach to carbon sit inside the programme. A project is finished when it performs.',
  },
] as const;

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    text: 'Understand the brief, site and objectives.',
  },
  {
    number: '02',
    title: 'Plan',
    text: 'Develop the strategy, engineering approach and project roadmap.',
  },
  {
    number: '03',
    title: 'Build',
    text: 'Execute with safety, precision and disciplined project management.',
  },
  {
    number: '04',
    title: 'Deliver',
    text: 'Complete, refine and hand over a project built for long-term performance.',
  },
] as const;

export const projectTypes = [
  'Commercial Construction',
  'Civil Engineering',
  'Infrastructure Development',
  'Industrial Construction',
  'Project Management',
  'Renovation & Restoration',
  'Multiple services',
  'Not sure yet',
] as const;

export const budgetRanges = [
  'Under £1 million',
  '£1 million – £5 million',
  '£5 million – £20 million',
  '£20 million – £50 million',
  'Over £50 million',
  'Prefer to discuss',
] as const;
