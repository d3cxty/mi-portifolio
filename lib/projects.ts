export type Project = {
  title: string;
  description: string;
  image: string;
  href?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    title: "SmartPark Employee Payroll Management System",
    description: "Full-stack MERN application for automated payroll processing with real-time analytics, department management, and comprehensive reporting features.",
    image: "/projects/smartpark.png",
    href: "https://github.com/d3cxty/smartpark-epms",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"]
  },
  {
    title: "Edtech Platform",
    description: "Hackathons & courses marketplace built with Next.js, Redux, and Express.",
    image: "/projects/p3.png",
    href: "https://umurava-app.vercel.app/",
    tags: ["Next.js", "Express", "Redux"]
  },
  {
    title: "Skill Map",
    description: "A Skill map Generator to help people achieve specific goals",
    image: "/projects/p1.png",
    href: "https://skillmap-v1.vercel.app/",
    tags: ["Gemini API", "Web Hooks", "Express"]
  },
  {
    title: "E-garage",
    description: "Real time Auto vehicle repair Website",
    image: "/projects/p2.png",
    href: "https://e-garage-sepia.vercel.app/",
    tags: ["Next.js", "Socket.IO", "Express"]
  }
];
