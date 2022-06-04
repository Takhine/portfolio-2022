import { GRAPHITE_01 } from "@constants/styleConstants/colors.constants";
import Button from "components/atoms/Button/Button";
import H1 from "components/atoms/H1";
import { DotsVertical, ShareIcon } from "components/icons";
import CustomMenu from "components/organisms/Menu/CustomMenu";
import React from "react";
import { BUTTON_VARIANTS } from "shared/enums/button";

interface WelcomeHeaderProps {}

const WelcomeHeader: React.FC<WelcomeHeaderProps> = () => {
  return (
    <header className="col-span-3 order-1 lg:order-2 lg:col-span-3 lg:row-end-1 border-b border-graphite02 pb-6">
      <div className="flex justify-between items-start">
        <H1 className="mb-8">Welcome to my portfolio</H1>
        <CustomMenu
          menuItems={[
            { title: "Drop a mail", onClick: () => {} },
            { title: "Download CV", onClick: () => {} },
          ]}
        >
          <DotsVertical color={GRAPHITE_01} width={28} height={28} />
        </CustomMenu>
      </div>
      <div className="flex">
        <Button className="mr-4">Recent work</Button>
        <Button variant={BUTTON_VARIANTS.STROKE}><ShareIcon color={GRAPHITE_01} /></Button>
      </div>
    </header>
  );
};

WelcomeHeader.displayName = "WelcomeHeader";

export default WelcomeHeader;
