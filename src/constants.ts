export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  SERVICES: '/services',
  SKILLS: '/skills',
  CONTACT: '/contact',
};

export const CONTACT_INFO = {
  WHATSAPP: 'https://wa.me/9665633056163',
  EMAIL: 'Abdulazizkanan@hotmail.com',
  LOCATION: 'Jeddah, Saudi Arabia',
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
    id: 'al-balad-restoration',
    title: 'Heritage Area Restoration Project Al-Balad',
    type: 'Restoration',
    problem: 'Restoring historical buildings while preserving heritage aesthetic.',
    solution: 'Technical office supervision, shop drawings, and structural safety verification using ETABS and SAP2000.',
    tools: ['ETABS', 'SAP2000', 'AutoCAD'],
    result: 'Ongoing restoration serving tourism and general aesthetic goals.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800',
    details: 'This project involves the comprehensive structural restoration of over 300 historical buildings in the Al-Balad district of Jeddah. Our team is responsible for creating detailed shop drawings, performing structural safety checks, and designing temporary support systems like scaffolding and steel bracing to ensure the safety of these heritage structures during renovation.',
    location: 'Al-Balad, Jeddah, Saudi Arabia',
    date: 'Aug 2025 - Present',
    design: 'classic' as const,
    additionalImages: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'commercial-complex-retrofit',
    title: 'Commercial Complex Retrofit',
    type: 'Retrofitting',
    problem: 'Structural cracks discovered in primary beams due to overloading.',
    solution: 'Designed Carbon Fiber Reinforced Polymer (CFRP) strengthening system.',
    tools: ['SAP2000', 'Hilti Profis'],
    result: 'Restored structural integrity without increasing dead weight.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    details: 'A critical structural intervention for a major commercial complex. After discovering significant cracking in the primary support beams, we performed a full structural audit and designed a CFRP strengthening solution. This approach allowed for the restoration of the building\'s load-bearing capacity without the need for bulky traditional reinforcement methods.',
    location: 'Jeddah, Saudi Arabia',
    date: 'Jan 2024 - Jun 2024',
    design: 'modern' as const,
    additionalImages: [
      'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800'
    ]
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
    details: 'Designed a custom temporary structural system for a 40-story high-rise. Due to limited ground space and unstable soil conditions, traditional scaffolding was not feasible. We engineered a series of cantilevered steel platforms that provided a safe working environment for facade installation while minimizing the impact on the ground-level site operations.',
    location: 'Riyadh, Saudi Arabia',
    date: 'Mar 2023 - Dec 2023',
    design: 'gallery' as const,
    additionalImages: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800'
    ]
  },
];

export const SKILLS = {
  SOFTWARE: ['SAP2000', 'AutoCAD', 'ETABS', 'MS Office'],
  ENGINEERING: ['Structural Design', 'Site Engineering', 'Structural Analysis', 'Shop Drawings', 'Retrofitting'],
  SITE: ['Site Inspection', 'Crack Repair', 'Formwork Setup', 'Quality Control'],
};
