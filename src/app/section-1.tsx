import { ArrowDown } from "@/svg/svg-lib";

export default function Section1() {
  return (
    <section
      id="section-1"
      className="h-screen flex flex-col justify-center items-center gap-8"
    >
      <span className="scroll-text opacity-0">Scroll Down</span>
      <ArrowDown className="size-8 scroll-text opacity-0 animate-bounce" />
    </section>
  );
}
