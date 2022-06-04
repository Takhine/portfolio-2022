import MainLayout from "components/layouts/MainLayout";
import React from "react";
import Head from "next/head";
import H1 from "components/atoms/H1";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import Button from "components/atoms/Button/Button";
import { BUTTON_VARIANTS } from "shared/enums/button";
import { CopyIcon, ShareIcon } from "components/icons";
import { GRAPHITE_01 } from "@constants/styleConstants/colors.constants";
import Tooltip from "components/atoms/Tooltip";
import ProjectCard from "components/molecules/Card/ProjectCard";
import Tabs from "components/molecules/Tabs/Tabs";
import { workTabs } from "@data/projects";
import { Tab } from "@headlessui/react";
import ProjectsGrid from "components/templates/Work/ProjectsGrid";

interface WorkProps {}

const Work: React.FC<WorkProps> = () => {
  return (
    <MainLayout>
      <Head>
        <title>My work so far</title>
        <meta name="description" content="Projects by Aniketh Nair" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-8 md:mt-12 lg:mt-20">
        <div>
          <div className="flex justify-between items-center">
            <H1 className="!text-6xl !text-graphite03 mb-7">My work so far.</H1>
            <div className="flex">
              <Tooltip content="Share this page">
                <ShareIcon color={GRAPHITE_01} className="cursor-pointer" />
              </Tooltip>
              <Tooltip content="Copy page link">
                <CopyIcon color={GRAPHITE_01} className="ml-4 cursor-pointer" />
              </Tooltip>
            </div>
          </div>

          <Paragraph className="max-w-lg">
            Sample reservation form to be provided for the concept and further
            design...
          </Paragraph>
          <div className="flex mt-7">
            <Button className="mr-4">Drop a mail</Button>
            <Button variant={BUTTON_VARIANTS.STROKE}>Download CV</Button>
          </div>
        </div>
        <div className="mt-20">
          <Tabs tabs={workTabs} tabContent={[<ProjectsGrid />, <div>2</div>]} />
        </div>
      </main>
    </MainLayout>
  );
};

Work.displayName = "Work";

export default Work;
