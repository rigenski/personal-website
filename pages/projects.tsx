import projectsJSON from "../data/projects.json";
import ProjectCard from "../components/projects/ProjectCard";

interface ProjectsProps {
  projects: Array<any>;
}

const Home = (props: ProjectsProps) => {
  const { projects } = props;

  return (
    <>
      <div className="container mx-auto p-4 pt-16 pb-32 max-w-screen-lg md:pt-32 md:pb-16">
        <h1 className="text-4xl font-bold text-center md:text-5xl dark:text-white">
          Projects
        </h1>
        <div className="flex flex-col mt-12">
          {projects.map((item, index) => {
            if (index % 2 == 0) {
              return <ProjectCard key={index} project={item} layout={false} />;
            } else {
              return <ProjectCard key={index} project={item} layout={true} />;
            }
          })}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const projects = projectsJSON;

  return {
    props: {
      projects,
    },
  };
}

export default Home;
