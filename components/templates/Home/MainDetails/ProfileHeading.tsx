import React from "react";
import ProfileTags from "./ProfileTags";

interface ProfileHeadingProps {}

const ProfileHeading: React.FC<ProfileHeadingProps> = () => {
  return (
    <div>
      <ProfileTags />
    </div>
  );
};

ProfileHeading.displayName = "ProfileHeading";

export default ProfileHeading;
