import {
  Award,
  Trophy,
  Users,
  Terminal,
  Clock,
  Layers,
  Code2,
  Binary,
} from 'lucide-react';

const achievements = [
  {
    title: 'Data Structures and Algorithm',
    organization: 'iamneo — An NIIT Venture',
    year: 'Jul 2025',
    dateValue: 202507,
    type: 'Certification',
    credentialId: '21a64AJDaK4bL5dM78j1',
    skills: ['Data Structures', 'Algorithms', 'Problem Solving'],
    description:
      'Certified in core data structures and algorithmic design, including stacks, queues, linked lists, trees, graphs, sorting, searching, and time/space complexity optimization.',
    icon: Binary,
  },
  {
    title: 'Object Oriented Programming',
    organization: 'iamneo — An NIIT Venture',
    year: 'Jul 2025',
    dateValue: 202507,
    type: 'Certification',
    credentialId: '188h1G32a14D63dj7BK1',
    skills: ['OOP', 'Design Patterns', 'Software Architecture'],
    description:
      'Mastered essential OOP principles including abstraction, encapsulation, inheritance, polymorphism, interfaces, and modular software engineering practices.',
    icon: Layers,
  },
  {
    title: 'Programming in JAVA',
    organization: 'iamneo — An NIIT Venture',
    year: 'Jan 2026',
    dateValue: 202601,
    type: 'Certification',
    credentialId: '27bk5al45m8b25D738N1',
    skills: ['Java', 'Multithreading', 'Collections Framework'],
    description:
      'In-depth certification covering Java language fundamentals, JVM architecture, exception handling, object design, and robust backend programming.',
    icon: Code2,
  },
  {
    title: 'Programming Using C++',
    organization: 'Infosys',
    year: 'Apr 2025',
    dateValue: 202504,
    type: 'Certification',
    credentialId: 'Verified by Infosys Springboard',
    skills: ['C++', 'STL', 'Memory Management'],
    description:
      'Certified by Infosys in C++ syntax, Standard Template Library (STL), memory management, pointer arithmetic, and high-performance computational programming.',
    icon: Code2,
  },
  {
    title: 'Programming in C',
    organization: 'CSE Pathshala',
    year: 'Jan 2025',
    dateValue: 202501,
    type: 'Certification',
    credentialId: 'CP-202501-CP513',
    skills: ['C Language', 'Pointers', 'Data Structures in C'],
    description:
      'Built a rock-solid foundation in procedural C programming, dynamic memory allocation, pointers, file I/O, and low-level system problem solving.',
    icon: Terminal,
  },
  {
    title: 'Introduction to Linux',
    organization: 'Skillera',
    year: 'Nov 2024',
    dateValue: 202411,
    type: 'Certification',
    credentialId: 'CER/NIT/OCT/LCS/0010',
    skills: ['Linux', 'Linux Server', 'Bash Scripting'],
    description:
      'Accredited certification in Linux OS fundamentals, shell commands, file hierarchy, user permissions, package management, and basic server operations.',
    icon: Terminal,
  },
  {
    title: 'Master Union Time Management Certification',
    organization: 'MASTER UNION LTD.',
    year: 'Oct 2024',
    dateValue: 202410,
    type: 'Certification',
    credentialId: 'MU/OCT24/ETM/A260',
    skills: ['Time Management', 'Agile Productivity', 'Task Execution'],
    description:
      'Professional certification on executive time management, structured workflow optimization, prioritization frameworks, and disciplined productivity habits.',
    icon: Clock,
  },
  {
    title: 'InnovXus 18-Hour Hackathon Certificate of Participation',
    organization: 'InnovXus',
    year: 'Sep 2024',
    dateValue: 202409,
    type: 'Certification',
    credentialId: '20240709-38',
    skills: ['Hackathons', 'Rapid Prototyping', 'Teamwork'],
    description:
      'Earned Certificate of Participation for successfully collaborating and building functional prototype software in a rigorous 18-hour continuous hackathon.',
    icon: Award,
  },
  {
    title: 'Hackathon Runner-up',
    organization: 'IIT Ropar',
    year: 'Aug 2024',
    dateValue: 202408,
    type: 'Achievement',
    credentialId: 'IIT Ropar Hackathon Award',
    skills: ['Hackathons', 'AI Solutions', 'Competitive Engineering'],
    description:
      'Secured Runner-up position in a national-level hackathon hosted by IIT Ropar, competing against student teams and universities from across India.',
    icon: Trophy,
  },
  {
    title: 'Tech Workshop Organizer & Coordinator',
    organization: 'Burn Hall School, Kashmir',
    year: 'Sep 2023',
    dateValue: 202309,
    type: 'Achievement',
    credentialId: 'BHS Regional Workshop Leadership',
    skills: ['Leadership', 'Event Coordination', 'Community Outreach'],
    description:
      'Organized and coordinated a major regional technology workshop with active participation from over 20 schools across Kashmir, inspiring young programmers.',
    icon: Users,
  },
];

export default achievements;
