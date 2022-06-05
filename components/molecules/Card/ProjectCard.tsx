import { SLATE, WHITE } from "@constants/styleConstants/colors.constants";
import { CopyIcon } from "components/icons";
import Link from "next/link";
import React from "react";
import {useTheme} from 'next-themes'

interface ProjectCardProps {
  title: string;
  description: string;
  projectLink: string;
  footnote: string;
  thumbnail: string;
  showGradient?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  projectLink,
  thumbnail,
  footnote,
  showGradient
}) => {
  const {theme} = useTheme()

  return (
    <div>
      <Link href={projectLink}>
        <a className="relative shadow-gray-400 dark:shadow-indigo-600 dark:shadow-lg shadow-xl block border border-gray-300 group overflow-hidden bg-gray-500 rounded-xl max-h-80 h-full">
          {showGradient &&
          <span className="absolute gradient-card z-10 inset-x-0 bottom-0 h-1.5" style={{background: `linear-gradient(90deg, #3d5afe 0%, #84ffff 100%)`,backgroundSize: "200% 200%"}}></span>
          }
          <img
            className="shadow-inner object-cover w-full h-full transition-all duration-500 opacity-95  group-hover:opacity-50 group-hover:scale-105"
            src={thumbnail}
            alt=""
          />
          <div className="absolute z-10 inline-flex items-center text-xs font-semibold text-white rounded-full right-4 top-4">
            <div className="bg-white border border-graphite03 shadow-gray-400 dark:bg-portfolioBlack flex justify-center items-center rounded-full p-1 h-9 w-9 shadow">
              <CopyIcon color={theme === 'dark'? WHITE:SLATE} />
            </div>
          </div>

          <div className="absolute p-8 pt-40 text-white bg-opacity-40 bottom-0 w-full">
            <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
              <p className="text-sm text-white">
                {footnote}
              </p>
            </div>
          </div>
        </a>
      </Link>
      <div className="pt-6">
        <h5 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h5>
        <p className="mt-2 text-gray-500 dark:text-graphite02 text-sm max-w-lg">{description}</p>
      </div>
    </div>
  );
};

ProjectCard.displayName = "ProjectCard";

ProjectCard.defaultProps = {
  showGradient: false
}

export default ProjectCard;
