export interface Service {
  id: string;
  number: string;
  title: string;
  summary: string;
  description: string[];
  capabilities: string[];
  relatedSlug: string;
}

export const services: Service[] = [
  {
    id: 'commercial-construction',
    number: '01',
    title: 'Commercial Construction',
    summary:
      'Offices, retail and mixed-use buildings for developers and occupiers who need a predictable programme and a building that performs.',
    description: [
      'Vertex plans and builds offices, retail, hospitality and mixed-use commercial buildings. We are usually appointed as principal contractor, sometimes for shell and core, sometimes through to Category A, and we stay with the job until the floor plates are ready for the people who will occupy them.',
      'City sites are the normal condition, not an exception. We organise access, cranage, neighbours and the release of floors so the programme a client has agreed with a funder or a tenant is the programme we build to.',
    ],
    capabilities: [
      'New-build offices and commercial campuses',
      'Retail and hospitality structures',
      'Shell, core and Category A delivery',
      'City-centre logistics and crane planning',
      'Façade and structural frame coordination',
    ],
    relatedSlug: 'riverside-business-centre',
  },
  {
    id: 'civil-engineering',
    number: '02',
    title: 'Civil Engineering',
    summary:
      'Ground works, structures, highways interfaces and enabling packages on sites that are already in use.',
    description: [
      'Our civil teams deliver the work that makes a site buildable: earthworks, substructures, retaining walls, drainage, utilities and the highway interfaces around them. The work is often in streets and compounds that cannot simply be closed.',
      'We set the method around the constraint. If a road has to stay open, the programme is written from the traffic management, not from an ideal sequence the street will not allow.',
    ],
    capabilities: [
      'Earthworks, remediation and enabling works',
      'Foundations, basements and retaining structures',
      'Drainage and utilities diversions',
      'Highway interfaces and access roads',
      'Temporary works coordination',
    ],
    relatedSlug: 'northgate-infrastructure-corridor',
  },
  {
    id: 'infrastructure-development',
    number: '03',
    title: 'Infrastructure Development',
    summary:
      'Transport, utilities and civic infrastructure, delivered with public clients, operators and neighbours in mind.',
    description: [
      'Vertex delivers transport, utilities and civic infrastructure for public clients, and for private clients whose projects depend on a public asset. We are used to working with operators, local authorities and the people who have to keep using a place while it is rebuilt.',
      'The standard is the same as on our buildings: a named lead, a programme that shows the interfaces, and a handover that an operator can actually take.',
    ],
    capabilities: [
      'Corridor, junction and access improvements',
      'Bridges, culverts and structures',
      'Utility diversions and network upgrades',
      'Public realm and civic streets',
      'Traffic and stakeholder management',
    ],
    relatedSlug: 'severn-approach-improvements',
  },
  {
    id: 'industrial-construction',
    number: '04',
    title: 'Industrial Construction',
    summary:
      'Manufacturing and logistics buildings where the client’s operation has to continue while the new facility is built.',
    description: [
      'Manufacturing and logistics clients judge a contractor on whether the operation survived the project. We build warehouses, cross-dock buildings, production halls and the yards and power supplies that make them usable.',
      'Where the existing plant stays live, vibration, access and shutdown windows are agreed at the start. They are not discovered when the piling rig arrives.',
    ],
    capabilities: [
      'Logistics buildings and cross-dock facilities',
      'Manufacturing and assembly halls',
      'Large-span steel and high-tolerance slabs',
      'Yards, gatehouses and external works',
      'Phased delivery beside live operations',
    ],
    relatedSlug: 'westbridge-industrial-park',
  },
  {
    id: 'project-management',
    number: '05',
    title: 'Project Management',
    summary:
      'A single point of control for programme, cost, risk and design, led by people who understand how the work is built.',
    description: [
      'Some clients want Vertex to build. Others want us to lead. Our project managers run programme, cost, risk and design coordination, and they are backed by people who still work on site, so the advice does not get separated from the way the job will be built.',
      'We are appointed as the client’s project manager, or alongside our own construction team, where one point of accountability is the point of the appointment.',
    ],
    capabilities: [
      'Programme and milestone control',
      'Cost planning, change and reporting',
      'Design coordination and approvals',
      'Procurement strategy',
      'Risk management and handover planning',
    ],
    relatedSlug: 'harbour-view-development',
  },
  {
    id: 'renovation-restoration',
    number: '06',
    title: 'Renovation & Restoration',
    summary:
      'Occupied refurbishment, structural alteration and careful renewal of existing buildings, including heritage fabric.',
    description: [
      'Existing buildings carry the constraints that new sites do not: people who stay in occupation, frames that are out of tolerance, fabric that has to be kept, and structures that were never designed to take another two floors.',
      'We refurbish occupied buildings, alter and extend frames, retain façades and repair heritage fabric. On this work the sequence is usually the design, and we write the programme that way from the start.',
    ],
    capabilities: [
      'Occupied and phased refurbishment',
      'Structural alteration and extension',
      'Façade retention',
      'Heritage and conservation works',
      'Decarbonising existing buildings',
    ],
    relatedSlug: 'canary-exchange',
  },
];

export function getService(id: string) {
  return services.find((service) => service.id === id);
}
