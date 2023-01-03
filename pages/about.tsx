import Head from "next/head";

import Header from "../src/layout/Header";
import Footer from "../src/layout/Footer";

export default function About() {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#000" />
        <title>About</title>
      </Head>

      {/* Header */}
      <Header></Header>

      {/* Glow */}
      <div className="glow-1 fixed top-0 right-0"></div>
      <div className="glow-2 fixed top-0 right-[100px]"></div>

      {/* Hero */}
      <section className="h-screen container m-auto">
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="title text-gray-1 font-bold">
              Zeeshan <br /> <span className="text-gradient">Asif</span>
            </h1>
            <h6 className="text-white font-semibold text-xl mt-8 underline">
              Download Resume
            </h6>
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
                JavaScript(ES6+), TypeScript, HTML5, React.js, Next.js, Redux,
                Redux Toolkit, Redux Thunk, Redux Saga, NPM,
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
                Creative Development, E-Commerce, Augmented Reality, Web3.
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

      <Footer></Footer>
    </>
  );
}
