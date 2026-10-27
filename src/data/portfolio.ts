/**
 * Central portfolio data — customized for Sakshi S. Padiyar.
 * Reflects verified work, GitHub repos, and expertise across frontend, backend, Power BI, and languages.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Sakshi S. Padiyar',
  displayName: 'Sakshi S. Padiyar',
  firstName: 'SAKSHI',
  seriesTag: 'THE SERIES // HELA EDITION',
  originalLabel: 'A SAKSHI ORIGINAL',
  role: 'Full-Stack Developer • AI & Systems Engineer',
  tagline: ['Website Architect', 'Frontend & Backend', 'Power BI & Analytics', 'Hardware & Firmware'],
  intro:
    'A passionate developer who loves creating modern websites, scalable backend architectures, and data dashboards with Power BI. Building across Python, C, React, Node.js, SQL, and MongoDB — from gamified web platforms to offline hardware security vaults.',
  location: 'Puttur, Karnataka, India',
  email: 'sakshipadiyar06@gmail.com',
  phone: '+91 9740301564',
  links: {
    linkedin: 'https://linkedin.com/in/sakshi-s-padiyar-123472288',
    github: 'https://github.com/sakshipadiyar06-debug',
  },
  resumePdf: '/assets/Sakshi_Padiyar_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Sakshi S. Padiyar',
  },
  interests: ['Website Creation', 'Backend Engineering', 'Power BI Dashboards', 'Hardware Security & IoT', 'Artificial Intelligence'],
};

export const education = [
  {
    school: 'Vivekananda College of Engineering and Technology',
    place: 'Puttur, Karnataka',
    degree: 'Artificial Intelligence & Machine Learning Engineering',
    period: '2023 – Present',
    score: 'CGPA 9.14',
  },
];

export const experience = [
  {
    company: 'Digicomp Technologies',
    role: 'Engineering Intern',
    place: 'Puttur, Karnataka',
    period: '2025 – Present',
    points: [
      'Creating responsive and modern websites and software solutions with clean frontend UI and robust backend communication.',
      'Developing and flashing microcontroller firmware for the ESP32-S3, optimizing memory and hardware protocols.',
      'Prototyping custom embedded circuit designs, touch LCD interfaces, and peripheral Bluetooth/USB connectivity.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'digicure',
    title: 'DIGICURE',
    year: '2026',
    genre: 'Hardware Security • ESP32-S3 • USB & Bluetooth',
    logline: 'Offline password vault made from a Digicomp ESP32-S3 Dev Board and touch LCD. Stores passwords on-device and types them over USB or Bluetooth.',
    stack: ['ESP32-S3', 'C/C++', 'Touch LCD', 'Bluetooth', 'USB HID', 'Hardware Security'],
    build: [
      'Engineered an offline hardware password vault built with an ESP32-S3 Dev Board and touch LCD module, eliminating internet attack surfaces.',
      'Programmed automatic password typing capabilities over USB and Bluetooth directly to target devices with hardware-level security.',
    ],
    features: [
      'Stores passwords completely on-device with zero cloud exposure',
      'Types credentials automatically over USB or Bluetooth',
      'Interactive Touch LCD module interface',
      'Digicomp ESP32-S3 firmware optimization',
    ],
    metrics: [
      { value: 'ESP32-S3', label: 'SoC Dev Board' },
      { value: 'USB & BT', label: 'auto credential typing' },
      { value: 'Touch LCD', label: 'display interface' },
      { value: '100%', label: 'offline isolation' },
    ],
    github: 'https://github.com/sakshipadiyar06-debug/digicure',
    palette: { from: '#022415', via: '#06633b', to: '#040d08', accent: '#00ff87' },
    motif: 'shield',
  },
  {
    id: 'codlingo',
    title: 'CODLINGO',
    year: '2026',
    genre: 'Full-Stack Web • EdTech • Gamified Platform',
    logline: 'Gamified coding education app: learn C, Python, Java, SQL, DSA and more through flashcards, quizzes, daily streaks, XP, gems, and hearts.',
    stack: ['JavaScript', 'React', 'Node.js', 'Gamification', 'CSS3', 'Active Recall'],
    build: [
      'Designed and created a full-stack gamified coding education web application for mastering programming languages rapidly.',
      'Implemented game mechanics including daily streaks, XP progression, hearts life counter, gem rewards, and spaced-repetition drills.',
    ],
    features: [
      'Learn C, Python, Java, SQL, DSA and more',
      'Interactive flashcards, speed drills & code quizzes',
      'Daily streaks, XP rewards, gems & hearts mechanics',
      'Responsive, modern frontend & backend architecture',
    ],
    metrics: [
      { value: '5+', label: 'programming language tracks' },
      { value: 'XP & Gems', label: 'progression engine' },
      { value: 'Streaks', label: 'daily engagement driver' },
      { value: 'Web', label: 'full-stack responsive app' },
    ],
    github: 'https://github.com/sakshipadiyar06-debug/codlingo',
    palette: { from: '#021810', via: '#0d5a45', to: '#050a08', accent: '#46e3a8' },
    motif: 'flow',
  },
  {
    id: 'course-recommendation',
    title: 'Course Recommendation Engine',
    year: '2026',
    genre: 'AI Web Platform • Data Analytics • Power BI',
    logline: 'Intelligent recommendation system predicting optimal learning pathways using data analytics, user preference modeling, and Power BI dashboards.',
    stack: ['Python', 'Power BI', 'HTML5', 'CSS3', 'Machine Learning', 'Data Analytics'],
    build: [
      'Built an intelligent course recommendation platform mapping user profiles, skills, and goals to specialized technical curricula.',
      'Integrated rich Power BI analytics dashboards and predictive logic for visual insight discovery.',
    ],
    features: [
      'Predictive course & curriculum matching',
      'Power BI data analytics and visual KPI reports',
      'Clean, accessible responsive web interface',
      'Data-driven preference scoring',
    ],
    metrics: [
      { value: 'Power BI', label: 'visual analytics dashboards' },
      { value: 'AI / ML', label: 'predictive course ranking' },
      { value: '100%', label: 'custom web deployment' },
      { value: 'Python', label: 'data analytics engine' },
    ],
    github: 'https://github.com/sakshipadiyar06-debug/course_recommendation',
    palette: { from: '#051d14', via: '#0b5238', to: '#030806', accent: '#10e885' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'cgpa-excellence',
    title: '9.14 CGPA',
    org: 'Vivekananda College of Engineering & Tech',
    detail: 'Top academic record in Artificial Intelligence & Machine Learning engineering.',
    laurel: 'Academic Distinction',
  },
  {
    id: 'fullstack-creator',
    title: 'Website & App Creator',
    org: 'Web & Systems Development',
    detail: 'Passionate about crafting dynamic websites from frontend UI to backend microservices.',
    laurel: 'Web Architecture',
  },
  {
    id: 'powerbi-analytics',
    title: 'Power BI & Data Modeling',
    org: 'Business Intelligence & Data',
    detail: 'Skilled in Power BI reporting, interactive data storytelling, SQL, and MongoDB NoSQL.',
    laurel: 'Data Analytics',
  },
  {
    id: 'infosys-certified',
    title: 'Infosys Springboard Certified',
    org: 'Infosys',
    detail: 'Accredited in Generative AI Data Engineering, Prompt Engineering, MongoDB, and SQL.',
    laurel: '10+ Certifications',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Infosys', name: 'Introduction to Data Engineering using Generative AI' },
  { issuer: 'Infosys', name: 'Introduction to Artificial Intelligence' },
  { issuer: 'Infosys', name: 'Prompt Engineering' },
  { issuer: 'Infosys', name: 'NoSQL Course Training - MongoDB Developer' },
  { issuer: 'Infosys', name: 'Online MongoDB Training Course' },
  { issuer: 'Infosys', name: 'SQL Case Study - SQL Workshop' },
  { issuer: 'Infosys', name: 'Git & GitHub - The Practical Guide' },
  { issuer: 'Infosys', name: 'Git & GitHub: Working with Git Repositories' },
  { issuer: 'Infosys', name: 'Working with GitHub' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'web-creation',
    title: 'Websites & Frontend',
    subtitle: 'Creating captivating interfaces',
    skills: [
      { name: 'React', mono: 'Re', note: 'Component UI' },
      { name: 'HTML5', mono: 'H5', note: 'Semantic' },
      { name: 'CSS3', mono: 'Cs', note: 'Modern Styles' },
      { name: 'Tailwind CSS', mono: 'Tw', note: 'Responsive' },
      { name: 'JavaScript', mono: 'Js', note: 'ES6+' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Robust server architecture',
    skills: [
      { name: 'Node.js', mono: 'Nd', note: 'Server Runtime' },
      { name: 'REST APIs', mono: 'Api', note: 'Endpoints' },
      { name: 'Firmware', mono: 'Fw', note: 'C/C++' },
      { name: 'USB & Bluetooth', mono: 'Bt', note: 'Hardware HID' },
    ],
  },
  {
    id: 'analytics-databases',
    title: 'Power BI & Databases',
    subtitle: 'Data visualization & schemas',
    skills: [
      { name: 'Power BI', mono: 'Bi', note: 'Dashboards' },
      { name: 'SQL', mono: 'Sq', note: 'Relational' },
      { name: 'NoSQL (MongoDB)', mono: 'Mg', note: 'Certified Dev' },
      { name: 'Data Engineering', mono: 'De', note: 'GenAI' },
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core polyglot arsenal',
    skills: [
      { name: 'Python', mono: 'Py', note: 'AI & Data' },
      { name: 'C', mono: 'C', note: 'Embedded Systems' },
      { name: 'JavaScript', mono: 'Js', note: 'Full-Stack' },
      { name: 'SQL', mono: 'Sq', note: 'Database Queries' },
    ],
  },
  {
    id: 'hardware-iot',
    title: 'Hardware & IoT',
    subtitle: 'Physical computing & security',
    skills: [
      { name: 'ESP32-S3', mono: 'Es', note: 'Dev Board' },
      { name: 'Touch LCD', mono: 'Lcd', note: 'Display Module' },
      { name: 'Circuit Design', mono: 'Cd' },
      { name: 'AWS Cloud', mono: 'Aw' },
    ],
  },
  {
    id: 'collaboration',
    title: 'Tooling & Collaboration',
    subtitle: 'Production workflows',
    skills: [
      { name: 'Git & GitHub', mono: 'Gt', note: 'Certified' },
      { name: 'Prompt Engineering', mono: 'Pe', note: 'LLM Systems' },
      { name: 'Problem Solving', mono: 'Ps' },
      { name: 'Communication', mono: 'Cm' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'Power BI': ['Course Recommendation Engine', 'Visual Analytics Dashboards'],
  React: ['CODLINGO Gamified App', 'Digicomp Technologies Websites'],
  'Node.js': ['CODLINGO Backend', 'Full-Stack Systems'],
  Python: ['Course Recommendation Engine', 'GenAI Data Pipelines', 'Fenriss'],
  C: ['DIGICURE ESP32-S3 Firmware', 'Hardware Vault'],
  SQL: ['SQL Workshop & Case Studies Certification', 'CODLINGO Database Track'],
  'NoSQL (MongoDB)': ['MongoDB Certified Associate Developer', 'Infosys Certification'],
  'ESP32-S3': ['DIGICURE Offline Password Vault', 'Digicomp Dev Board'],
  'Git & GitHub': ['Git & GitHub - The Practical Guide', 'GitHub: sakshipadiyar06-debug'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const emerald: Palette = { from: '#022415', via: '#06633b', to: '#040d08', accent: '#00ff87' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Love for Creating',
    period: 'The Spark',
    synopsis: 'Discovering the joy of writing code, designing web layouts, and building interactive software.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Building for the Web',
        description: 'Falling in love with web development — crafting frontend interfaces with HTML5, CSS3, Tailwind, and React.',
        tags: ['Web Development', 'Frontend', 'React', 'Tailwind'],
        runtime: 'Continuous',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Mastering Full-Stack & Power BI',
    period: '2024 – Present',
    synopsis: 'Expanding from web interfaces to backend servers, Power BI analytics, and machine learning models.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'CODLINGO & Gamification',
        description: 'Building CODLINGO — a gamified coding platform for learning C, Python, Java, SQL, and DSA with streaks and gems.',
        tags: ['React', 'Node.js', 'CODLINGO', 'Gamification'],
        runtime: 'Active Repo',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'DIGICURE: Hardware Security',
        description: 'Engineering an offline password vault with Digicomp ESP32-S3 and Touch LCD that types credentials over USB/Bluetooth.',
        tags: ['ESP32-S3', 'Touch LCD', 'Bluetooth', 'Firmware'],
        runtime: 'Active Repo',
        palette: emerald,
      },
      {
        code: 'S02 E03',
        title: 'Power BI & Intelligence',
        description: 'Creating interactive data dashboards with Power BI, MongoDB developer certifications, and GenAI data engineering.',
        tags: ['Power BI', 'SQL', 'MongoDB', 'GenAI'],
        runtime: 'Analytics',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'The Industry Expedition',
    period: '2025 – Present',
    synopsis: 'Engineering at Digicomp Technologies, Puttur — Websites, Firmware, and Hardware designs.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Client Web & Firmware Solutions',
        description: 'Developing responsive web platforms, microcontroller firmware, and modular circuit integrations.',
        tags: ['Digicomp Technologies', 'Websites', 'Firmware', 'Hardware'],
        runtime: 'Present',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Website Passion', title: 'Full-Stack Web', detail: 'Love creating frontend & backend experiences', palette: emerald },
  { label: 'Data & Dashboards', title: 'Power BI', detail: 'Visual analytics, reports & data storytelling', palette: jade },
  { label: 'Gamified Platform', title: 'CODLINGO', detail: 'Learn C, Python, Java, SQL, DSA with XP & streaks', palette: ocean },
  { label: 'Hardware Relic', title: 'DIGICURE', detail: 'ESP32-S3 offline vault with USB/BT auto-typing', palette: emerald },
  { label: 'Academic Standing', title: '9.14 CGPA', detail: 'Top-tier engineering academic distinction', palette: amber },
  { label: 'Database Credential', title: 'MongoDB Developer', detail: 'Infosys Springboard Certified Associate', palette: jade },
  { label: 'Languages', title: 'Python · C · JS', detail: 'Polyglot web development & firmware programming', palette: violet },
  { label: 'Relational Power', title: 'SQL Workshop', detail: 'Advanced queries, data modeling & schemas', palette: ocean },
  { label: 'GitHub Ecosystem', title: 'Active Repos', detail: 'Explore code at github.com/sakshipadiyar06-debug', palette: emerald },
  { label: 'Connect', title: 'LinkedIn & Email', detail: 'Reach out for collaborations & opportunities', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'The Craft',
    title: 'Love Creating Websites.',
    lines: ['Frontend, Backend, and responsive modern web experiences', 'React, Node.js, Tailwind CSS, JavaScript'],
    chips: ['React', 'Node.js', 'HTML5', 'CSS3', 'Tailwind'],
  },
  {
    kicker: 'Data & Analytics',
    title: 'Power BI & Intelligence.',
    lines: ['Power BI Dashboards, SQL queries, and MongoDB NoSQL schemas', 'GenAI Data Engineering and predictive analytics'],
    chips: ['Power BI', 'SQL', 'MongoDB', 'Python'],
  },
  {
    kicker: 'GitHub Relics',
    title: 'CODLINGO & DIGICURE.',
    lines: ['CODLINGO — Gamified coding app with daily streaks, XP & quizzes', 'DIGICURE — ESP32-S3 touch LCD vault with USB & Bluetooth typing'],
    chips: ['CODLINGO', 'DIGICURE', 'ESP32-S3'],
  },
  {
    kicker: 'Experience',
    title: 'Digicomp Technologies.',
    lines: ['Websites & Software · Firmware · Hardware designs', 'Puttur, Karnataka, India'],
  },
];

export type ProfileId = 'sakshi' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sakshi',
    name: 'Sakshi',
    blurb: 'The full series, in order',
    color: '#00ff87',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Websites, Power BI & Resume first',
    color: '#46e3a8',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'CODLINGO, DIGICURE & GitHub first',
    color: '#00ff87',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Tech Lead',
    blurb: 'Full-stack architecture & hardware',
    color: '#10e885',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Web Developer & Data Enthusiast', palette: emerald },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Relics', card: 'My Projects', meta: `${projects.length} Originals • Verified Repos`, palette: emerald },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Web, Power BI & Code highlights', palette: jade },
  skills: { nav: 'Armory', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: emerald },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
