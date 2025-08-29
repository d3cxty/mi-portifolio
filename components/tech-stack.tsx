import Image from "next/image";

const tech = [
  // Dev stack
  { name: "Next.js", icon: "/tech/next.svg" },
  { name: "TypeScript", icon: "/tech/typescript.svg" },
  { name: "React", icon: "/tech/react.svg" },
  { name: "Node.js", icon: "/tech/node.svg" },
  { name: "Tailwind", icon: "/tech/tailwind.svg" },
  { name: "MongoDB", icon: "/tech/mongodb.svg" },
  { name: "PostgreSQL", icon: "/tech/postgres.svg" },
  { name: "Git", icon: "/tech/git.svg" },

  // Cybersecurity stack
  { name: "Java", icon: "/tech/java.svg" },
  { name: "Nmap", icon: "/tech/nmap.svg" },
  { name: "Metasploit", icon: "/tech/metasploit.svg" },
  { name: "Burp Suite", icon: "/tech/burpsuite.svg" },
  { name: "Wireshark", icon: "/tech/wireshark.svg" },
  { name: "Kali Linux", icon: "/tech/kali.svg" },
  { name: "Bash", icon: "/tech/bash.svg" },
  { name: "Linux", icon: "/tech/linux.svg" },
  { name: "Docker", icon: "/tech/docker.svg" },
  { name: "OWASP ZAP", icon: "/tech/zap.svg" },
];

export default function TechStack() {
  return (
    <div className="container">
      <h2 className="h2 mb-8">My Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6">
        {tech.map((t) => (
          <div key={t.name} className="card flex flex-col items-center gap-3">
            <Image src={t.icon} alt={t.name} width={40} height={40} />
            <span className="mono">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
