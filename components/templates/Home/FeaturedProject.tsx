import { graphyData } from "@data/graphy";
import H2 from "components/atoms/H2";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import ProjectCard from "components/molecules/Card/ProjectCard";
import React from "react";

interface FeaturedProjectProps {}

const FeaturedProject: React.FC<FeaturedProjectProps> = () => {
  return (
    <section className="order-3 col-span-3 row-span-1 lg:col-span-4 lg:row-span-2 ">
      <div className="flex justify-between mb-5">
        <H2 className="text-graphite03">Latest project</H2>{" "}
        <Paragraph className="text-sm cursor-pointer font-bold !text-white rounded-md mb-0 flex items-center px-2">
          View all
        </Paragraph>
      </div>
      <ProjectCard
        title={graphyData.title}
        description={graphyData.description}
        projectLink={graphyData.projectLink}
        footnote={graphyData.footnote}
        thumbnail={graphyData.thumbnail}
      />
    </section>
  );
};

FeaturedProject.displayName = "FeaturedProject";

export default FeaturedProject;
