import project1 from '../assets/projects/project-1.webp';
import project2 from '../assets/projects/project-2.webp';
import project3 from '../assets/projects/project-3.webp';
import project4 from '../assets/projects/project-4.webp';
import {
  House,
  UserRound,
  Route,
  HandPlatter,
  BriefcaseBusiness,
  Send,
  GraduationCap,
  Rocket,
  Dumbbell,
  Wrench,
} from 'lucide-react';
// import { Rocket } from '../svg/Rocket';

export const ABOUT_CONTENT = `Who thrives at the intersection of creativity and code. I have a solid foundation in front-end development (HTML, CSS, JavaScript, and React) .My mission? Turning complex problems into sleek, responsive solutions.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: 'Jan 2025 - Jun 2025',
    role: 'Frontend Developer',
    company: 'Tekktopia.',
    description: `
    Developed and maintained responsive web applications using React.js with JavaScript and TypeScript, ensuring high performance and seamless user experience.
    Translated Figma designs into pixel-perfect, responsive UI components, ensuring consistency with design specifications and accessibility standards.
    Maintained clean, modular, and scalable code by following best practices, TypeScript interfaces, and reusable component structures.
    Collaborated with UI/UX designers, backend developers, and product managers.
    Used Git and GitHub/GitLab for version control, managing feature branches and resolving merge conflicts efficiently in a collaborative team setting.`,
    technologies: ['Javascript', 'React.js', 'Typescript'],
  },
  {
    year: 'Oct 2024 - Jan 2025',
    role: 'Web Developer',
    company: 'Stalewart Crest',
    description: `Developed responsive Moniepoint and Kuda clones, using springboot and Reactjs`,
    technologies: ['React.js', 'Springboot', 'Java'],
  },
];
export const EDUCATION = [
  {
    title: 'Bachelor of Computer Science ',
    location: 'Ilishan-Remo, Nigeria',
    school: 'Babcock University',
    date: 'Oct 2023 - Jul 2027',
    skills: ['Java', 'c', 'c++'],
  },
];
export const PROJECTS = [
  {
    title: 'E-Commerce Website',
    image: project1,
    description:
      'A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.',
    technologies: ['HTML', 'CSS', 'React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Task Management App',
    image: project2,
    description:
      'An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.',
    technologies: ['HTML', 'CSS', 'Angular', 'Firebase'],
  },
  {
    title: 'Portfolio Website',
    image: project3,
    description:
      'A personal portfolio website showcasing projects, skills, and contact information.',
    technologies: ['HTML', 'CSS', 'React', 'Bootstrap'],
  },
  {
    title: 'Blogging Platform',
    image: project4,
    description:
      'A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.',
    technologies: ['HTML', 'CSS', 'Vue.js', 'Express', 'mySQL'],
  },
];

export const CONTACT = {
  address: '767 Fifth Avenue, New York, NY 10153 ',
  phoneNo: '+12 4555 666 00 ',
  email: 'me@example.com',
};

export const NAVIGATION_LINKS = [
  {
    label: <House />,
    href: '#home',
    title: 'Home',
    id: 1,
    dis: 'translate-x-0',
  },
  {
    label: <UserRound />,
    href: '#about',
    title: 'About',
    id: 2,
    dis: 'translate-x-16',
  },
  {
    label: <Wrench />,
    href: '#skills',
    title: 'Skills',
    id: 3,
    dis: 'translate-x-48',
  },
  {
    label: <Route />,
    href: '#journey',
    title: 'Journey',
    id: 4,
    dis: 'translate-x-32',
  },
  // {
  //   label: <HandPlatter />,
  //   href: '#service',
  //   title: 'Services',
  //   id: 4,
  //   dis: 'translate-x-48',
  // },

  {
    label: <BriefcaseBusiness />,
    href: '#work',
    title: 'Projects',
    id: 5,
    dis: 'translate-x-48',
  },
  {
    label: <Send />,
    href: '#contact',
    title: 'Contact',
    id: 6,
    dis: 'translate-x-64',
  },
];

export const JOURNEY_LINKS = [
  { label: <Rocket />, href: '#exp', title: 'Experience' },
  { label: <GraduationCap />, href: '#edu', title: 'Education' },
];

// import { FaCircle } from 'react-icons/fa';

// export const events = [
//   {
//     icon: <FaCircle className="text-[#473f4e] text-2xl" />,
//     year: '2021',
//     title: 'Started Learning Programming',
//     description: 'Began my journey with HTML, CSS, and JavaScript.',
//   },
//   {
//     icon: <FaCircle className="text-[#473f4e] text-2xl" />,
//     year: '2022',
//     title: 'Built My First Project',
//     description: 'Created a simple to-do app using React.',
//   },
// ];
