import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <div className="container">
      <h2 className="h2 mb-8">Some of my recent projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}
