import React from "react";
import { CopyIcon, ShareIcon } from "components/icons";
import { GRAPHITE_01 } from "@constants/styleConstants/colors.constants";
import Tooltip from "components/atoms/Tooltip";
interface PageActionsProps {}

const PageActions: React.FC<PageActionsProps> = () => {
  return (
    <div className="flex">
      <Tooltip content="Share this page">
        <ShareIcon color={GRAPHITE_01} className="cursor-pointer" />
      </Tooltip>
      <Tooltip content="Copy page url">
        <CopyIcon color={GRAPHITE_01} className="ml-4 cursor-pointer" />
      </Tooltip>
    </div>
  );
};

PageActions.displayName = "PageActions";

export default PageActions;
