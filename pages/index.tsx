import Image from "next/image";
import QuoteBox from "../src/components/quote-box/QuoteBox";
import ProjectCard from "../src/components/project-card/ProjectCard";
import { PROJECTS } from "../src/data/projects";
import shape1 from "./../src/img/shape-1.png";
import dots from "./../src/img/dots.png";

function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-8 sm:px-20 overflow-hidden">
      {/* Hero Section */}
      <div className="md:grid grid-cols-2 gap-x-8 items-center block">
        <div className="py-24 sm:py-40">
          <p className="text-white font-fira text-4xl font-semibold">
            Hi, I am <span className="text-primary">Zeeshan Asif</span>, a Web
            and Mobile App <span className="text-primary">Developer</span>
          </p>
          <p className="text-gray-100 mt-8">
            I craft cross platform apps including Web, IOS and Android Apps.
            It's a place where technology meets the creativity.
          </p>
          <button className="text-white py-2 px-6 border border-primary hover:bg-primary duration-150 mt-8">
            Contact Me &#126;&gt;
          </button>
        </div>
        <div className="self-stretch relative">
          <Image src={shape1} alt="" className="w-48 absolute top-20 left-10" />
          <Image
            src={dots}
            alt=""
            className="w-48 absolute bottom-20 right-0"
          />
        </div>
      </div>
      <QuoteBox
        text="With great power comes great electricity bill."
        author="Dr. Wtf?"
      />

      {/* About Section */}
      <div className="md:grid grid-cols-3 block mt-20">
        <div className="col-span-2">
          <h2 className="text-3xl md:text-4xl text-white heading-before heading-after">
            about me
          </h2>
          <p className="text-gray-1 mt-8">
            Hi, Zeeshan here. Obviously! <br />
            <br />
            I&#39;m a self-taught developer based in Lahore, Pakistan. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences. I also do cross platform mobile app
            development for android and ios.
            <br /> <br /> Transforming my creativity and knowledge into apps has
            been my passion for over a year. I have been helping various clients
            to establish their presence online. I always strive to learn about
            the newest technologies and frameworks.
          </p>
          <button className="text-white py-2 px-6 border border-primary hover:bg-primary duration-150 mt-8">
            Read More &#126;&gt;
          </button>
        </div>
      </div>

      {/* Works Section */}
      <div className="my-20">
        <h2 className="text-3xl md:text-4xl text-white heading-before md:heading-after">
          projects
        </h2>
        <div className="grid grid-cols-3 gap-6 mt-12">
          {PROJECTS.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imgSrc}
                tags={project.tags}
                github={project.github}
                liveLink={project.liveLink}
                googlePlay={project.googlePlay}
              />
            );
          })}
        </div>
      </div>

      <QuoteBox
        text="Software engineers don't have bugs, they just have unexpected features in their lives!"
        author="Dr. Wtf?"
      />

      {/* Review Section */}
      <div className="my-20">
        <h2 className="text-3xl md:text-4xl text-white heading-before md:heading-after">
          client reviews
        </h2>
        <div className="grid grid-cols-3 gap-6 mt-12">
          {PROJECTS.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageSrc={project.imgSrc}
                tags={project.tags}
                github={project.github}
                liveLink={project.liveLink}
                googlePlay={project.googlePlay}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
