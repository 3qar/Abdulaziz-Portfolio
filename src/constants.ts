export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  SERVICES: '/services',
  SKILLS: '/skills',
  CONTACT: '/contact',
};

export const CONTACT_INFO = {
  WHATSAPP: 'https://wa.me/966500000000', // Placeholder
  EMAIL: 'engineer@example.com',
  LOCATION: 'Riyadh, Saudi Arabia',
};

export const SERVICES = [
  {
    id: 'structural-design',
    title: 'Structural Design',
    description: 'Comprehensive structural analysis and design for residential and commercial buildings using ETABS and SAFE.',
    icon: 'Building2',
  },
  {
    id: 'shop-drawings',
    title: 'Shop Drawings',
    description: 'Detailed reinforcement and structural shop drawings ensuring precision in execution and code compliance.',
    icon: 'FileText',
  },
  {
    id: 'load-calculations',
    title: 'Load Calculations',
    description: 'Accurate gravity and lateral load calculations (Wind & Seismic) following international and local codes.',
    icon: 'Calculator',
  },
  {
    id: 'retrofitting',
    title: 'Retrofitting & Strengthening',
    description: 'Engineering solutions for existing structures to enhance load capacity or repair structural defects.',
    icon: 'ShieldCheck',
  },
  {
    id: 'scaffolding',
    title: 'Scaffolding Design',
    description: 'Safe and optimized scaffolding and formwork design for complex construction sites.',
    icon: 'Construction',
  },
  {
    id: 'site-support',
    title: 'Site Engineering Support',
    description: 'Technical supervision and problem-solving on-site to ensure design intent is met during construction.',
    icon: 'HardHat',
  },
];

export const PROJECTS = [
  {
    id: 'luxury-villa-structural-design',
    title: 'Luxury Villa Structural Design',
    type: 'Residential',
    problem: 'Complex architectural spans with minimal column interference.',
    solution: 'Implemented a post-tensioned slab system to achieve 12m clear spans.',
    tools: ['ETABS', 'SAFE', 'AutoCAD'],
    result: '15% reduction in concrete volume and 100% architectural compliance.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'commercial-complex-retrofit',
    title: 'Commercial Complex Retrofit',
    type: 'Retrofitting',
    problem: 'Structural cracks discovered in primary beams due to overloading.',
    solution: 'Designed Carbon Fiber Reinforced Polymer (CFRP) strengthening system.',
    tools: ['SAP2000', 'Hilti Profis'],
    result: 'Restored structural integrity without increasing dead weight or footprint.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'high-rise-scaffolding-system',
    title: 'High-Rise Scaffolding System',
    type: 'Site Engineering',
    problem: 'Unstable ground conditions for heavy-duty scaffolding support.',
    solution: 'Engineered a cantilevered steel platform system anchored to the core wall.',
    tools: ['AutoCAD', 'Structural Analysis'],
    result: 'Zero safety incidents and 20% faster facade installation.',
    image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800',
  },
];

export const SKILLS = {
  SOFTWARE: ['ETABS', 'SAFE', 'AutoCAD', 'SAP2000', 'Revit', 'Prokon'],
  ENGINEERING: ['Load Calculations', 'Structural Analysis', 'Concrete Design', 'Steel Design', 'Foundation Design'],
  SITE: ['Execution Supervision', 'Inspection', 'Problem-solving', 'Quality Control'],
};
