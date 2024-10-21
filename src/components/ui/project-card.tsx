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
      <ul className="mt-4 flex items-center gap-4">
        <li className="border border-foreground rounded-full px-4 py-1 cursor-pointer hover:bg-foreground hover:text-background duration-100">
          Next.js
        </li>
        <li className="border border-foreground rounded-full px-4 py-1 cursor-pointer hover:bg-foreground hover:text-background duration-100">
          Node.js
        </li>
        <li className="border border-foreground rounded-full px-4 py-1 cursor-pointer hover:bg-foreground hover:text-background duration-100">
          MongoDB
        </li>
      </ul>
    </div>
  );
}
