import Head from "next/head";
import Header from "../src/layout/Header";
import Clock from "../src/components/clock";
export default function Home() {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#000" />
        <title>Zeeshan Asif</title>
      </Head>
      <Header></Header>

      <div className="glow-1 fixed top-0 right-0"></div>
      <div className="glow-2 fixed top-0 right-[100px]"></div>
      {/* Hero Section */}
      <section className="items-center justify-center flex hero-section h-screen">
        <div>
          <p className="font-clash text-primary tracking-widest text-lg md:text-xl mb-4">
            Zeeshan Asif
          </p>
          <h1 className="text-white font-bold text-7xl md:text-9xl lg:text-[150px] text-center">
            Frontend <br /> <span className="text-primary">Hashira</span>
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
      <section className="max-w-xs md:max-w-xl m-auto px-4 my-32">
        <h2 className="text-3xl font-bold text-gray-1 my-8">About Me</h2>
        <p className=" text-gray-1 mx-auto text-xl !leading-loose text-xl md:text-2xl">
          Hi, Zeeshan here. Obviously! <br /> I am a front-end developer who
          constantly seeks out innovative solutions to everyday problems. For
          whatever reason it is you are here, welcome.
        </p>
        <Clock></Clock>
      </section>

      {/* Works Section */}
      <section className="max-w-7xl m-auto px-8 mt-16">
        <h2 className="text-5xl md:text-8xl text-center font-bold text-gray-1">
          Featured <br /> Works
        </h2>
        <div className="grid mt-12">
          <div className="md:grid grid-cols-5">
            <div className="col-span-2"></div>
            <div
              className="py-8 featured-img relative col-span-3"
              data-before-content="1 OF 3"
            >
              <img
                src="https://cdn.dribbble.com/userupload/4170047/file/original-d987c61195a49b715931aedbcf6939bb.png?compress=1&resize=1024x768"
                alt=""
                className="aspect-[4/3] bg-red-300 object-cover grayscale"
              />
            </div>
          </div>
          <div className="md:grid grid-cols-5">
            <div
              className="py-8 featured-img relative col-span-3"
              data-before-content="2 OF 3"
            >
              <img
                src="https://cdn.dribbble.com/userupload/4171388/file/original-27a9636b63947f0ebcb8e3473194d046.png?compress=1&resize=1024x768"
                alt=""
                className="aspect-[4/3] bg-red-300 object-cover grayscale"
              />
            </div>
            <div className="col-span-2"></div>
          </div>
          <div className="md:grid grid-cols-5">
            <div className="col-span-2"></div>
            <div
              className="py-8 featured-img relative col-span-3"
              data-before-content="3 OF 3"
            >
              <img
                src="https://cdn.dribbble.com/userupload/4170047/file/original-d987c61195a49b715931aedbcf6939bb.png?compress=1&resize=1024x768"
                alt=""
                className="aspect-[4/3] bg-red-300 object-cover grayscale"
              />
            </div>
          </div>
        </div>
        <h6 className="text-center font-bold text-2xl lg:text-4xl my-6 text-gray-1">
          View More
        </h6>
      </section>

      {/* Footer */}
      <footer className="text-gray-1 py-20 max-w-7xl m-auto px-6">
        <h6 className="text-xl md:text-2xl my-4">Want to start a project?</h6>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold">
          Let&#39;s Talk!
        </h1>
        <div className="flex justify-between items-center mt-12">
          <a href="#" className="flex gap-2 items-center">
            <h6 className="text-lg lg:text-2xl">Contact by mail</h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 lg:w-6 h-4 lg:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>

          <div className="flex gap-6">
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 lg:w-10 w-7 lg:h-10"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 lg:w-10 w-7 lg:h-10"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
              </svg>
            </a>
            <a href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 lg:w-10 w-7 lg:h-10"
              >
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
