import React from "react";
import Image from "next/image";

interface ProfilePictureProps {}

const ProfilePicture: React.FC<ProfilePictureProps> = () => {
  return (
    <div className="min-w-[100px]">
      <Image className="rounded" src="/images/work-profile.png" width="100px" height="100px" />
    </div>
  );
};

ProfilePicture.displayName = "ProfilePicture";

export default ProfilePicture;
