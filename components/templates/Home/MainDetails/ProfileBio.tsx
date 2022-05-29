import Paragraph from "components/atoms/Paragraph/Paragraph";
import React from "react";

interface ProfileBioProps {}

const ProfileBio: React.FC<ProfileBioProps> = () => {
  return (
    <Paragraph className="text-graphite01 text-sm lg:ml-7">
      Learn Cricket with Sachin Tendulkar Learn Cricket with Sachin
      TendulkarLearn Cricket with Sachin TendulkarLearn Cricket with Sachin
      Tendulkar
    </Paragraph>
  );
};

ProfileBio.displayName = "ProfileBio";

export default ProfileBio;
