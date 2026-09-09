const projects = [
  {
    id: 'smart-classroom-ai',
    title: 'Smart Classroom AI Dashboard',
    shortDescription:
      'Real-time AI-powered classroom monitoring system using computer vision to detect student occupancy and dynamically control electrical appliances.',
    fullDescription:
      'Developed a real-time AI-powered classroom monitoring system using computer vision to detect student occupancy, analyze classroom zones, and dynamically control fans and lights based on the number of students, reducing unnecessary energy consumption. Designed with a real-time web telemetry dashboard to display live occupancy metrics, zone density, and energy savings.',
    problem:
      'Educational institutions waste massive amounts of electricity when classroom fans and lights remain turned on in empty or partially occupied zones.',
    solution:
      'Engineered an automated YOLOv8 and OpenCV pipeline connected via WebSockets that identifies human presence by room zones and autonomously triggers relay controls while streaming real-time analytics to a web dashboard.',
    futureScope:
      'Can be expanded with IoT-based hardware integration, predictive energy optimization, facial recognition attendance, multi-classroom monitoring, cloud analytics, and AI-driven institutional resource management.',
    image: '/projects/smart-classroom.jpg',
    technologies: ['Python', 'YOLOv8', 'OpenCV', 'Flask', 'Flask-SocketIO', 'SQLite', 'JavaScript', 'Chart.js'],
    github: 'https://github.com/Arsalan0786/smart-classroom',
    liveDemo: '#',
    date: 'May 2026',
    featured: true,
  },
  {
    id: 'edu-ninja',
    title: 'Edu-Ninja — Gamified Learning Platform',
    shortDescription:
      'An innovative educational platform enhancing middle-school learning through interactive quizzes, mini-games, and engaging UI.',
    fullDescription:
      'Built an innovative educational platform designed to enhance learning experiences for middle-school students through interactive quizzes and educational games, promoting effective and engaging self-paced learning. Features an intuitive gamified UI, responsive mechanics, and student-friendly interaction loops.',
    problem:
      'Middle-school students often disengage from static textbook materials and repetitive traditional homework formats.',
    solution:
      'Created an interactive learning web platform combining curriculum-aligned interactive quiz challenges with rewarding game mechanics to boost student engagement and retention.',
    futureScope:
      'Can be expanded with personalized learning paths, AI-based recommendations, progress tracking, and interactive assessments to create a comprehensive digital learning platform.',
    image: '/projects/edu-ninja.jpg',
    technologies: ['React.js', 'Node.js', 'JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/Arsalan0786/Edu-Ninja',
    liveDemo: '#',
    date: 'Sep 2025',
    featured: true,
  },
  {
    id: 'floods-in-india',
    title: 'Floods in India — Awareness & Historical Insights',
    shortDescription:
      'An informative portal showcasing historical flood data, chronological timelines, key events, and interactive visualizations.',
    fullDescription:
      'Designed an informative website showcasing the history of floods in India through detailed timelines, key events, and interactive visualizations to raise awareness and promote disaster preparedness across vulnerable regions. Provides accessible data summaries and safety resources.',
    problem:
      'Critical historical disaster knowledge and flood preparedness information are often inaccessible, dry, or difficult for citizens to interpret.',
    solution:
      'Engineered a visual timeline interface highlighting major flood occurrences, regional severity patterns, and essential emergency preparedness protocols in an intuitive, responsive design.',
    futureScope:
      'Can be developed into a real-time disaster awareness platform with live flood alerts, interactive maps, weather-data integration, and emergency-resource information.',
    image: '/projects/floods-in-india.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Data Visualization'],
    github: 'https://github.com/Arsalan0786/FloodinIndia',
    liveDemo: '#',
    date: 'Apr 2025',
    featured: true,
  },
  {
    id: 'ecommerce-website',
    title: 'E-Commerce Shopping Website',
    shortDescription:
      'A responsive multi-page e-commerce website with interactive product listings, shopping cart, and smooth animations.',
    fullDescription:
      'Structured a responsive multi-page e-commerce website featuring product listings, shopping cart, login/signup authentication, and a visually interactive home page. Applied custom UI styling and animations with CSS and Font Awesome to create a clean, brand-like user experience including sliders, modals, search bar transitions, and wish list toggles.',
    problem:
      'Building a fluid, high-performance shopping flow with rich client-side interactivity without relying on heavy frameworks.',
    solution:
      'Utilized modular JavaScript for dynamic content handling and event-driven interactions, enabling responsive layout behavior, cart management, and seamless micro-interactions across devices.',
    futureScope:
      'Currently under active development — expanding with payment gateway integration, database backend for persistent user orders, and an administrative inventory control panel.',
    status: 'Under Development',
    image: '/projects/ecommerce.jpg',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Font Awesome', 'Responsive UI'],
    github: 'https://github.com/Arsalan0786',
    liveDemo: '#',
    date: 'Dec 2024',
    featured: true,
  },
];

export default projects;
