import Image from "next/image";
import React from "react";

interface ProjectCardProps {}

const ProjectCard: React.FC<ProjectCardProps> = () => {
  return (
      <div>
    <a
      href=""
      className="relative block group overflow-hidden bg-gray-900 rounded-xl"
    >
      <img
        className="absolute inset-0 shadow-inner object-cover w-full h-full transition-all duration-500 opacity-75  group-hover:opacity-50 group-hover:scale-105"
        src="https://www.hyperui.dev/photos/beach-1.jpeg"
        alt=""
      />
      <div className="absolute z-10 inline-flex items-center text-xs font-semibold text-white rounded-full right-4 top-4">
          <div className="bg-white rounded-full p-1 h-10 w-10 shadow-2xl">
          <Image src="/svgs/copy.svg" width="28px" height="28px" />
          </div>
      </div>

      <div className="relative p-8 pt-40 text-white bg-black bg-opacity-40">
        <div className="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0">
          <p className="text-sm text-white">
            NextJs · Typescript · Emotion (Css)
          </p>
        </div>
      </div>
    </a>
    <div className="py-4">
    <h5 className="text-lg font-bold text-gray-900">
      Unacademy Icons
    </h5>
    <p className="mt-2 text-gray-500 text-sm">
    Learn Cricket with Sachin Tendulkar
    </p>
  </div>
    </div>
  );
};

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
