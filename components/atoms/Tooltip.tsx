import React from "react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  return (
    <div className="relative flex flex-col items-center group">
      {children}
      <div className="absolute transition-all min-w-[100px] bottom-0 flex-col items-center hidden mb-6 group-hover:flex">
        <span className="relative rounded-sm w-auto z-10 p-2 text-xxs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
          {content}
        </span>
        <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
      </div>
    </div>
  );
};

Tooltip.displayName = "Tooltip";

export default Tooltip;
