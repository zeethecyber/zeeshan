import Image from "next/image";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
};

export default function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
}: Props) {
  return (
    <div style={{ scale: "0.75" }} className="project-card">
      <div className="aspect-square relative">
        <Image src={imageUrl} fill className="object-cover size-full" alt="" />
      </div>
      <div>
        <h3 className="text-3xl font-medium mt-4 tracking-wider">{title}</h3>
        <p>{description}</p>
      </div>
      <ul className="mt-4 flex items-center gap-4">
        {technologies?.map((tech, index) => (
          <li
            key={index}
            className="border border-foreground rounded-full px-4 py-1 cursor-pointer hover:bg-foreground hover:text-background duration-100"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
