import GradientCard from "components/molecules/Card/GradientCard";
import React from "react";
import ProfileBio from "./ProfileBio";
import ProfileHeading from "./ProfileHeading";
import ProfilePicture from "./ProfilePicture";
import SkillSet from "./SkillSet";

interface MainDetailsProps {}

const MainDetails: React.FC<MainDetailsProps> = () => {
  return (
    <div className="col-span-3 row-span-3 lg:row-end-3 lg:col-span-3 order-2 lg:order-1">
      <GradientCard className="h-full" contentClassname="pb-6 sm:pb-7">
        <div className="flex justify-start mb-4 bg-indigo-50 dark:bg-opacity-0 p-6 pb-3 sm:p-7 sm:pb-4 rounded-t-md">
          <ProfilePicture />
          <ProfileHeading />
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between p-6 pt-3 sm:p-7 sm:pt-4">
          <SkillSet />
          <ProfileBio />
        </div>
      </GradientCard>
    </div>
  );
};

MainDetails.displayName = "MainDetails";

export default MainDetails;
