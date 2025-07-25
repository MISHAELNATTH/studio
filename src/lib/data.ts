import { Code, Cpu, GraduationCap, PenTool, Server, Briefcase, Award, Linkedin, Github, Twitter, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const profile = {
  name: "Mishael Natth",
  title: "Aspiring Fullstack Developer",
  about: "I am a passionate and driven student currently seeking an alternance opportunity in web development. With a strong foundation in modern web technologies and a keen eye for detail, I enjoy creating intuitive, efficient, and visually appealing user experiences. I am a quick learner, a collaborative team player, and I am excited to apply my skills to real-world projects and contribute to a forward-thinking company.",
  email: "mishael1332006@email.com",
};

export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/mishael-natth-viswanathan/", icon: Linkedin },
  { name: "GitHub", url: "https://github.com/MISHAELNATTH", icon: Github },
  { name: "Twitter", url: "https://x.com/MishaelNatth", icon: Twitter },
  { name: "Email", url: `mailto:${profile.email}`, icon: Mail },
];

export const skills = [
  {
    category: "Frontend",
    icon: PenTool,
    list: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "GTK4"],
  },
  {
    category: "Backend",
    icon: Server,
    list: ["Node.js", "C/C++", "Python", "SQL", "Java"],
  },
  {
    category: "Tools & Technologies",
    icon: Cpu,
    list: ["Git & GitHub", "Object oriented programming", "Microsoft Office", "Context API"],
  },
];

export const education = [
  {
    degree: "Masters in Software Development",
    institution: "JUNIA Grande ecole d'ingénieur",
    period: "2023 - 2028",
    description: "Focused on software development, algorithms, and data structures. Participated in several group and self-learning projects, developing both technical and teamwork skills.",
    icon: GraduationCap,
  },
  {
    degree: "High School Diploma, Scientific Track",
    institution: "Kendriya Vidyalaya No.2, Pondicherry",
    period: "2020 - 2023",
    description: "Graduated with honors, with a strong emphasis on mathematics, Python, SQL, physics and Chemistry.",
    icon: GraduationCap,
  },
];

export const experiences = [
  {
    role: "Caisher and Client relations",
    company: "Supermarché Match, Halluin",
    period: "Student Contract CDI | April 2025 - Present date",
    description: "As an international student, working at Supermarché Match allowed me to improve my French through real-world interaction while gaining hands-on experience in customer service and retail operations. I earned the trust of my team through reliability, precision, and a strong work ethic, that the company later offered me a CDI contract. This experience reflects my adaptability, cultural integration, and commitment-qualities I bring to every project as a future software developer.",
    icon: Briefcase,
  },

  {
    role: "Worker Internship & Sales Associate",
    company: "Supermarché Match, Halluin",
    period: "1-Month Internship + 1-Month CDD | Summer 2024",
    description: "During my summer internship, I worked across various departments of the supermarket (rayon), managing stock, organizing shelves, and supporting store operations. This experience taught me the importance of teamwork, organization, and adaptability in a fast-paced environment. My performance led to a follow-up CDD contract, reinforcing the trust the company placed in me. It was also a key moment in my integration into French professional life, helping me build resilience, responsibility, and workplace communication-skills that continue to support me as I pursue a career in software development through alternance.",
    icon: Briefcase,
  },

];

export const projects = [
  {
    title: "Arduino-based weather systems",
    description: "Designed and programmed sensor-based embedded systems, acquiring an understanding of embedded systems to complement software development objectives.",
    tags: ["C Language"],
    imageUrl: "/arduino.jpg",
    imageHint: "online store",
    liveUrl: "",
    repoUrl: "https://github.com/MISHAELNATTH/Arduino_Projects.git",
  },
  {
    title: "Restaurant Reservation System",
    description: "Built graphical interface using GTK4 with backend logic, acquiring problem-solving skills by integrating UI and System logic in the C ecosystem.",
    tags: ["C Language", "GTK4"],
    imageUrl: "/GUI.jpg",
    imageHint: "Reservation App",
    liveUrl: "#",
    repoUrl: "https://github.com/MISHAELNATTH/Reservation-System.git",
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio! A responsive personal website to showcase my skills and projects, built with Next.js and featuring GenAI-powered content generation.",
    tags: ["Next.js", "Tailwind CSS"],
    imageUrl: "public/Mishael.png",
    imageHint: "personal website",
    liveUrl: "https://mishaelnatth.github.io/my-recipe-book/",
    repoUrl: "https://github.com/MISHAELNATTH/studio.git",
  },
  {
    title: "Exploratory Data Analysis",
    description: "Conducted EDA on city datasets. Visualized traffic accident trends using Pandas, Matplotlib, Seaborn.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Webscrapping"],
    imageUrl: "/EDA.jpeg",
    imageHint: "Graphs",
    liveUrl: "",
    repoUrl: "https://github.com/MISHAELNATTH/Madrid-EDA.git",
  },
  {
    title: "Recipe-Book App (First Web App)",
    description: "Conducted EDA on city datasets. Visualized traffic accident trends using Pandas, Matplotlib, Seaborn.",
    tags: ["React.js", "React Router", "Context API", "HTML", "CSS", "JavaScript"],
    imageUrl: "/Recipe_book.png",
    imageHint: "catalogue",
    liveUrl: "https://mishaelnatth.github.io/my-recipe-book/",
    repoUrl: "https://github.com/MISHAELNATTH/my-recipe-book.git",
  },
];

export const certificates = [
  {
    name: "Excel Skill - Goldman Sachs",
    issuer: "Forage",
    date: "February 2025",
    icon: Award,
  },
  {
    name: "Sustainability Certificate",
    issuer: "Test suite France",
    date: "May 2024",
    icon: Award,
  },
  {
    name: "National Cadet Corps",
    issuer: "Directorate of National Cadet Corps",
    date: "May 2020",
    icon: Award,
  },
  
];
