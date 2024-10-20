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
    <div className="border-y border-white p-4 opacity-0 translate-y-8 experience-card">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="font-medium">
        {company} | {date}
      </p>
      <p className="mt-2">{description}</p>
    </div>
  );
}
