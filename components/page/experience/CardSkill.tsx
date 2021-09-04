import React from "react";
import Image from "next/image";

interface SkillDetail {
  name: string;
  image: string;
}

interface SkillProps {
  skill: SkillDetail;
}

const CardSkill = (props: SkillProps) => {
  const { skill } = props;

  return (
    <div className="p-2 w-1/2 sm:w-1/3 md:w-1/4">
      <div className="bg-white shadow-md rounded p-4 dark:bg-black">
        <img src={skill.image} className="h-24 mx-auto" alt="" />
        <h6 className="mt-2 text-xl font-bold text-center dark:text-white">
          {skill.name}
        </h6>
      </div>
    </div>
  );
};

export default CardSkill;
