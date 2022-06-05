import { skillsData } from "@data/skills";
import Image from "next/image";
import React from "react";

interface SkillSetProps {}

const SkillSet: React.FC<SkillSetProps> = () => {
  return (
    <div className="min-w-[80px] flex flex-row lg:flex-col justify-between items-center bg-indigo-100 dark:bg-indigo-600 rounded-md dark:shadow-md p-2">
      {skillsData.map((skill) => (
        <div key={skill.id} className="my-2">
          <Image src={skill.src} width="40px" height={skill.height} />
        </div>
      ))}
    </div>
  );
};

SkillSet.displayName = "SkillSet";

export default SkillSet;
