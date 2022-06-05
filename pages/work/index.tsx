import MainLayout from "components/layouts/MainLayout";
import React from "react";
import Head from "next/head";
import H1 from "components/atoms/H1";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Button from "components/atoms/Button/Button";
import { BUTTON_VARIANTS } from "shared/enums/button";
import ProjectsGrid from "components/templates/Work/ProjectsGrid";
import PageActions from "components/organisms/PageActions";

interface WorkProps {}

const Work: React.FC<WorkProps> = () => {
  return (
    <MainLayout hasContainer={false}>
      <Head>
        <title>My work so far</title>
        <meta name="description" content="Projects by Aniketh Nair" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-8 md:pt-12 lg:pt-20 bg-portfolioBlack">
        <div className="container">
          <div className="flex justify-between items-center">
            <H1 className="!text-6xl !text-graphite03 mb-7">My work so far.</H1>
            <PageActions />
          </div>

          <Paragraph className="max-w-lg">
            Sample reservation form to be provided for the concept and further
            design...
          </Paragraph>
          <div className="flex mt-7">
            <Button className="mr-4 !bg-white !text-slate">Drop a mail</Button>
            <Button variant={BUTTON_VARIANTS.STROKE} className="text-white">Download CV</Button>
          </div>
        </div>
        <div className="mt-20 bg-white dark:bg-eventgrabBlack pb-6 pt-5">
          <div className="container">
          <ProjectsGrid />
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

Work.displayName = "Work";

export default Work;
