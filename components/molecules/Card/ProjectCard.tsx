import { SLATE } from "@constants/styleConstants/colors.constants";
import { CopyIcon } from "components/icons";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  projectLink: string;
  thumbnail: string;
  showGradient?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  projectLink,
  thumbnail,
  showGradient
}) => {
  return (
    <div>
      <Link href={projectLink}>
        <a className="relative block shadow-gray-400 shadow-lg group overflow-hidden bg-gray-800 rounded-xl">
          {showGradient &&
          <span className="absolute gradient-card z-10 inset-x-0 bottom-0 h-1.5" style={{background: `linear-gradient(90deg, #3d5afe 0%, #84ffff 100%)`,backgroundSize: "200% 200%"}}></span>
          }
          <img
            className="shadow-inner object-cover w-full h-full transition-all duration-500 opacity-75  group-hover:opacity-50 group-hover:scale-105"
            src={thumbnail}
            alt=""
          />
          <div className="absolute z-10 inline-flex items-center text-xs font-semibold text-white rounded-full right-4 top-4">
            <div className="bg-white flex justify-center items-center rounded-full p-1 h-9 w-9 shadow-2xl">
              <CopyIcon color={SLATE} />
            </div>
          </div>

          <div className="absolute p-8 pt-40 text-white bg-opacity-40 bottom-0 w-full">
            <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <p className="text-sm text-white">
                NextJs · Typescript · Emotion (Css)
              </p>
            </div>
          </div>
        </a>
      </Link>
      <div className="pt-6">
        <h5 className="text-lg font-bold text-gray-900">{title}</h5>
        <p className="mt-2 text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};

ProjectCard.displayName = "ProjectCard";

ProjectCard.defaultProps = {
  showGradient: false
}

export default ProjectCard;
