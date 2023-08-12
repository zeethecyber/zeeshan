import GithubIcon from "../../icons/github";
import InstagramIcon from "../../icons/instagram";
import LinkedInIcon from "../../icons/linkedin";
import TwitterIcon from "../../icons/twitter";

function SideLinks() {
  return (
    <div className="fixed left-0 top-0 px-6 hidden sm:flex flex-col gap-6 items-center">
      <div className="h-40 w-[1px] bg-white"></div>
      <LinkedInIcon className="h-6 w-6 fill-white" />
      <GithubIcon className="h-6 w-6 fill-white" />
      <TwitterIcon className="h-6 w-6 fill-white" />
      <InstagramIcon className="h-6 w-6 fill-white" />
    </div>
  );
}

export default SideLinks;
