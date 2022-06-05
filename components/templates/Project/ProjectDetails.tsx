import Badge from "components/atoms/Badge/Badge";
import Button from "components/atoms/Button/Button";
import H4 from "components/atoms/H4";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import React from "react";
import { BUTTON_VARIANTS } from "shared/enums/button";

interface ProjectDetailsProps {
  technologies: string[];
  details: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  technologies,
  details,
}) => {
  return (
    <div className="order-3 lg:order-2 row-span-2">
      <div className="border-y border-graphite02 py-3 mb-10">
        <H4 className="mb-2">Technologies used</H4>
        <div className="flex">
          {technologies.map((tech) => (
            <React.Fragment key={tech}>
              <Badge className="text-center mr-4">{tech}</Badge>
            </React.Fragment>
          ))}
        </div>
      </div>
      <Paragraph className="max-w-lg">{details}</Paragraph>
      <div className="flex mt-9">
        <Button className="mr-4 w-32">Visit</Button>
        <Button variant={BUTTON_VARIANTS.STROKE} className="w-32">
          Source
        </Button>
      </div>
    </div>
  );
};

ProjectDetails.displayName = "ProjectDetails";

export default ProjectDetails;
