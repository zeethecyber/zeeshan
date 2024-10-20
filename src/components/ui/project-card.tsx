import Image from "next/image";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function ProjectCard({ title, description, imageUrl }: Props) {
  return (
    <div style={{ scale: "0.75" }} className="project-card">
      <div className="aspect-square relative">
        <Image src={imageUrl} fill className="object-cover size-full" alt="" />
      </div>
      <div>
        <h3 className="text-3xl font-medium mt-4 tracking-wider">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
