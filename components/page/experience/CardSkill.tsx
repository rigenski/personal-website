interface SkillProps {
  skill: string;
}

const CardSkill = (props: SkillProps) => {
  const { skill } = props;

  return (
    <div className="px-2 py-4 w-1/2 sm:w-1/3 md:w-1/4">
      <div className="bg-white shadow-md rounded p-4 text-center transform hover:-translate-y-2 dark:bg-black dark:hover:bg-gray-800">
        <i
          className={`devicon-${skill.toLowerCase()}-plain colored text-6xl`}
        ></i>
        <h6 className="mt-2 text-xl font-bold dark:text-white">{skill}</h6>
      </div>
    </div>
  );
};

export default CardSkill;
