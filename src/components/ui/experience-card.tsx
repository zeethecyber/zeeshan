type Props = {
  title: string;
  company: string;
  date: string;
  description: string;
};

export default function ExperienceCard({
  title,
  company,
  date,
  description,
}: Props) {
  return (
    <div className="rounded-lg border border-white/35 bg-white/10 backdrop-blur-md p-4 opacity-0 translate-y-8 experience-card">
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="font-medium">
        {company} | {date}
      </p>
      <p className="mt-2">{description}</p>
    </div>
  );
}
