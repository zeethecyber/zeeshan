interface ISkillCard {
  title: string;
  skills: string[];
}
function SkillCard({ title, skills }: ISkillCard) {
  return (
    <div className="border border-gray-1 flex flex-col">
      <div className="py-2 px-6 border-b border-gray-1">
        <h3 className="text-white text-2xl font-medium">{title}</h3>
      </div>
      <div className="py-2 px-6">
        <ul className="list-disc list-inside text-gray-1">
          {skills.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default SkillCard;
