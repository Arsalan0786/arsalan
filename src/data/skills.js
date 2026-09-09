import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiC,
  SiHtml5,
  SiCss,
  SiReact,
  SiVite,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
  SiDocker,
  SiKubernetes,
  SiKaggle,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiScikitlearn,
} from 'react-icons/si';
import { CodeXml, Users, Brain, MessageSquare, FolderKanban, Sparkles } from 'lucide-react';
import { BsBraces, BsLightningCharge, BsPalette } from 'react-icons/bs';

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: SiPython },
      { name: 'C++', icon: SiCplusplus },
      { name: 'C', icon: SiC },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
    ],
  },
  {
    category: 'AI & Data Science',
    items: [
      { name: 'OpenCV', icon: SiOpencv },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Pandas', icon: SiPandas },
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'Computer Vision', icon: Brain },
      { name: 'NLP & ML', icon: Sparkles },
    ],
  },
  {
    category: 'Libraries & Frameworks',
    items: [
      { name: 'React.js', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Vite', icon: SiVite },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Framer Motion', icon: BsLightningCharge },
    ],
  },
  {
    category: 'Backend & Databases',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Firebase', icon: SiFirebase },
      { name: 'FastAPI', icon: BsBraces },
      { name: 'RESTful APIs', icon: BsBraces },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'VS Code', icon: CodeXml },
      { name: 'Antigravity', icon: SiVercel },
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Docker', icon: SiDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Kaggle', icon: SiKaggle },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Figma', icon: SiFigma },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Team Collaboration', icon: Users },
      { name: 'Problem-Solving', icon: Brain },
      { name: 'Adaptability', icon: Sparkles },
      { name: 'Communication', icon: MessageSquare },
      { name: 'Project Management', icon: FolderKanban },
      { name: 'UI/UX Design', icon: BsPalette },
    ],
  },
];

export default skills;
