import ExperienceCard from "@/components/ui/experience-card";

export default function ExperienceSection() {
  return (
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
  );
}
