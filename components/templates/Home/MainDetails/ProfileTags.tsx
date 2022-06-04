import Badge from "components/atoms/Badge/Badge";
import React from "react";

interface ProfileTagsProps {}

const ProfileTags: React.FC<ProfileTagsProps> = () => {
  return (
    <div className="my-3 flex justify-items-start items-center pb-4 border-b border-graphite02">
      <Badge>Web dev</Badge>
      <Badge className="ml-3">Start-ups</Badge>
      <Badge className="ml-3">Ed tech</Badge>
    </div>
  );
};

ProfileTags.displayName = "ProfileTags";

export default ProfileTags;
