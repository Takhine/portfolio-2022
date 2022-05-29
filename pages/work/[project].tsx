import { projectsData } from "@data/projects";
import { ProjectType } from "@shared-types/project.types";
import ProjectLayout from "components/layouts/ProjectLayout";
import { GetServerSideProps } from "next";
import React from "react";

interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <ProjectLayout>
      {project.title}
    </ProjectLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const projectSlug = query.project as string;

  //   TODO: Switch to backend API
  const project = projectSlug && projectsData[projectSlug];

  if (project === undefined) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
};

Project.displayName = "Project page";

export default Project;
