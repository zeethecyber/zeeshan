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
        <Image
          src={imageUrl}
          fill
          className="object-cover size-full rounded-lg"
          alt=""
        />
      </div>
      <div className="bg-white/10 backdrop-blur-md border border-white/35 p-4 rounded-lg mt-4">
        <div>
          <h3 className="text-primary text-3xl font-medium tracking-wider">
            {title}
          </h3>
          <p className="line-clamp-2">{description}</p>
        </div>
        <ul className="mt-4 flex items-center gap-4">
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
