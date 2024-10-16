export default function Home() {
  return (
    <div>
      {/* Revealing Screen */}
      {/* <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="h-12 w-12 rounded-full bg-white"></div>
      </div> */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-6 px-8 h-screen overflow-hidden">
        <div className="py-20 flex flex-col justify-between">
          <div>
            <h1 className="text-7xl font-bold">Zeeshan Asif</h1>
            <h3 className="text-2xl font-medium mt-4">
              Senior Software Engineer
            </h3>
            <p className="mt-4">
              I make web applications, mobile applications and happy clients.
            </p>

            <ul className="mt-8 grid gap-3">
              <li>
                <span className="text-xl font-semibold font-condensed">
                  About
                </span>
              </li>
              <li>
                <span className="text-xl font-semibold font-condensed text-black/50">
                  Experience
                </span>
              </li>
              <li>
                <span className="text-xl font-semibold font-condensed text-black/50">
                  Projects
                </span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center gap-8">
              <li className="hover:-translate-y-0.5 duration-300">
                <a
                  href="https://twitter.com/zeeshanasif"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
              <li className="hover:-translate-y-0.5 duration-300">
                <a
                  href="https://twitter.com/zeeshanasif"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li className="hover:-translate-y-0.5 duration-300">
                <a
                  href="https://twitter.com/zeeshanasif"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fiverr
                </a>
              </li>
              <li className="hover:-translate-y-0.5 duration-300">
                <a
                  href="https://twitter.com/zeeshanasif"
                  target="_blank"
                  rel="noreferrer"
                >
                  Upwork
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="overflow-auto no-scrollbar">
          <div className="my-20">
            <div className="grid gap-4">
              <p>
                In 2019, I started my career as a software engineer. I have
                worked with many clients and companies to build web
                applications, mobile applications and APIs. I have worked with
                many technologies like React, Node.js, Express, MongoDB, MySQL,
                PostgreSQL, Firebase, Flutter, Dart, and many more.
              </p>
              <p>
                In 2019, I started my career as a software engineer. I have
                worked with many clients and companies to build web
                applications, mobile applications and APIs. I have worked with
                many technologies like{" "}
                <span className="font-bold">
                  React, Node.js, Express, MongoDB, MySQL, PostgreSQL, Firebase,
                  Flutter, Dart,
                </span>{" "}
                and many more.
              </p>
              <p>
                In 2019, I started my career as a software engineer. I have
                worked with many clients and companies to build web
                applications, mobile applications and APIs. I have worked with
                many technologies like React, Node.js, Express, MongoDB, MySQL,
                PostgreSQL, Firebase, Flutter, Dart, and many more.
              </p>
            </div>

            {/* Experience */}

            <div className="mt-40 grid gap-4">
              <ExperienceCard />
              <ExperienceCard />
              <ExperienceCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ExperienceCard = () => {
  return (
    <div className="border border-black p-4 hover:bg-black hover:text-white duration-300 cursor-pointer">
      <h5 className="font-bold">
        Project Manager | Senior FullStack Developer
      </h5>
      <p className="text-sm font-medium">2019 - 2024</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
        voluptatum, laborum animi ea eveniet exercitationem neque aspernatur
        quae, saepe commodi odio suscipit dolorem, veritatis quam. Odit
        voluptatibus laudantium cumque at saepe natus iusto temporibus fugiat
        magni consectetur! Mollitia est, voluptas excepturi aliquid corrupti
        perferendis facere tempora quo amet libero ea?
      </p>
    </div>
  );
};
