type Props = {
  activeSection: string;
};

export default function SidePanel({ activeSection }: Props) {
  const scrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const space = sectionId === "section-5" ? 0 : 100;
    window.scrollTo({
      top: el.offsetTop - space,
      behavior: "smooth",
    });
  };
  return (
    <div className="py-20 flex flex-col justify-between h-full">
      <div>
        <h1 className="text-7xl font-bold heading">ZEETHECYBER</h1>
        <h2 className="text-3xl font-medium mt-4 subheading opacity-0"></h2>
        <p className="mt-4 helper-text opacity-0"></p>

        <ul className="text-xl font-condensed font-medium flex flex-col items-start gap-3 mt-6">
          <li
            onClick={() => scrollTo("section-2")}
            className="nav-link opacity-0 flex items-center cursor-pointer gap-4 group"
          >
            <div
              className={`h-0.5 bg-white group-hover:w-12 duration-150 ease-in-out ${
                activeSection === "section-2" ? "w-10" : "w-6"
              }`}
            />
            <span>About</span>
          </li>
          <li
            onClick={() => scrollTo("section-3")}
            className="nav-link opacity-0 flex items-center cursor-pointer gap-4 group"
          >
            <div
              className={`h-0.5 bg-white group-hover:w-12 duration-150 ease-in-out ${
                activeSection === "section-3" ? "w-10" : "w-6"
              }`}
            />
            <span>Experience</span>
          </li>
          <li
            onClick={() => scrollTo("section-4")}
            className="nav-link opacity-0 flex items-center cursor-pointer gap-4 group"
          >
            <div
              className={`h-0.5 bg-white group-hover:w-12 duration-150 ease-in-out ${
                activeSection === "section-4" ? "w-10" : "w-6"
              }`}
            />
            <span>Projects</span>
          </li>
          <li
            onClick={() => scrollTo("section-5")}
            className="nav-link opacity-0 flex items-center cursor-pointer gap-4 group"
          >
            <div
              className={`h-0.5 bg-white group-hover:w-12 duration-150 ease-in-out ${
                activeSection === "section-5" ? "w-10" : "w-6"
              }`}
            />
            <span>Contact</span>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex items-center gap-8">
          <li className="social-link opacity-0">
            <a href="">Fiverr</a>
          </li>
          <li className="social-link opacity-0">
            <a href="">Upwork</a>
          </li>
          <li className="social-link opacity-0">
            <a href="">Github</a>
          </li>
          <li className="social-link opacity-0">
            <a href="">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
