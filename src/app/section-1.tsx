import { ArrowDown } from "@/svg/svg-lib";
import Image from "next/image";

export default function Section1() {
  return (
    <section
      id="section-1"
      className="min-h-screen hidden lg:flex flex-col justify-between items-center gap-8 py-20"
    >
      <div className="scroll-text opacity-0 relative group">
        <Image
          src={"/images/zeeshan-bg.png"}
          alt="Zeeshan Asif | Full Stack Developer"
          className="grayscale relative z-10 duration-200 cursor-pointer group-hover:grayscale-0"
          height={300}
          width={300}
        />
        <div className="absolute size-full border border-foreground top-3 left-3 group-hover:top-2 group-hover:left-2 duration-200"></div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <span className="scroll-text opacity-0">Scroll Down</span>
        <ArrowDown className="size-8 scroll-text opacity-0 animate-bounce" />
      </div>
    </section>
  );
}
