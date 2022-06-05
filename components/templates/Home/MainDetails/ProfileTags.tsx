import Badge from "components/atoms/Badge/Badge";
import React from "react";

interface ProfileTagsProps {}

const ProfileTags: React.FC<ProfileTagsProps> = () => {
  return (
    <div className="my-3 flex justify-items-start items-center pb-4">
      <Badge className="bg-indigo-500 border border-indigo-800 dark:border-indigo-200 text-white">Web dev</Badge>
      <Badge className="ml-3 bg-indigo-500 border border-indigo-800 dark:border-indigo-200 text-white">Start-ups</Badge>
      <Badge className="ml-3 bg-indigo-400 border border-indigo-800 dark:border-indigo-200 text-indigo-100">Ed tech</Badge>
    </div>
  );
};

ProfileTags.displayName = "ProfileTags";

export default ProfileTags;
