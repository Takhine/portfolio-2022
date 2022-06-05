import React from "react";
import Image from "next/image";

interface ProfilePictureProps {}

const ProfilePicture: React.FC<ProfilePictureProps> = () => {
  return (
    <div className="min-w-[100px] h-[100px] rounded-md shadow-xl shadow-graphite01 dark:shadow dark:border-blue-600 dark:shadow-blue-600 relative">
      <Image
        className="rounded-md object-cover border-2 border-white"
        src="/images/work-profile.png"
        width="100px"
        height="100px"
      />
    </div>
  );
};

ProfilePicture.displayName = "ProfilePicture";

export default ProfilePicture;
