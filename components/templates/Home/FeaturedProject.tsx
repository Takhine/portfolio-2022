import { unacademyIconsData } from "@data/unacademyIcons";
import H2 from "components/atoms/H2";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import ProjectCard from "components/molecules/Card/ProjectCard";
import React from "react";

interface FeaturedProjectProps {}

const FeaturedProject: React.FC<FeaturedProjectProps> = () => {
  return (
    <section className="order-3 col-span-3 row-span-1 lg:col-span-3 lg:row-span-2 ">
      <div className="flex justify-between mb-5">
        <H2>Featured</H2>{" "}
        <Paragraph className="text-sm font-bold text-gray-700">
          View all
        </Paragraph>
      </div>
      <ProjectCard
        title={unacademyIconsData.title}
        description={unacademyIconsData.description}
        projectLink={unacademyIconsData.projectLink}
        showGradient
        thumbnail={unacademyIconsData.thumbnail}
      />
    </section>
  );
};

FeaturedProject.displayName = "FeaturedProject";

export default FeaturedProject;
