import Image from "next/image";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function ProjectCard({ title, description, imageUrl }: Props) {
  return (
    <div>
      <Image src={imageUrl} width={800} height={400} alt="" />
      <div>
        <h3 className="text-3xl font-medium mt-4 tracking-wider">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
