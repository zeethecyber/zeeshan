import Link from "next/link";
import GithubIcon from "../icons/github";
import LinkedInIcon from "../icons/linkedin";
import TwitterIcon from "../icons/twitter";
import InstagramIcon from "../icons/instagram";

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
            <LinkedInIcon className="h-6 w-6 fill-white" />
            <GithubIcon className="h-6 w-6 fill-white" />
            <TwitterIcon className="h-6 w-6 fill-white" />
            <InstagramIcon className="h-6 w-6 fill-white" />
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
