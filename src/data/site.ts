export const company = {
  name: 'Vertex Construction & Engineering',
  shortName: 'VERTEX',
  tagline: 'Building what moves the future forward.',
  email: 'hello@vertexconstruction.com',
  phoneDisplay: '+44 20 7946 0188',
  phoneHref: 'tel:+442079460188',
  location: 'London, United Kingdom',
  locationShort: 'London, UK',
  established: 2012,
  hours: 'Monday to Friday, 08:00–18:00',
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
] as const;

export const footerNav = [
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
] as const;

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'X', href: 'https://x.com/' },
] as const;

export const homeStats = [
  { value: '15+', label: 'Years of experience' },
  { value: '180+', label: 'Projects delivered' },
  { value: '12', label: 'Countries served' },
  { value: '96%', label: 'Repeat & referral business' },
] as const;

export const aboutStats = [
  { value: '2012', label: 'Founded' },
  { value: '180+', label: 'Projects' },
  { value: '850+', label: 'Professionals & Partners' },
  { value: '12', label: 'Countries' },
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
