import ProjectNavbar from "components/organisms/Navbars/ProjectNavbar";
import React from "react";

interface ProjectLayoutProps {
  title: string;
  children: React.ReactNode;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ title, children }) => {
  return (
    <div>
      <ProjectNavbar title={title} />
      <div className="container">{children}</div>
    </div>
  );
};

ProjectLayout.displayName = "ProjectLayout";

export default ProjectLayout;
