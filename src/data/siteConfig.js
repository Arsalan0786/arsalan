import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const siteConfig = {
  name: 'Sheikh Arsalan',
  title: 'Computer Science Engineer | AI & ML Focus',
  email: 'sheikharsalan0223@gmail.com',
  phone: '+91-9541995177',
  location: 'Srinagar, J&K',
  bio: `I’m a Computer Science Engineer passionate about building practical, technology-driven solutions to real-world problems. I enjoy working across AI/ML, software development, and emerging technologies, turning ideas into functional products that create meaningful impact.`,
  shortBio: `CS Engineer @ LPU. AI & ML Enthusiast. Full-Stack Developer.`,
  profileImage: '/profile.png',
  resumeUrl: '/resume.pdf',
  siteUrl: 'https://arsalan.dev',

  social: [
    {
      name: 'GitHub',
      url: 'https://github.com/Arsalan0786',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sheikharsalan8146',
      icon: FaLinkedinIn,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/sheikharsalan8146',
      icon: FaInstagram,
    },
  ],

  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ],

  aboutFacts: [
    { label: 'Location', value: 'Srinagar, J&K' },
    { label: 'Education', value: 'B.Tech CSE @ Lovely Professional University' },
    { label: 'Focus', value: 'AI & ML' },
    { label: 'Interests', value: 'Full-Stack, Open Source, NLP' },
  ],

  emailjs: {
    serviceId: 'service_xjegpa8',
    templateId: 'template_5g8s97p',
    publicKey: '-Fw2g6KYuBMZ5vbbk',
  },
};

export default siteConfig;
