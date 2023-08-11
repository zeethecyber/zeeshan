import Image from "next/image";
import HeroImg from "./../src/img/hero.png";
import QuoteBox from "../src/components/quote-box/QuoteBox";

function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-8 sm:px-20 overflow-hidden">
      {/* Hero Section */}
      <div className="md:grid grid-cols-2 items-center block">
        <div className="py-24 sm:py-40">
          <p className="text-white font-fira text-4xl font-semibold">
            Hi, I am <span className="text-primary">Zeeshan Asif</span> and I am
            a Web and Mobile App <span className="text-primary">Developer</span>
          </p>
          <p className="text-gray-100 mt-8">
            I craft cross platform apps including Web, IOS and Android Apps.
            It's a place where technology meets the creativity.
          </p>
          <button className="text-white py-2 px-6 border border-primary hover:bg-primary duration-150 mt-8">
            Contact Me
          </button>
        </div>
        <div>{/* <Image src={HeroImg} alt="" className="m-auto" /> */}</div>
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
          <p className="text-gray-100 mt-8">
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
            About Me
          </button>
        </div>
      </div>

      {/* Works Section */}
      <div className="md:grid grid-cols-3 block mt-20">
        <div className="col-span-2">
          <h2 className="text-3xl md:text-4xl text-white heading-before md:heading-after">
            featured works
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
