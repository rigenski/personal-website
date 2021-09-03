import Image from "next/image";
import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";

interface ProjectDetail {
  title: string;
  desc: string;
  tag: Array<any>;
}

interface ProjectProps {
  project: ProjectDetail;
  layout: boolean;
}

const CardProject = (props: ProjectProps) => {
  const { layout, project } = props;

  return (
    <div className="card__item flex flex-col mb-4 bg-white shadow-lg rounded-xl md:flex-row md:shadow-none md:mb-8 md:bg-none md:rounded-none">
      <div
        className={`card__image w-full ${
          layout ? "order-1 md:order-2" : ""
        }  md:w-2/5`}
      >
        <Image src="/img/profile.jpg" height="240" width="100%"></Image>
      </div>
      <div
        className={`w-full flex flex-col text-center justify-between p-4 ${
          layout ? "order-2 md:order-1 md:pr-8" : "md:pl-8"
        }  md:w-3/5 md:text-left md:p-0 md:pb-2 `}
      >
        <div>
          <h2 className="text-2xl font-bold md:text-3xl">{project.title}</h2>
          <p className="text-base md:text-lg">{project.desc}</p>
          <ul className="flex mt-2 justify-center md:justify-start">
            {project.tag.map((item, index) => {
              return (
                <li key={index} className="mx-1 md:mx-0 md:mr-2">
                  <div className="bg-gray-600 text-white text-sm px-2 py-1 rounded-sm">
                    {item.name}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-center mt-2 md:justify-start md:mt-0">
          <button className="flex items-center bg-gray-800 text-white px-4 py-2 rounded text-base font-medium mr-1 md:mr-0 md:text-lg">
            <FaGithub size={18} />
            <span className="ml-2">GitHub</span>
          </button>
          <button className="flex items-center bg-gray-800 text-white px-4 py-2 rounded text-base font-medium ml-1 md:ml-2  md:text-lg">
            <FaLink />
            <span className="ml-2">Demo</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
