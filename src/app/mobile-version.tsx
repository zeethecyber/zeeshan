"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import { useRef, useState } from "react";

import Section1 from "./section-1";
import Section2 from "./section-2";
import Section3 from "./section-3";
import Section4 from "./section-4";
import Section5 from "./section-5";
import Footer from "@/components/layout/footer";
import SidePanel from "@/components/layout/side-panel";

export default function MobileVersion() {
  gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);
  const container = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState("section-1");

  useGSAP(
    () => {
      // Initial text setup using GSAP timeline
      const initialTimeline = gsap.timeline();
      initialTimeline
        .to(".heading", {
          text: { value: "Zeeshan Asif" },
          duration: 0.5,
          ease: "power1.inOut",
        })
        .to(".subheading", {
          text: { value: "Senior Software Engineer" },
          opacity: 1,
          duration: 0.8,
          ease: "power1.inOut",
        })
        .to(".helper-text", {
          text: {
            value:
              "I build web applications using modern technologies and make my clients happy.",
          },
          opacity: 1,
          duration: 1.5,
          ease: "power1.inOut",
        })
        .to(".social-link", {
          stagger: 0.2,
          opacity: 1,
          duration: 1,
          delay: -2,
          ease: "power1.inOut",
        });

      // Background color change for section-6
      gsap.fromTo(
        "body",
        {},
        {
          scrollTrigger: {
            trigger: "#section-6",
            start: "top center",
            end: "+=100px",
            scrub: 1,
          },
          backgroundColor: "#011627",
          color: "#FEF9F2",
        }
      );

      // Experience card animations
      gsap.to(".experience-card", {
        scrollTrigger: {
          trigger: "#section-3",
          start: "top center",
        },
        stagger: 0.2,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power1.inOut",
      });

      gsap.utils.toArray(".project-card").forEach((card) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "top center",
            scrub: 1,
            // markers: true,
          },
          scale: 1,
        });
      });
    },
    { scope: container.current || undefined }
  );

  return (
    <div ref={container}>
      <div className="max-w-6xl mx-auto gap-8 px-8 lg:px-12">
        <div id="left-container">
          <SidePanel activeSection={activeSection} />
        </div>
        <div id="right-container">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </div>
      </div>
      <Footer />
    </div>
  );
}
