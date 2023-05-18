import useDownloader from "react-use-downloader";
import AppLayout from "../src/layout/AppLayout";

export default function About() {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = `/assets/zeeshan_resume.pdf`;
  const filename = "Zeeshan_Resume.pdf";

  console.log(isInProgress ? "Downloading" : "Not Downloading");
  return (
    <AppLayout>
      {/* Hero */}
      <section className="h-screen container m-auto">
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="title text-primary font-medium">
              Zeeshan <br /> <span className="text-white font-clash">Asif</span>
            </h1>
            <span className="flex gap-4 items-center mt-8 justify-center">
              <button
                onClick={() => download(fileUrl, filename)}
                className="font-clash text-white font-semibold text-xl underline active:opacity-95 active:scale-[0.95] cursor-none duration-150"
              >
                Download Resume
              </button>
              {isInProgress && (
                <span className="bg-white h-4 w-4 block animate-spin"></span>
              )}
            </span>
          </div>
        </div>
      </section>

      {/* About */}

      <section className="max-w-7xl m-auto px-8">
        <div className="grid md:grid-cols-3 gap-6 text-white">
          <div className="row-start-2 md:row-start-1">
            <div>
              <h6 className="text-lg md:text-xl mb-4">Frontend Tools</h6>
              <p className="leading-loose">
                JavaScript(ES6+), TypeScript, HTML5, React.js, Next.js,React
                Native, Redux, Redux Toolkit, Redux Thunk, NPM,
                Git/Gitlab/Github/Bitbucket.
              </p>
            </div>
            <div className="mt-12">
              <h6 className="text-lg md:text-xl mb-4">UI Liberaries</h6>
              <p className="leading-loose">
                CSS3/SCSS/SASS, Framer Motion, GSAP, Styled Components,
                Bootstrap, Tailwind CSS, Material UI, Chakra UI.
              </p>
            </div>
            <div className="mt-12">
              <h6 className="text-lg md:text-xl mb-4">Interests</h6>
              <p className="leading-loose">
                Creative Development, Artificial Intelligence, Web3.
              </p>
            </div>
          </div>
          <div className="col-span-2 text-lg md:text-2xl leading-loose">
            <p>
              I am a frontend developer from Lahore, Pakistan. I am constantly
              looking for advance solutions to issues that arise in daily life.
              In my work, I spend most of my time coming up with innovative
              solutions to development problems.
            </p>
            <p className="mt-4">
              I have been a part of this industry for over a years and within
              those years, I have honed my analytic and collaboration skills
              which makes working with a team easier. I have also had the
              opportunity to work with different developers for different
              projects.
            </p>
            <p className="mt-4">
              For me, each project I have the privilege to work on is a new
              opportunity to learn new things, meet people with ideas that
              differ from mine and discover things about myself I never knew
              were beneath the layers of all of me.
            </p>

            <p className="mt-4">
              I am available for freelance jobs. Let&apos;s talk.
            </p>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
