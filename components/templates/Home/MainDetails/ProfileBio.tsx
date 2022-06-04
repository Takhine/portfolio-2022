import Paragraph from "components/atoms/Paragraph/Paragraph";
import React from "react";

interface ProfileBioProps {}

const ProfileBio: React.FC<ProfileBioProps> = () => {
  return (
    <div className="lg:ml-7">
    <Paragraph className="text-graphite01 text-sm mb-2">
      As a Software Engineer, I specialize in web development technologies and
      have experience in building and maintaining CMS &amp; LMS platforms.
    </Paragraph>
    <Paragraph className="text-graphite01 text-sm">
      At <b>Graphy</b>, I am focused on building website tools for creators that signup on
      our Live CBC Platform.
    </Paragraph>
    </div>
  );
};

ProfileBio.displayName = "ProfileBio";

export default ProfileBio;
