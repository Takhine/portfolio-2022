import { WHITE } from "@constants/styleConstants/colors.constants";
import Button from "components/atoms/Button/Button";
import H1 from "components/atoms/H1";
import { DotsVertical, ShareIcon } from "components/icons";
import CustomMenu from "components/organisms/Menu/CustomMenu";
import React from "react";
import { BUTTON_VARIANTS } from "shared/enums/button";

interface WelcomeHeaderProps {}

const WelcomeHeader: React.FC<WelcomeHeaderProps> = () => {
  return (
    <header className="col-span-3 order-1 lg:order-2 lg:col-span-4 lg:row-end-1 pb-6">
      <div className="flex justify-between items-start">
        <H1 className="mb-8 !text-white">Welcome to my <b className="font-extrabold">portfolio ✌</b></H1>
        <CustomMenu
          menuItems={[
            { title: "Drop a mail", onClick: () => {} },
            { title: "Download CV", onClick: () => {} },
          ]}
        >
          <DotsVertical color={WHITE} width={28} height={28} />
        </CustomMenu>
      </div>
      <div className="flex">
        <Button className="mr-4 !bg-white !font-semibold text-indigo-900">Recent work</Button>
        <Button className="bg-indigo-600"><ShareIcon color={WHITE} /></Button>
      </div>
    </header>
  );
};

WelcomeHeader.displayName = "WelcomeHeader";

export default WelcomeHeader;
