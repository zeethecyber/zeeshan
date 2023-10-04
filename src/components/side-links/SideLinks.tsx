import Link from "next/link";
import GithubIcon from "../../icons/github";
import InstagramIcon from "../../icons/instagram";
import LinkedInIcon from "../../icons/linkedin";
import TwitterIcon from "../../icons/twitter";
import FiverrIcon from "../../icons/fiverr";

function SideLinks() {
  return (
    <div className="fixed left-0 top-0 px-6 hidden sm:flex flex-col gap-6 items-center">
      <div className="h-40 w-[1px] bg-white"></div>
      <Link href="https://www.linkedin.com/in/zeeshan-008/" target="_blank">
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
      <Link
        target="_blank"
        href={"https://www.fiverr.com/zeeshan_016"}
        className="mt-6 rotate-90"
      >
        <FiverrIcon className="fill-white h-6 hover:fill-[#1DBF73] duration-150" />
      </Link>
    </div>
  );
}

export default SideLinks;
