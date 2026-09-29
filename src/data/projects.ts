export type Sector = 'Commercial' | 'Infrastructure' | 'Industrial' | 'Residential';

export const projectFilters = ['All', 'Commercial', 'Infrastructure', 'Industrial', 'Residential'] as const;

export type ProjectFilter = (typeof projectFilters)[number];

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  category: string;
  filter: Sector;
  year: number;
  client: string;
  value: string;
  duration: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  hero: ProjectImage;
  gallery: ProjectImage[];
}

const tower: ProjectImage = {
  src: '/images/tower.jpg',
  alt: 'Glass office towers seen from street level',
};

const office: ProjectImage = {
  src: '/images/office.jpg',
  alt: 'Completed workplace with a glazed corridor and a staff kitchen',
};

const steel: ProjectImage = {
  src: '/images/steel.jpg',
  alt: 'Tower crane erecting a steel frame on a building under construction',
};

const structure: ProjectImage = {
  src: '/images/structure.jpg',
  alt: 'Operatives working from a scissor lift beside a reinforced concrete wall',
};

const concrete: ProjectImage = {
  src: '/images/concrete.jpg',
  alt: 'Crew tying reinforcement cages on a structure under construction',
};

const pump: ProjectImage = {
  src: '/images/pump.jpg',
  alt: 'Operative guiding a concrete pump on an active site',
};

const carpentry: ProjectImage = {
  src: '/images/carpentry.jpg',
  alt: 'Carpenters cutting formwork on a concrete floor slab',
};

const warehouse: ProjectImage = {
  src: '/images/warehouse.jpg',
  alt: 'High-bay warehouse interior with racking and stored goods',
};

const yard: ProjectImage = {
  src: '/images/factory.jpg',
  alt: 'Articulated lorries parked in a logistics yard',
};

const deck: ProjectImage = {
  src: '/images/hero.jpg',
  alt: 'Project team reviewing a reinforced concrete deck on a large construction site',
};

const process: ProjectImage = {
  src: '/images/process.jpg',
  alt: 'Process pipework and motors inside an industrial plant',
};

const turbine: ProjectImage = {
  src: '/images/turbine.jpg',
  alt: 'Engineer inspecting a large rotor inside a manufacturing hall',
};

const plant: ProjectImage = {
  src: '/images/plant.jpg',
  alt: 'Welder joining steel pipework',
};

const architecture: ProjectImage = {
  src: '/images/architecture.jpg',
  alt: 'Contemporary building with a glazed wall and metal-clad volumes',
};

const housing: ProjectImage = {
  src: '/images/housing.jpg',
  alt: 'Apartment façade with rows of projecting balconies',
};

const lobby: ProjectImage = {
  src: '/images/lobby.jpg',
  alt: 'Glazed office corridor with meeting rooms alongside',
};

const windows: ProjectImage = {
  src: '/images/windows.jpg',
  alt: 'Corner of a brick and metal-clad commercial building',
};

const apartments: ProjectImage = {
  src: '/images/apartments.jpg',
  alt: 'Brick and timber-clad apartment building with balconies',
};

const renovation: ProjectImage = {
  src: '/images/renovation.jpg',
  alt: 'Interior alteration with new openings cut into an existing structure',
};

const fixers: ProjectImage = {
  src: '/images/about.jpg',
  alt: 'Steel fixers working among reinforcement on a concrete slab',
};

export const projects: Project[] = [
  {
    slug: 'riverside-business-centre',
    title: 'Riverside Business Centre',
    location: 'London, UK',
    category: 'Commercial Construction',
    filter: 'Commercial',
    year: 2025,
    client: 'Meridian Estates',
    value: '£48 million',
    duration: '28 months',
    overview:
      'Riverside Business Centre is a seven-storey commercial building on a Thames-side plot in central London, with 18,400 square metres of workspace over an active ground floor. Vertex was principal contractor from possession to handover of the shell, core and base services, ready for the tenant’s fit-out team.',
    challenge:
      'The plot sits between a live rail viaduct and a tidal flood wall. There was one site gate, craneage was restricted over the railway, and the flood defence could not be loaded or undermined during the works.',
    solution:
      'Deliveries were booked to the hour and held at a consolidation point in east London, so the gate never queued onto the public road. The steel frame and unitised façade were sequenced to release floors away from the heaviest rail interface. A cantilevered materials deck kept plant off the flood wall, and monitoring was reported to the asset owner every week.',
    results: [
      'Practical completion two weeks ahead of the contract programme',
      'No RIDDOR-reportable injuries in 640,000 hours on site',
      'BREEAM Excellent design-stage target carried through to the handover evidence',
      'Three floors released early so the tenant could start fit-out',
    ],
    hero: tower,
    gallery: [office, steel, lobby],
  },
  {
    slug: 'northgate-infrastructure-corridor',
    title: 'Northgate Infrastructure Corridor',
    location: 'Manchester, UK',
    category: 'Civil Engineering',
    filter: 'Infrastructure',
    year: 2024,
    client: 'Northgate Partnership',
    value: '£36 million',
    duration: '22 months',
    overview:
      'A 2.4 kilometre urban corridor from Northgate to Manchester’s inner ring road. The works rebuilt the carriageway, replaced drainage, diverted utilities and added a pedestrian bridge, while bus routes stayed in service.',
    challenge:
      'Bus priority could not be suspended except in overnight windows, and a Victorian sewer crossed the alignment twice. The records did not match what was in the ground.',
    solution:
      'The road was rebuilt in four sections under a traffic management plan agreed with the highway authority and the bus operator. The sewer was surveyed and lined before excavation. The bridge was fabricated off site and lifted during a single weekend possession. Residents received a short written update every Friday from the site team.',
    results: [
      'Bus services maintained for the full construction period',
      'Bridge installed inside a 36-hour possession',
      'Three historic flooding points removed from the carriageway',
      'Civils handed over with no outstanding defect notices',
    ],
    hero: structure,
    gallery: [concrete, pump, carpentry],
  },
  {
    slug: 'westbridge-industrial-park',
    title: 'Westbridge Industrial Park',
    location: 'Birmingham, UK',
    category: 'Industrial Construction',
    filter: 'Industrial',
    year: 2024,
    client: 'Westbridge Logistics',
    value: '£62 million',
    duration: '24 months',
    overview:
      'Three cross-dock buildings totalling 92,000 square metres on a former manufacturing site, with trailer yards, a gatehouse and a new high-voltage supply.',
    challenge:
      'Parts of the site were contaminated, groundwater was high, and the tenant’s racking layout was still moving when the first floor slab was due to be poured.',
    solution:
      'Remediation was zoned so the first building could proceed while investigation continued elsewhere. The slab design included a late-change strip at the docks, which allowed door positions to move without breaking steel that had already been ordered. The power upgrade was let early, because the lead time, not the building, was the risk.',
    results: [
      'First building handed over four months before the last',
      'Contaminated soils handled under an agreed materials management plan',
      'Power available at the gatehouse six weeks before tenant occupation',
      'HGV access kept off the public highway at shift change',
    ],
    hero: warehouse,
    gallery: [yard, deck, pump],
  },
  {
    slug: 'harbour-view-development',
    title: 'Harbour View Development',
    location: 'Liverpool, UK',
    category: 'Mixed-Use Development',
    filter: 'Commercial',
    year: 2023,
    client: 'Harbour View Developments',
    value: '£74 million',
    duration: '32 months',
    overview:
      'A waterfront scheme of 140 homes, 4,200 square metres of commercial space and a repaired public quay. Vertex delivered the structure, envelope and external works, and coordinated the residential and commercial packages where they met.',
    challenge:
      'A listed dock wall had to stay. Archaeology was expected in the excavation. The residential and commercial fire and acoustic strategies were different, and they shared a podium.',
    solution:
      'A new piled frame was set behind the dock wall, which was repaired in sections from a temporary deck. An archaeological watching brief was written into the excavation sequence rather than treated as a stoppage. Risers for the two uses were separated at the podium so the homes could be commissioned while the commercial shell was still closing.',
    results: [
      'Dock wall retained and repaired in full',
      'Archaeological recording completed inside the original programme',
      'Residents moved in while the commercial unit was being finished',
      'Quay reopened to the public on the agreed summer date',
    ],
    hero: architecture,
    gallery: [housing, windows, lobby],
  },
  {
    slug: 'canary-exchange',
    title: 'Canary Exchange',
    location: 'London, UK',
    category: 'Commercial Construction',
    filter: 'Commercial',
    year: 2023,
    client: 'Aldgate & Co',
    value: '£29 million',
    duration: '18 months',
    overview:
      'Refurbishment and a two-storey extension of a late-1980s office building on the fringe of Canary Wharf. Vertex replaced the façade, reconfigured the core and replaced the main building services while keeping the primary frame.',
    challenge:
      'The existing frame was out of tolerance, the neighbouring building shared a party wall, and the new storeys had to land on columns that were never designed for them.',
    solution:
      'A full structural survey was completed before strip-out, so the strengthening was designed against the frame that was actually there. Strengthening steel went in floor by floor, ahead of the façade replacement. Neighbour monitoring and the agreed working hours were part of the weekly client report.',
    results: [
      'Two new floors delivered on the existing frame',
      'Façade replaced without a full scaffold on the party-wall elevation',
      'Building services replaced without a winter shutdown of the temporary heaters',
      'Building handed to the letting team with Category A complete',
    ],
    hero: windows,
    gallery: [renovation, office, steel],
  },
  {
    slug: 'severn-approach-improvements',
    title: 'Severn Approach Improvements',
    location: 'Bristol, UK',
    category: 'Infrastructure Development',
    filter: 'Infrastructure',
    year: 2022,
    client: 'West of England Authority',
    value: '£21 million',
    duration: '16 months',
    overview:
      'Junction and approach works serving the industrial estates north of the Severn, including a new signalised junction, a bus gate and drainage attenuation before discharge to an existing watercourse.',
    challenge:
      'The junction had to be built under live traffic, including abnormal loads from the estates. The outfall levels left little room for the attenuation volume required by the planning condition.',
    solution:
      'The junction was built in halves, with temporary signals and a published route for abnormal loads that changed only after the next phase had been checked. Attenuation was split into two basins so one could take water while the second was excavated. The bus gate was commissioned with the operator present.',
    results: [
      'Abnormal loads maintained throughout the works',
      'Planning condition on discharge signed off at sectional completion',
      'Bus gate in service on the day the junction opened',
      'Carriageway surface completed in the first summer window',
    ],
    hero: pump,
    gallery: [concrete, structure, fixers],
  },
  {
    slug: 'solihull-manufacturing-centre',
    title: 'Solihull Manufacturing Centre',
    location: 'Solihull, UK',
    category: 'Industrial Construction',
    filter: 'Industrial',
    year: 2023,
    client: 'Hartwell Precision',
    value: '£41 million',
    duration: '20 months',
    overview:
      'A precision manufacturing building beside an existing factory: clean assembly halls, a staff amenity block and an external test yard. The factory stayed in production for the whole of the contract.',
    challenge:
      'Vibration from piling could affect machines on the other side of the boundary. The new hall needed a floor flatter than a standard warehouse slab, and the only access crossed the client’s staff car park.',
    solution:
      'The piling method changed within 20 metres of the live factory, and vibration was monitored against limits agreed with the production manager. The slab was poured in lanes, and levels were checked before the next lane was released. A separate construction gate was built in the first month so staff parking could be handed back.',
    results: [
      'No production stoppage attributed to the construction works',
      'Slab tolerance achieved without a remedial grind',
      'Staff parking returned before the hall superstructure started',
      'Test yard finished in time for the client’s equipment install',
    ],
    hero: process,
    gallery: [turbine, plant, warehouse],
  },
  {
    slug: 'elm-court-residences',
    title: 'Elm Court Residences',
    location: 'Reading, UK',
    category: 'Residential',
    filter: 'Residential',
    year: 2025,
    client: 'Elm Court Living',
    value: '£33 million',
    duration: '26 months',
    overview:
      'Eighty-six apartments and maisonettes around a landscaped court, with a residents’ workspace on the ground floor and undercroft parking. Vertex was principal contractor from substructure to handover of the homes.',
    challenge:
      'The site was tight against two streets of Victorian houses. The planning consent limited working hours, and the undercroft had to carry a transfer structure for the court above.',
    solution:
      'Deliveries were kept to mid-morning, after the school run and before the evening restriction, and the tower crane was specified with a slew limit over the neighbours. The transfer structure was checked before the frame above it was released, so the court levels were fixed in time for the landscape contractor. The first homes to be handed over were on the street that had lived with the site the longest.',
    results: [
      'Homes handed over in two phases, with the first occupations on programme',
      'No breach of the consented working hours',
      'Transfer structure signed off before the landscape install',
      'Snagging closed within the period set in the building contract',
    ],
    hero: apartments,
    gallery: [housing, lobby, windows],
  },
  {
    slug: 'greenwich-wharf-apartments',
    title: 'Greenwich Wharf Apartments',
    location: 'London, UK',
    category: 'Residential',
    filter: 'Residential',
    year: 2022,
    client: 'Wharf Residential',
    value: '£27 million',
    duration: '22 months',
    overview:
      'Sixty-four riverside homes on the site of a redundant warehouse. Vertex reused the existing river piles, built a new frame behind the retained river edge, and delivered the homes as a mix of affordable and private sale.',
    challenge:
      'The existing piles were decades old, the river wall needed repair from the land side, and the two tenures had different specifications and handover requirements inside one building.',
    solution:
      'Every pile in the reused grid was tested before the frame design was frozen. Where a pile failed, a replacement was installed in a pre-agreed spare position so fabrication did not stop for a redesign. The two tenures were separated by core, with independent risers, so the affordable homes could be handed over while private-sale finishing continued.',
    results: [
      'The majority of the river piles reused after testing',
      'River wall repair completed from the land side',
      'Affordable homes handed over as a single phase',
      'Private-sale apartments completed without reopening those cores',
    ],
    hero: concrete,
    gallery: [renovation, housing, apartments],
  },
  {
    slug: 'leeds-civic-spine',
    title: 'Leeds Civic Spine',
    location: 'Leeds, UK',
    category: 'Infrastructure Development',
    filter: 'Infrastructure',
    year: 2021,
    client: 'Leeds City Council',
    value: '£18 million',
    duration: '14 months',
    overview:
      'A civic street from the station edge to the municipal buildings: new stone paving, lighting, rain gardens and a reworked bus interchange. Vertex was principal contractor for the public realm and the highway interfaces.',
    challenge:
      'The street stayed open to pedestrians throughout. Buses had to use temporary stops that changed three times, and the stone had a long lead time from a British quarry.',
    solution:
      'The quarry order was placed immediately after contract, against a tolerance the designer had already accepted. Work moved in short fronts so that no more than one block of the street was closed. Temporary bus stops were built as proper stops, with shelters and information. The rain gardens were planted in the season they were designed for, which meant the civils had to be ready first.',
    results: [
      'Pedestrian route maintained for the full contract',
      'Bus interchange reopened before the Christmas trading period',
      'Stone delivered in setting-out sequence, with no idle work fronts',
      'Rain gardens established without a replanting claim',
    ],
    hero: carpentry,
    gallery: [structure, architecture, windows],
  },
];

const featuredOrder = [
  'riverside-business-centre',
  'northgate-infrastructure-corridor',
  'westbridge-industrial-park',
  'harbour-view-development',
];

export const featuredProjects = featuredOrder.map((slug) => {
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    throw new Error(`Missing featured project: ${slug}`);
  }
  return project;
});

export function getProject(slug: string | undefined) {
  return projects.find((project) => project.slug === slug);
}

export function filterProjects(filter: ProjectFilter) {
  if (filter === 'All') return projects;
  return projects.filter((project) => project.filter === filter);
}

export function formatPlace(location: string) {
  return location.replace(/,\s+/g, ' / ');
}

export function projectIndex(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return '';
  return String(index + 1).padStart(2, '0');
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return undefined;
  return projects[(index + 1) % projects.length];
}

export const homeProjects = featuredProjects.slice(0, 3);
