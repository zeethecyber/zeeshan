import ProjectCard from "@/components/ui/project-card";
import { PROJECTS } from "@/data/projects";

export default function ProjectSection() {
  return (
    <section id="section-4">
      <div className="mt-40 grid gap-12">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}
