import Link from "next/link";
import { useState } from "react";

function Header() {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav((state) => !state);
  };

  return (
    <div className="max-w-screen-xl mx-auto py-8 px-8 sm:px-20">
      <div className="flex justify-between items-center text-white backdrop-blur-md">
        <Link href={"/"} className="text-lg font-bold">
          Zeeshan Asif
        </Link>
        <div className="md:flex gap-12 hidden">
          <Link
            href={"/"}
            className="heading-before hover:text-primary duration-100"
          >
            home
          </Link>
          <Link
            href={"/about"}
            className="heading-before hover:text-primary duration-100"
          >
            about
          </Link>
          <Link
            href={"/"}
            className="heading-before hover:text-primary duration-100"
          >
            works
          </Link>
          <Link
            href={"/"}
            className="heading-before hover:text-primary duration-100"
          >
            contact
          </Link>
        </div>
        <button
          className="text-white text-3xl font-semibold md:hidden"
          onClick={handleShowNav}
        >
          ==
        </button>
      </div>

      {/* Mobile Navbar */}
      <div
        className={`lg:hidden fixed top-0 h-screen w-full backdrop-blur-lg bg-black/50 z-10 duration-500 ${
          showNav ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            className="text-3xl font-semibold text-white px-4 py-2 border border-white"
            onClick={handleShowNav}
          >
            X
          </button>
        </div>
        <ul className="px-8 flex flex-col gap-8">
          <li>
            <Link
              href={"/"}
              className="heading-before text-white text-4xl font-semibold"
            >
              home
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="heading-before text-white text-4xl font-semibold"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="heading-before text-white text-4xl font-semibold"
            >
              works
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="heading-before text-white text-4xl font-semibold"
            >
              contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
