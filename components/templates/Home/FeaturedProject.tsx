import Paragraph from "components/atoms/Paragraph/Paragraph";
import ProjectCard from "components/molecules/Card/ProjectCard";
import React from "react";

interface FeaturedProjectProps {}

const FeaturedProject: React.FC<FeaturedProjectProps> = () => {
  return (
    <section className="order-3 col-span-3 row-span-1 lg:col-span-2 lg:row-span-2 ">
      <div className="flex justify-between mb-5">
        <h2>Featured</h2> <Paragraph>View all</Paragraph>
      </div>
      <ProjectCard />
    </section>
  );
};

FeaturedProject.displayName = "FeaturedProject";

export default FeaturedProject;
