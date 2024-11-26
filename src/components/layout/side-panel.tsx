type Props = {
  activeSection: string;
};

const SECTIONS = [
  {
    id: "section-about",
    text: "About",
  },
  {
    id: "section-experience",
    text: "Experience",
  },
  {
    id: "section-projects",
    text: "Projects",
  },
  {
    id: "section-reviews",
    text: "Reviews",
  },
  {
    id: "section-contact",
    text: "Contact",
  },
];

export default function SidePanel({ activeSection }: Props) {
  const scrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const space = ["section-contact", "section-about"].includes(sectionId)
      ? 0
      : 100;
    window.scrollTo({
      top: el.offsetTop - space,
      behavior: "smooth",
    });
  };
  return (
    <div className="py-20 flex flex-col justify-between h-full">
      <div>
        <h1 className="text-5xl lg:text-7xl font-bold heading text-[#CBFB45]">
          ZEETHECYBER
        </h1>
        <h2 className="text-3xl font-medium mt-4 subheading opacity-0"></h2>
        <p className="mt-4 helper-text opacity-0"></p>

        <ul className="text-xl font-space font-medium flex flex-col items-start gap-3 mt-6">
          {SECTIONS.map((section) => (
            <li
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="nav-link opacity-0 flex items-center cursor-pointer gap-4 group"
            >
              <div
                className={`h-1 rounded-lg group-hover:w-12 duration-150 ease-in-out ${
                  activeSection === section.id
                    ? "w-10 bg-secondary"
                    : "w-6 bg-white"
                }`}
              />
              <span>{section.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-4 md:gap-8 text-xs md:text-base">
          {/* <li className="social-link opacity-0 hover:-translate-y-1 duration-150">
            <a href="https://www.fiverr.com/zeeshan_016" target="_blank">
              Fiverr
            </a>
          </li> */}
          <li className="social-link opacity-0 hover:-translate-y-1 duration-150">
            <a
              href="https://www.upwork.com/freelancers/~016bde0da63ae42b8d"
              target="_blank"
            >
              Upwork
            </a>
          </li>
          <li className="social-link opacity-0 hover:-translate-y-1 duration-150">
            <a href="https://github.com/zeethecyber" target="_blank">
              Github
            </a>
          </li>
          <li className="social-link opacity-0 hover:-translate-y-1 duration-150">
            <a href="https://www.linkedin.com/in/zeeshan-008/" target="_blank">
              LinkedIn
            </a>
          </li>
          <li className="social-link opacity-0 hover:-translate-y-1 duration-150">
            <a
              href="https://wa.me/923124072852?text=Hi%21+Let%27s+discuss+about+a+project."
              target="_blank"
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
