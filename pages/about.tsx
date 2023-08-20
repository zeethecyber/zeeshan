import useDownloader from "react-use-downloader";
import SkillCard from "../src/components/skill-card/SkillCard";
import QuoteBox from "../src/components/quote-box/QuoteBox";

export default function About() {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = `/assets/zeeshan_resume.pdf`;
  const filename = "Zeeshan_Resume.pdf";

  return (
    <div className="max-w-screen-xl mx-auto px-8 sm:px-20">
      {/* Hero */}
      <section>
        <div className="mt-10">
          <h2 className="title-before text-white font-medium text-6xl">
            Zeeshan
          </h2>
          <h2 className="title-before text-white font-medium text-6xl">Asif</h2>
        </div>
        <div>
          <p className="text-gray-1 text-lg my-10 max-w-3xl leading-loose">
            Hi, Zeeshan here, Obviously!
            <br />
            <br />
            I&apos;m a self-taught developer based in Lahore, Pakistan. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences. I also do cross platform mobile app
            development for android and ios.
            <br />
            <br />
            Transforming my creativity and knowledge into apps has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
        </div>
        <div
          className="flex justify-start hover:cursor-pointer"
          onClick={() => download(fileUrl, filename)}
        >
          <div className="flex gap-4 items-center justify-center border border-primary py-2 px-6 hover:bg-primary duration-150">
            <button className="text-white font-semibold text-xl active:opacity-95 active:scale-[0.95] duration-150">
              Download Resume
            </button>

            {isInProgress ? (
              <span className="bg-white h-4 w-4 block animate-spin"></span>
            ) : (
              <span className="text-white text-2xl">&#126;&gt;</span>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="my-20">
        <QuoteBox
          text="The perfect date for a developer is DD/MM/YYYY."
          author="Dr. Who?"
        />
        <h2 className="text-3xl md:text-4xl text-white heading-before heading-after mt-10">
          skills
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          <SkillCard
            title="Languages"
            skills={["Javascript", "Typescript", "Dart", "C++"]}
          />
          <SkillCard
            title="Frameworks"
            skills={["React JS", "Next JS", "React Native", "Expo", "Flutter"]}
          />
          <SkillCard
            title="UI Libraries"
            skills={[
              "Chakra UI",
              "Material UI",
              "Bootstrap",
              "Tailwind CSS",
              "Framer Motion",
              "GSAP",
              "RN Elements",
            ]}
          />
          <SkillCard title="Tools" skills={["Redux", "Redux Toolkit"]} />
          <SkillCard
            title="Others"
            skills={["Figma", "Adobe XD", "VS Code", "HTML", "CSS"]}
          />
        </div>
      </section>
    </div>
  );
}
