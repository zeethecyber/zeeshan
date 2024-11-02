import { useAppContext } from "@/context/app-context";
import { PROJECTS } from "@/data/projects";
import Image from "next/image";

type Props = {
  data: (typeof PROJECTS)[0];
};

export default function ProjectCard({
  data: { title, description, image, technologies, github, live },
}: Props) {
  const { openModal } = useAppContext();

  return (
    <div style={{ scale: "0.75" }} className="project-card">
      <div className="aspect-square relative">
        <Image
          src={image}
          fill
          className="object-cover size-full rounded-lg"
          alt=""
        />
      </div>
      <div className="bg-white/10 backdrop-blur-md border border-white/35 p-4 rounded-lg mt-4">
        <div>
          <h3 className="text-primary text-2xl md:text-3xl font-medium tracking-wider">
            {title}
          </h3>
          <p className="line-clamp-2">{description}</p>
          <button
            className="text-primary font-space font-medium text-sm"
            onClick={() =>
              openModal({
                title,
                description,
                image,
                technologies,
                github,
                live,
              })
            }
          >
            Read More
          </button>
        </div>
        <ul className="mt-4 flex items-center gap-4 text-sm">
          {technologies?.map((tech, index) => (
            <li
              key={index}
              className="bg-secondary backdrop-blur-md text-foreground font-medium rounded-full px-4 py-1 cursor-pointer hover:bg-foreground hover:text-background duration-100"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
