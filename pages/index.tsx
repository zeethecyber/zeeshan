import Image from "next/image";
import AppLayout from "../src/layout/AppLayout";

export default function Home() {
  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="items-center justify-center flex hero-section h-screen">
        <div>
          <h1 className="text-primary font-medium title text-center">
            Frontend <br />{" "}
            <span className="text-white font-clash">Hashira</span>
          </h1>
          <div className="text-gray-1 text-xs md:text-sm text-right flex justify-between mt-4">
            <span className="text-left inline-flex overflow-y-hidden h-min">
              <div className="">
                <span className="arrow-after relative animate-arrow inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                    />
                  </svg>
                </span>
              </div>
              <p>
                Keep <br /> Scrolling
              </p>
            </span>
            <p>
              Available for freelance work <br /> from january 2022 <br />{" "}
              <a href="" className="font-semibold underline">
                Let&apos;s Talk
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl m-auto px-12 my-32">
        <div className="max-w-3xl">
          <h2 className="text-4xl text-primary font-medium text-gray-1 my-8 tracking-[0.4rem]">
            About Me
          </h2>
          <p className=" text-gray-1 mx-auto text-xl !leading-loose text-xl">
            Hi, Zeeshan here. Obviously! <br /> I am a front-end developer who
            constantly seeks out innovative solutions to everyday problems. For
            whatever reason it is you are here, welcome.
          </p>
        </div>
      </section>

      {/* Works Section */}
      <section className="max-w-7xl m-auto px-8 mt-16">
        <h2 className="text-5xl md:text-8xl text-center font-medium text-primary tracking-[0.4rem]">
          Featured <br /> <span className="text-white font-clash">Works</span>
        </h2>
        <div className="grid mt-12 gap-y-16">
          <div className="md:grid grid-cols-5">
            <div className="col-span-2"></div>
            <div
              className="py-8 featured-img relative col-span-3 aspect-[4/3]"
              data-before-content="1 OF 3"
            >
              <Image
                src="https://cdn.dribbble.com/userupload/4170047/file/original-d987c61195a49b715931aedbcf6939bb.png?compress=1&resize=1024x768"
                alt=""
                className="object-cover hover:grayscale hover:scale-[0.96] duration-150 ease-in hover:rounded-xl"
                fill={true}
              />
            </div>
          </div>
          <div className="md:grid grid-cols-5">
            <div
              className="py-8 featured-img relative col-span-3 aspect-[4/3]"
              data-before-content="2 OF 3"
            >
              <Image
                src="https://cdn.dribbble.com/userupload/4171388/file/original-27a9636b63947f0ebcb8e3473194d046.png?compress=1&resize=1024x768"
                alt=""
                className="object-cover hover:grayscale hover:scale-[0.96] duration-150 ease-in hover:rounded-xl"
                fill={true}
              />
            </div>
            <div className="col-span-2"></div>
          </div>
          <div className="md:grid grid-cols-5">
            <div className="col-span-2"></div>
            <div
              className="py-8 featured-img relative col-span-3 aspect-[4/3]"
              data-before-content="3 OF 3"
            >
              <Image
                src="https://cdn.dribbble.com/userupload/4170047/file/original-d987c61195a49b715931aedbcf6939bb.png?compress=1&resize=1024x768"
                alt=""
                className="object-cover hover:grayscale hover:scale-[0.96] duration-150 ease-in hover:rounded-xl"
                fill={true}
              />
            </div>
          </div>
        </div>
        <h6 className="text-center font-medium underline text-2xl lg:text-4xl my-6 text-gray-1">
          View More
        </h6>
      </section>
    </AppLayout>
  );
}
