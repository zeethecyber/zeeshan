import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import Button from "./button";
import { useAppContext } from "@/context/app-context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Modal() {
  const { closeModal, modalData, modalOpen } = useAppContext();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      if (modalOpen) {
        tl.to("#modal-wrapper", {
          display: "flex",
          opacity: 1,
          duration: 0.1,
        })
          .to("#modal-container", {
            translateY: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power1.inOut",
          })
          .to("#modal-innerContainer", {
            backdropFilter: "blur(64px)",
            duration: 0.2,
          });
      } else {
        tl.to("#modal-innerContainer", {
          backdropFilter: "blur(24px)",
          duration: 0.2,
        })
          .to("#modal-container", {
            translateY: 160,
            opacity: 0,
            duration: 0.3,
            ease: "power1.inOut",
          })
          .to("#modal-wrapper", {
            display: "none",
            opacity: 0,
            duration: 0.1,
          });
      }
    },
    {
      dependencies: [modalOpen],
    }
  );

  return (
    <div
      id="modal-wrapper"
      className="hidden opacity-0 fixed inset-0 items-center justify-center p-8 text-white z-50"
    >
      <div
        id="modal-container"
        className="w-full max-w-6xl relative translate-y-40 opacity-0"
      >
        <div
          id="modal-innerContainer"
          className="bg-white/10 border border-white/35 rounded-xl p-6"
        >
          <button className="absolute top-1.5 right-1.5" onClick={closeModal}>
            <X />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-4xl text-primary font-semibold">
                  {modalData?.title}
                </h2>
                <p className="mt-8">{modalData?.description}</p>
              </div>
              <div>
                <ul className="mt-4 flex flex-wrap items-center gap-4 text-sm">
                  {modalData?.technologies.map((tech, index) => (
                    <li
                      key={index}
                      className="bg-secondary backdrop-blur-md text-foreground font-medium rounded-full px-4 py-1 cursor-pointer hover:bg-foreground hover:text-background duration-100"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex mt-4">
                  <Button size={"sm"}>
                    <a
                      href={modalData?.live}
                      className="flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Visit Website</span>
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={modalData?.image || ""}
                alt=""
                className="aspect-square rounded-xl"
                width={500}
                height={500}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
