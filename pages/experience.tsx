import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import SkillCard from '../components/experience/SkillCard';
import skillsJSON from '../data/skills.json';
import achievementsJSON from '../data/achievements.json';
import worksJSON from '../data/works.json';

library.add(faTrophy);

interface ExperienceProps {
  works: Array<any>;
  achievements: Array<any>;
  skills: Array<any>;
}

const Experience = (props: ExperienceProps) => {
  const { works, achievements, skills } = props;

  return (
    <>
      <div className="container mx-auto p-4 pt-16 pb-32 max-w-screen-lg md:pt-32 md:pb-16">
        <h1 className="text-4xl font-bold text-center md:text-5xl dark:text-white">
          Experience
        </h1>
        <div className="flex flex-col mt-12">
          <div>
            <h2 className="text-3xl font-bold text-left  md:text-4xl dark:text-white">
              Works
            </h2>
            <div className="mt-8">
              <div className="relative mx-0 md:mx-12">
                <div className="border-r-8 border-black absolute h-full left-1.5 sm:left-2 top-0 dark:border-white" />
                <ul>
                  {works.map((item, index) => {
                    return (
                      <li key={index} className="mb-4">
                        <div className="flex items-center mb-0.5">
                          <div className="bg-black rounded-full h-6 w-6 dark:bg-white" />
                          <h6 className="text-lg ml-4 font-semibold md:text-xl md:ml-4 dark:text-white">
                            {item.date} | {item.title} - {item.position}
                          </h6>
                        </div>
                        <div className="ml-12 dark:text-white">{item.desc}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-right md:text-4xl dark:text-white">
              Achievements
            </h2>
            <div className="mt-8">
              <div className="mx-0 md:mx-12">
                <ul>
                  {achievements.map((item, index) => {
                    return (
                      <li key={index} className="mb-2">
                        <div className="flex items-center justify-start sm:justify-end mb-1">
                          <h6 className="order-2 sm:order-1 ml-4 sm:mr-4 text-lg font-semibold md:text-xl dark:text-white">
                            {item.name}
                          </h6>
                          <FontAwesomeIcon
                            icon={['fas', 'trophy']}
                            className="order-1 h-6 text-2xl sm:order-2 text-yellow-500"
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex justify-center">
              <h2 className="text-3xl font-bold md:text-4xl dark:text-white">
                Skills
              </h2>
            </div>
            <div className="flex flex-row flex-wrap justify-center mt-8">
              {skills.map((item, index) => {
                return <SkillCard key={index} skill={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const works = worksJSON;
  const achievements = achievementsJSON;
  const skills = skillsJSON;

  return {
    props: {
      works,
      achievements,
      skills,
    },
  };
}

export default Experience;
