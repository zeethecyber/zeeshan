import Link from "next/link";
import GithubIcon from "../icons/github";
import LinkedInIcon from "../icons/linkedin";
import TwitterIcon from "../icons/twitter";
import InstagramIcon from "../icons/instagram";
import FiverrIcon from "../icons/fiverr";

function Footer() {
  return (
    <div className="py-12 border-t border-gray-1">
      <div className="max-w-screen-xl mx-auto px-8 sm:px-20">
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <div className="flex flex-wrap gap-x-4 items-center">
            <h4 className="text-white font-bold text-md">Zeeshan Asif</h4>
            <Link
              href={"mailto:zeeshanasif0007@gmail.com"}
              className="text-gray-1"
            >
              zeeshanasif0007@gmail.com
            </Link>
          </div>
          <div className="flex gap-4">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/zeeshan-008/"}
            >
              <LinkedInIcon className="h-6 w-6 fill-white hover:fill-[#0A66C2] duration-150" />
            </Link>
            <Link target="_blank" href={"https://github.com/Zeeshan044"}>
              <GithubIcon className="h-6 w-6 fill-white" />
            </Link>
            <Link target="_blank" href={"https://twitter.com/ZeeshanAsif01"}>
              <TwitterIcon className="h-6 w-6 fill-white hover:fill-[#1D9BF0] duration-150" />
            </Link>
            <Link target="_blank" href={"https://www.instagram.com/dear_zee_/"}>
              <InstagramIcon className="h-6 w-6 fill-white hover:fill-[#E4405F] duration-150" />
            </Link>
            <Link target="_blank" href={"https://www.fiverr.com/zeeshan_016"}>
              <FiverrIcon className="fill-white h-6 hover:fill-[#1DBF73] duration-150" />
            </Link>
          </div>
        </div>
        <p className="text-center text-white text-xs mt-8">
          &copy;Copyright 2023. Made by Zeeshan Asif. Designed by{" "}
          <Link
            href={
              "https://www.figma.com/community/file/1164933568884615740/Portfolio"
            }
            target="_blank"
            className="underline"
          >
            Elias
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
