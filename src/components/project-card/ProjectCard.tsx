import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../icons/github";
import GooglePlay from "../../icons/googlePlay";

interface IProjectCard {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  liveLink?: string;
  github?: string;
  googlePlay?: string;
  item?: any;
}

function ProjectCard({
  title,
  description,
  imageSrc,
  tags,
  liveLink,
  github,
  googlePlay,
  item,
}: IProjectCard) {
  return (
    <div className="border border-gray-1 flex flex-col">
      <div className="aspect-video bg-red-500 relative">
        <Link
          href={{
            pathname: "/project/[slug]",
            query: { slug: item?.slug || "" },
          }}
        >
          <Image
            src={
              "https://cdn.dribbble.com/userupload/9242887/file/original-4f86a5ff19628966743387a8c240b1d7.png?resize=1024x768"
            }
            alt=""
            fill={true}
            className="object-cover"
          />
        </Link>
      </div>
      <div className="py-2 px-6 border-t border-gray-1">
        <h3 className="text-white text-2xl font-medium">{title}</h3>
        <p className="text-gray-1 line-clamp-2">{description}</p>
      </div>
      <div className="py-2 px-6 border-t border-gray-1 flex-1 flex flex-col justify-between">
        <ul className="flex flex-wrap gap-x-4  list-disc text-gray-1 list-inside leading-loose">
          {tags.map((tag, index) => {
            return <li key={index}>{tag}</li>;
          })}
        </ul>
        <div className="mt-6 mb-3 flex gap-4 items-center">
          {!!liveLink && (
            <Link
              className="text-white border border-gray-1 py-2 px-3 inline-block"
              href={liveLink}
            >
              Live &lt;&#126;&gt;
            </Link>
          )}
          {!!github && (
            <Link href={github}>
              <GithubIcon className="h-8 w-8 fill-white hover:fill-primary duration-150" />
            </Link>
          )}
          {!!googlePlay && (
            <Link href={googlePlay}>
              <GooglePlay className="h-8 w-8 fill-white hover:fill-primary duration-150" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
