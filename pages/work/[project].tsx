import { projectsData } from "@data/projects";
import { ProjectType } from "@shared-types/project.types";
import H1 from "components/atoms/H1";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import ProjectLayout from "components/layouts/ProjectLayout";
import PageActions from "components/organisms/PageActions";
import ProjectDetails from "components/templates/Project/ProjectDetails";
import ProjectPreview from "components/templates/Project/ProjectPreview";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";

interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <ProjectLayout title={project.title}>
      <Head>
        <title>Aniketh's Project | {project.title}</title>
        <meta name="description" content={project.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-8 md:mt-12 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-y-4 lg:gap-y-6 lg:gap-x-20">
        <div className="row-end-1 order-1">
          <div className="flex justify-between items-center">
            <H1 className="text-2xl mb-8">{project.title}</H1>
            <PageActions />
          </div>
          <Paragraph className="mb-8">{project.description}</Paragraph>
        </div>

        <ProjectDetails {...project} />
        <ProjectPreview previews={project.previews} />
      </main>
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
