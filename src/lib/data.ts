import { Code, Cpu, GraduationCap, PenTool, Server, Briefcase, Award, Linkedin, Github, Twitter, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const profile = {
  name: "Alex Doe",
  title: "Aspiring Web Developer",
  about: "I am a passionate and driven student currently seeking an alternance opportunity in web development. With a strong foundation in modern web technologies and a keen eye for detail, I enjoy creating intuitive, efficient, and visually appealing user experiences. I am a quick learner, a collaborative team player, and I am excited to apply my skills to real-world projects and contribute to a forward-thinking company.",
  email: "alex.doe@email.com",
};

export const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/in/", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/", icon: Github },
  { name: "Twitter", url: "https://twitter.com/", icon: Twitter },
  { name: "Email", url: `mailto:${profile.email}`, icon: Mail },
];

export const skills = [
  {
    category: "Frontend",
    icon: PenTool,
    list: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: Server,
    list: ["Node.js", "Express", "Python", "Firebase", "PostgreSQL"],
  },
  {
    category: "Tools & Technologies",
    icon: Cpu,
    list: ["Git & GitHub", "Docker", "Webpack", "Figma", "Genkit"],
  },
];

export const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "University of Technology",
    period: "2021 - 2024",
    description: "Focused on software development, algorithms, and data structures. Participated in several hackathons and group projects, developing both technical and teamwork skills.",
    icon: GraduationCap,
  },
  {
    degree: "High School Diploma, Scientific Track",
    institution: "Central High School",
    period: "2018 - 2021",
    description: "Graduated with honors, with a strong emphasis on mathematics and physics.",
    icon: GraduationCap,
  },
];

export const experiences = [
  {
    role: "Web Development Intern",
    company: "Innovatech Solutions",
    period: "Jun 2023 - Aug 2023",
    description: "Contributed to the development of a client-facing web application using React and TypeScript. Collaborated with the design team to implement responsive UI/UX features and integrated RESTful APIs for dynamic content.",
    icon: Briefcase,
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "Jan 2022 - Present",
    description: "Developed and maintained websites for small businesses, focusing on creating clean, responsive, and easy-to-navigate layouts. Managed projects from conception to deployment.",
    icon: Briefcase,
  },
];

export const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce website with features like product catalog, shopping cart, user authentication, and a checkout process. Built with Next.js, Tailwind CSS, and Stripe for payments.",
    tags: ["Next.js", "React", "Stripe", "PostgreSQL"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "online store",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool that allows users to create projects, assign tasks, and track progress. Real-time updates are handled with Firebase.",
    tags: ["React", "Firebase", "Tailwind CSS", "dnd-kit"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "to-do list",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio! A responsive personal website to showcase my skills and projects, built with Next.js and featuring GenAI-powered content generation.",
    tags: ["Next.js", "Tailwind CSS", "GenAI"],
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "personal website",
    liveUrl: "#",
    repoUrl: "#",
  },
];

export const certificates = [
  {
    name: "Certified JavaScript Developer",
    issuer: "Tech Certification Institute",
    date: "May 2023",
    icon: Award,
  },
  {
    name: "Responsive Web Design",
    issuer: "Online Dev University",
    date: "Jan 2023",
    icon: Award,
  },
];
