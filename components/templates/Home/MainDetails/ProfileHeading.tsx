import H4 from "components/atoms/H4";
import Paragraph from "components/atoms/Paragraph/Paragraph";
import React from "react";
import ProfileTags from "./ProfileTags";

interface ProfileHeadingProps {}

const ProfileHeading: React.FC<ProfileHeadingProps> = () => {
  return (
    <div className="ml-6 w-full">
      <H4 className="mb-2">Aniketh Nair</H4>
      <Paragraph className="text-xs">Senior Software Engineer @ <b>Graphy</b></Paragraph>
      <ProfileTags />
    </div>
  );
};

ProfileHeading.displayName = "ProfileHeading";

export default ProfileHeading;
