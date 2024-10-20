import ProjectCard from "@/components/ui/project-card";

export default function Section4() {
  return (
    <section id="section-4">
      <div className="mt-40 grid gap-12">
        <ProjectCard
          title="Hewlett Packard Enterprise"
          description="Developed a web application for managing customer data and generating reports."
          imageUrl="https://cdn.prod.website-files.com/5825f89e8ad305816466d37f/5ffe158e2c91180d4e49385e_hub-tile.jpg"
        />
        <ProjectCard
          title="Olive Tile"
          description="Designed and developed a mobile app for tracking fitness goals and progress."
          imageUrl="https://cdn.prod.website-files.com/5825f89e8ad305816466d37f/5ffe1396a182a666dd3dde6f_oliv-tile.jpg"
        />
        <ProjectCard
          title="Hewlett Packard Enterprise"
          description="Developed a web application for managing customer data and generating reports."
          imageUrl="https://cdn.prod.website-files.com/5825f89e8ad305816466d37f/5ffe158e2c91180d4e49385e_hub-tile.jpg"
        />
      </div>
    </section>
  );
}
