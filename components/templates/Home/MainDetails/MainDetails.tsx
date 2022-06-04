import GradientCard from "components/molecules/Card/GradientCard";
import React from "react";
import ProfileBio from "./ProfileBio";
import ProfileHeading from "./ProfileHeading";
import ProfilePicture from "./ProfilePicture";
import SkillSet from "./SkillSet";

interface MainDetailsProps {}

const MainDetails: React.FC<MainDetailsProps> = () => {
  return (
    <div className="col-span-3 row-span-3 lg:row-end-3 lg:col-span-2 order-2 lg:order-1">
      <GradientCard className="h-full">
        <div className="flex justify-start mb-4">
          <ProfilePicture />
          <ProfileHeading />
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between">
          <SkillSet />
          <ProfileBio />
        </div>
      </GradientCard>
    </div>
  );
};

MainDetails.displayName = "MainDetails";

export default MainDetails;
