export interface Job {
  id: string;
  title: string;
  location: string;
  department: string;
  type: string;
  summary: string;
}

export const jobs: Job[] = [
  {
    id: 'senior-project-engineer',
    title: 'Senior Project Engineer',
    location: 'London',
    department: 'Engineering',
    type: 'Full-time',
    summary:
      'Lead engineering coordination on a live commercial or infrastructure project. You will manage design interfaces, temporary works reviews and technical queries, and you will be the person the site team calls when a detail does not match the ground.',
  },
  {
    id: 'site-manager',
    title: 'Site Manager',
    location: 'Manchester',
    department: 'Construction',
    type: 'Full-time',
    summary:
      'Run day-to-day delivery on a civil or infrastructure site. You will own the short-term programme, supervise subcontractors, and hold the standard on safety and quality.',
  },
  {
    id: 'construction-manager',
    title: 'Construction Manager',
    location: 'Birmingham',
    department: 'Construction',
    type: 'Full-time',
    summary:
      'Lead an industrial or building project from mobilisation to handover. You will set the construction sequence, manage the commercial conversations that affect the programme, and represent Vertex with the client on site.',
  },
  {
    id: 'quantity-surveyor',
    title: 'Quantity Surveyor',
    location: 'London',
    department: 'Operations',
    type: 'Full-time',
    summary:
      'Manage cost from tender through final account on building and civil projects. You will prepare valuations, assess change, and keep the commercial position clear for the project lead.',
  },
];

export const disciplines = [
  {
    title: 'Engineering',
    text: 'Structural, civil and building-services coordination, from design review through to resolution on site.',
  },
  {
    title: 'Project Management',
    text: 'Programme, cost, risk and client reporting, led by people who understand how the work is actually built.',
  },
  {
    title: 'Construction',
    text: 'Site leadership for building, civil and industrial projects, with direct responsibility for safety and quality.',
  },
  {
    title: 'Architecture',
    text: 'Design management with external architects. We do not replace the architect. We make the design buildable.',
  },
  {
    title: 'Operations',
    text: 'Commercial management, planning and procurement, and the reporting that keeps a project intelligible.',
  },
];

export const reasons = [
  {
    title: 'Clear accountability',
    text: 'You know which project you are on, who you report to, and what finished means. People are not moved through a job so that a chart looks busy.',
  },
  {
    title: 'Work that is technically serious',
    text: 'Commercial buildings with difficult neighbours, civil engineering in live streets, and factories that stay in production. The problems are real, and so is the authority to deal with them.',
  },
  {
    title: 'A safety standard that is enforced',
    text: 'Briefings, supervision and the right to stop work are part of the job. They are not a poster in the cabin.',
  },
  {
    title: 'Room to take responsibility',
    text: 'Engineers become package leads. Site managers become construction managers. Progression follows work you have actually delivered.',
  },
];
