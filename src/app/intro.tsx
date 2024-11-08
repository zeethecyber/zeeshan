import { ArrowDown } from "@/svg/svg-lib";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section
      id="section-intro"
      className="min-h-screen hidden lg:flex flex-col justify-between items-center gap-8 py-20"
    >
      <div className="scroll-text opacity-0 relative group">
        <Image
          src={"/images/zeeshan-bg.png"}
          alt="Zeeshan Asif | Full Stack Developer"
          className=" rounded-lg relative z-10 duration-200 cursor-pointer grayscale group-hover:grayscale-0"
          height={300}
          width={300}
        />
        <div className="rounded-lg absolute size-full bg-primary top-2 left-2 group-hover:top-1 group-hover:left-1 duration-200"></div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <span className="scroll-text opacity-0">Scroll Down</span>
        <ArrowDown className="size-8 scroll-text opacity-0 animate-bounce" />
      </div>
    </section>
  );
}
