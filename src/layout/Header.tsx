import Link from "next/link";

function Header() {
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
            href={"/"}
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
      </div>
    </div>
  );
}

export default Header;
