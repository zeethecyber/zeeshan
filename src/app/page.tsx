"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import { useRef } from "react";

export default function Home() {
  gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);
  const container = useRef();

  useGSAP(
    () => {
      const timeline = gsap.timeline();
      timeline.to(".heading", {
        text: {
          value: "Zeeshan Asif",
        },
        duration: 0.5,
        ease: "power1.inOut",
      });
      timeline.to(".subheading", {
        text: {
          value: "Senior Software Engineer",
        },
        opacity: 1,
        duration: 0.8,
        ease: "power1.inOut",
      });
      timeline.to(".helper-text", {
        text: {
          value:
            "I build web applications using modern technologies and make my clients happy.",
        },
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
      });
      timeline.to(".social-link", {
        stagger: 0.2,
        opacity: 1,
        duration: 3,
        ease: "power1.inOut",
      });
      timeline.to(".scroll-text", {
        opacity: 1,
        duration: 1,
        delay: -3,
        ease: "power1.inOut",
      });
    },
    {
      scope: container.current,
    }
  );

  return (
    <div ref={container}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8 px-20">
        <div className="h-screen">
          <div className="py-20 flex flex-col justify-between h-full">
            <div>
              <h1 className="text-7xl font-bold heading">ZEETHECYBER</h1>
              <h2 className="text-3xl font-medium mt-4 subheading opacity-0"></h2>
              <p className="text-xl mt-4 helper-text opacity-0"></p>
            </div>
            <div>
              <ul className="flex items-center gap-8">
                <li className="social-link opacity-0">
                  <a href="">Fiverr</a>
                </li>
                <li className="social-link opacity-0">
                  <a href="">Upwork</a>
                </li>
                <li className="social-link opacity-0">
                  <a href="">Github</a>
                </li>
                <li className="social-link opacity-0">
                  <a href="">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="h-screen flex justify-center items-center">
            <span className="scroll-text opacity-0">Scroll Down</span>
          </div>
          <p className="text-2xl font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            error beatae, iure cumque commodi dolorem maxime repellendus modi
            officiis sed ratione nam fugiat molestias dolor dignissimos
            aspernatur obcaecati optio deserunt neque quasi. Inventore magnam
            voluptate soluta optio nihil ex eum repellendus ratione fuga,
            voluptates asperiores. Quo numquam, ea quasi ducimus accusamus
            minima deleniti harum distinctio blanditiis? Totam quia mollitia
            eligendi, optio odio necessitatibus quis! Ipsam error incidunt
            blanditiis obcaecati! Distinctio voluptatum, possimus repellendus
            velit quia perferendis est soluta non voluptates aliquam iusto,
            tenetur eum ullam iste reprehenderit rem tempora dolores, sunt id
            vel voluptatibus maxime quae! Repellendus esse explicabo, doloribus
            autem placeat tempore! Ullam natus odio beatae velit tempora,
            debitis dignissimos, sapiente, ipsam non repudiandae placeat labore
            cum molestias obcaecati maiores animi! Sapiente nesciunt facere eius
            fuga aperiam dolorum accusamus eveniet omnis. Dolor architecto
            possimus eligendi excepturi aspernatur eius non beatae molestias
            cumque assumenda, sit necessitatibus porro in totam saepe fugiat
            quia quod inventore voluptate sapiente quas! Et, autem architecto?
            Laborum, velit dolore minus nihil cupiditate reprehenderit impedit
            architecto dicta quas eveniet neque pariatur id sint. Assumenda enim
            fugiat maxime eaque, consequatur consequuntur officia voluptas
            dolores sit totam dicta expedita ut, quis officiis beatae voluptatum
            quas exercitationem fuga? Eveniet, minima!
          </p>
        </div>
      </div>
    </div>
  );
}
