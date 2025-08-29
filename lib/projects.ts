export type Project = {
  title: string;
  description: string;
  image: string;
  href?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    title: "Edtech Platform",
    description: "Hackathons & courses marketplace built with Next.js, Redux, and Express.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    href: "https://example.com",
    tags: ["Next.js", "Express", "Redux"]
  },
  {
    title: "Python Keylogger",
    description: "Listings, maps, and messaging. Role-based dashboard and admin panel.",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop",
    href: "https://example.com",
    tags: ["Next.js", "Postgres", "Prisma"]
  },
  {
    title: "Kinyarwanda LLM",
    description: "Domain-specific assistant integrated via REST and WebSocket APIs.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop",
    href: "https://example.com",
    tags: ["Python", "FastAPI", "Vector DB"]
  },
  {
    title: "E-garage",
    description: "Real-time chat, notifications, and mini-games.",
    image: "https://images.unsplash.com/photo-1494173853739-c21f58b16055?q=80&w=1600&auto=format&fit=crop",
    href: "https://example.com",
    tags: ["Next.js", "Socket.IO", "Redis"]
  }
];
