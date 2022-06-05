import { ProjectPreviewType } from "@shared-types/project.types";
import Card from "components/molecules/Card/Card";
import Image from "next/image";
import React from "react";

interface ProjectPreviewProps {
  previews: ProjectPreviewType[];
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ previews }) => {
  return (
    <div className="row-span-1 lg:row-span-2 order-2 lg:order-1">
      <div>
        <Card className="bg-gray-200 h-96 p-5 relative">
          <Image className="object-cover rounded-xl" src={previews[0].link} layout="fill" />
        </Card>
      </div>
      <div></div>
    </div>
  );
};

ProjectPreview.displayName = "ProjectPreview";

export default ProjectPreview;
