import ProjectCard from "@/components/ui/project-card";
import { PROJECTS } from "@/data/projects";

export default function ProjectSection() {
  return (
    <section id="section-4">
      <div className="mt-40 grid gap-12">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} data={project} />
        ))}
      </div>
    </section>
  );
}
