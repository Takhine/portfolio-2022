import { projectsData } from "@data/projects";
import ProjectCard from "components/molecules/Card/ProjectCard";
import React from "react";

interface ProjectsGridProps {}

const ProjectsGrid: React.FC<ProjectsGridProps> = () => {
  return (
    <div className="grid grid-cols-2 gap-12 mt-12">
      {Object.values(projectsData).map((project) => (
        <React.Fragment key={project.title}>
          <ProjectCard
            title={project.title}
            description={project.description}
            projectLink={project.projectLink}
            thumbnail={project.thumbnail}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

ProjectsGrid.displayName = "ProjectsGrid";

export default ProjectsGrid;
