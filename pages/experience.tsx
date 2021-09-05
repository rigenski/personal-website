import CardSkill from "../components/page/experience/CardSkill";
import skillsJSON from "../data/skills.json";

interface ExperienceProps {
  skills: Array<any>;
}

const Experience = (props: ExperienceProps) => {
  const { skills } = props;

  return (
    <>
      <div className="container mx-auto p-4 pt-16 pb-32 max-w-screen-lg md:pt-32 md:pb-16">
        <h1 className="text-4xl font-bold text-center md:text-5xl dark:text-white">
          Experience
        </h1>
        <div className="flex flex-col mt-12">
          <div>
            <h2 className="text-3xl font-bold text-left  md:text-4xl dark:text-white">
              Education
            </h2>
          </div>
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-right md:text-4xl dark:text-white">
              Achievements
            </h2>
          </div>
          <div className="mt-8">
            <div className="flex justify-center">
              <h2 className="text-3xl font-bold md:text-4xl dark:text-white">
                Skills
              </h2>
            </div>
            <div className="flex flex-row flex-wrap justify-center mt-8">
              {skills.map((item, index) => {
                return <CardSkill key={index} skill={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const skills = skillsJSON;

  return {
    props: {
      skills,
    },
  };
}

export default Experience;
