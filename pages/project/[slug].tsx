import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import GooglePlay from "../../src/icons/googlePlay";
import GithubIcon from "../../src/icons/github";

function Project() {
  const router = useRouter();
  const projects: any[] = useSelector((state: any) => state.projects.projects);
  // console.log("======PROJECTS=======", JSON.stringify(projects));
  const project = projects.filter(
    (project) => project.slug == router.query.slug
  );
  console.log("======PROJECTS=======", JSON.stringify(project));
  return (
    <div className="max-w-screen-xl mx-auto px-8 sm:px-20">
      {/* Banner Section */}
      <section className="my-10">
        <h2 className="title-before text-white font-medium text-4xl">
          project
        </h2>
        <div className="mt-12">
          <div className="aspect-video bg-red-500 relative max-w-3xl m-auto">
            <Image
              src={
                "https://cdn.dribbble.com/userupload/9242887/file/original-4f86a5ff19628966743387a8c240b1d7.png?resize=1024x768"
              }
              alt=""
              fill={true}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="my-10 max-w-3xl">
        <h2 className="title-before text-white font-medium text-4xl">
          {project[0]?.title}
        </h2>
        <p className="text-gray-1 mt-4">{project[0]?.long_description}</p>
        <h2 className="heading-before text-white font-medium text-3xl mt-10">
          Framworks and Tools
        </h2>
        <div className="text-gray-1 mt-4">
          <ul className="list-disc list-inside">
            {project[0]?.tags.map((tag: string, index: number) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <h2 className="heading-before text-white font-medium text-3xl mt-10">
          View More
        </h2>
        <div className="mt-4 flex flex-wrap gap-6">
          {!!project[0]?.liveLink && (
            <Link
              className="text-white border border-white py-2 px-3 inline-block"
              href={project[0]?.liveLink}
            >
              Live Link &#126;&gt;
            </Link>
          )}
          {!!project[0]?.github && (
            <Link
              href={project[0]?.github}
              className="text-white border border-white py-2 px-3 inline-block flex gap-2 items-center"
            >
              Github <GithubIcon height={20} fill="white" />
            </Link>
          )}
          {!!project[0]?.googlePlay && (
            <Link
              href={project[0]?.googlePlay}
              className="text-white border border-white py-2 px-3 inline-block flex gap-2 items-center"
            >
              Google Play <GooglePlay height={20} fill="white" />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}

export default Project;
