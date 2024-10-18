"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, TextPlugin } from "gsap/all";
import { useRef } from "react";
import { ArrowDown } from "@/svg/svg-lib";
import ExperienceCard from "@/components/ui/experience-card";
import ProjectCard from "@/components/ui/project-card";

export default function Home() {
  gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);
  const container = useRef();

  useGSAP(
    () => {
      // pin left container using scroll-trigger
      ScrollTrigger.create({
        trigger: "#right-container",
        start: "top top",
        end: "bottom bottom",
        pin: "#left-container",
        // markers: true,
      });

      // animate text using gsap
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
        delay: -2,
        ease: "power1.inOut",
      });

      // animate body color on scroll
      gsap.to("body", {
        scrollTrigger: {
          trigger: "#section-1",
          start: "top top",
          end: "bottom center",
          scrub: 1,
          // markers: true,
        },
        backgroundColor: "#FEF9F2",
        color: "#16100c",
      });

      gsap.fromTo(
        "body",
        {},
        {
          scrollTrigger: {
            trigger: "#section-3",
            start: "top bottom",
            end: "+=100px",
            scrub: 1,
            // markers: true,
          },
          backgroundColor: "#f95738",
          color: "#0a0a0a",
          onStart: () => {
            gsap.to(".heading", {
              text: {
                value: "Experience",
              },
              duration: 0.5,
              ease: "power1.inOut",
            });
            gsap.to(".subheading", {
              text: {
                value: "My Work Experience",
              },
              duration: 0.8,
              ease: "power1.inOut",
            });
            gsap.to(".helper-text", {
              text: {
                value:
                  "Here are some of the projects I've worked on and the roles I've held.",
              },
              duration: 1.5,
              ease: "power1.inOut",
            });
          },
          onReverseComplete: () => {
            gsap.to(".heading", {
              text: {
                value: "Zeeshan Asif",
              },
              duration: 0.5,
              ease: "power1.inOut",
            });
            gsap.to(".subheading", {
              text: {
                value: "Senior Software Engineer",
              },
              duration: 0.8,
              ease: "power1.inOut",
            });
            gsap.to(".helper-text", {
              text: {
                value:
                  "I build web applications using modern technologies and make my clients happy.",
              },
              duration: 1.5,
              ease: "power1.inOut",
            });
          },
        }
      );

      gsap.fromTo(
        "body",
        {},
        {
          scrollTrigger: {
            trigger: "#section-4",
            start: "top center",
            end: "+=100px",
            scrub: 1,
            // markers: true,
          },
          backgroundColor: "#242423",
          color: "#FEF9F2",
          onStart: () => {
            gsap.to(".heading", {
              text: {
                value: "Projects",
              },
              duration: 0.5,
              ease: "power1.inOut",
            });
            gsap.to(".subheading", {
              text: {
                value: "My Recent Projects",
              },
              duration: 0.8,
              ease: "power1.inOut",
            });
            gsap.to(".helper-text", {
              text: {
                value: "Here are some of the projects I've worked on.",
              },
              duration: 1.5,
              ease: "power1.inOut",
            });
          },
          onReverseComplete: () => {
            gsap.to(".heading", {
              text: {
                value: "Experience",
              },
              duration: 0.5,
              ease: "power1.inOut",
            });
            gsap.to(".subheading", {
              text: {
                value: "My Work Experience",
              },
              duration: 0.8,
              ease: "power1.inOut",
            });
            gsap.to(".helper-text", {
              text: {
                value:
                  "Here are some of the projects I've worked on and the roles I've held.",
              },
              duration: 1.5,
              ease: "power1.inOut",
            });
          },
        }
      );

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
    },
    {
      scope: container.current,
    }
  );

  return (
    <div ref={container}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8 px-12">
        <div className="h-screen" id="left-container">
          <div className="py-20 flex flex-col justify-between h-full">
            <div>
              <h1 className="text-7xl font-bold heading">ZEETHECYBER</h1>
              <h2 className="text-3xl font-medium mt-4 subheading opacity-0"></h2>
              <p className="mt-4 helper-text opacity-0"></p>
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
        <div id="right-container">
          {/* Section 1 */}
          <section
            id="section-1"
            className="h-screen flex flex-col justify-center items-center gap-8"
          >
            <span className="scroll-text opacity-0">Scroll Down</span>
            <ArrowDown className="size-8 scroll-text opacity-0 animate-bounce" />
          </section>

          {/* Section 2 */}
          <section className="text-xl font-light tracking-wider text-justify grid gap-4">
            <p className="font-semibold">Hello People! 👋🏻</p>
            <p>
              My journey in the tech world began back in{" "}
              <span className="font-medium">2021</span> while I was still
              pursuing my degree. I vividly remember the excitement of landing
              my first gig on <span className="font-medium">Fiverr</span>, even
              if it was just for <span className="font-medium">$10</span>. Since
              then, I&apos;ve had the pleasure of collaborating with numerous
              clients and teams, helping build everything from small-scale
              projects to full-fledged{" "}
              <span className="font-medium">web and mobile applications</span>.
            </p>
            <p>
              Today, I&apos;m a{" "}
              <span className="font-medium">full-time freelancer</span>, and I
              also take on the role of{" "}
              <span className="font-medium">Project Manager</span> at Deversiti
              IT Solutions. My current focus is on expanding my{" "}
              <span className="font-medium">skills in Web 3</span> technologies,
              and I’m always eager to learn and tackle new challenges.{" "}
              <span className="font-medium">Coding and problem-solving</span>{" "}
              aren&apos;t just my job—they’re my passion. That dedication and
              love for what I do are what I bring to every project, and
              it&apos;s my{" "}
              <span className="font-medium">clients&apos; appreciation ❤️</span>{" "}
              that drives me to keep pushing forward.
            </p>
            <p>
              When I’m not in front of a screen, you’ll find me out for a walk,
              catching up with friends and family, or just enjoying some
              downtime.
            </p>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="mt-40 grid gap-6">
            <ExperienceCard
              title="Project Manager | Full-Stack Developer"
              company="Deversiti IT Solutions"
              date="Mar 2024 - Present"
              description={`
                Lead a team of 5 developers to deliver high-quality web and mobile applications.
                Collaborate with clients to understand their needs and provide solutions that meet their requirements.
                Manage project timelines, budgets, and resources to ensure successful project delivery.
                `}
            />
            <ExperienceCard
              title="Full-Stack Developer"
              company="Creative Frontiers"
              date="Jan 2024 - Mar 2024"
              description={`
                Developed web applications using React, Node.js, and MongoDB.
                Worked closely with designers and product managers to create user-friendly interfaces.
                Conducted code reviews and implemented best practices to ensure high-quality code.
                `}
            />
            <ExperienceCard
              title="Mobile App Developer"
              company="WAAN Tech"
              date="Mar 2023 - Sep 2023"
              description={`
                Developed mobile applications for iOS and Android using React Native.
                Integrated third-party APIs and services to enhance app functionality.
                Conducted user testing and gathered feedback to improve app performance.                
                `}
            />
          </section>

          {/* Section 4 */}
          <section id="section-4">
            <div className="mt-40 grid gap-12">
              <ProjectCard
                title="Hewlett Packard Enterprise"
                description="Developed a web application for managing customer data and generating reports."
                imageUrl="https://cdn.prod.website-files.com/5825f89e8ad305816466d37f/5ffe158e2c91180d4e49385e_hub-tile.jpg"
              />
              <ProjectCard
                title="Olive Tile"
                description="Designed and developed a mobile app for tracking fitness goals and progress."
                imageUrl="https://cdn.prod.website-files.com/5825f89e8ad305816466d37f/5ffe1396a182a666dd3dde6f_oliv-tile.jpg"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
