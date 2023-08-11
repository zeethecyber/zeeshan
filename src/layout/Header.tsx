import Link from "next/link";

function Header() {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-8 sm:px-20">
      <div className="flex justify-between items-center text-white backdrop-blur-md">
        <Link href={"/"} className="text-lg font-bold">
          Zeeshan Asif
        </Link>
        <div className="md:flex gap-12 hidden">
          <Link href={"/"} className="heading-before">
            home
          </Link>
          <Link href={"/"} className="heading-before">
            about
          </Link>
          <Link href={"/"} className="heading-before">
            works
          </Link>
          <Link href={"/"} className="heading-before">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
