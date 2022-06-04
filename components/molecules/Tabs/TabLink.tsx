import React from "react";

interface TabLinkProps {
  id: string;
  title: string;
  icon?: React.ReactNode;
  isSelected: boolean;
}

const TabLink: React.FC<TabLinkProps> = ({ id, title, icon, isSelected }) => {
  return (
    <div className="flex-1">
      <a className="relative block p-4" href={`#${id}`}>
        {isSelected && (
          <span className="absolute inset-x-0 w-full h-px bg-pink-600 -bottom-px"></span>
        )}

        <div className="flex items-center justify-center">
          {icon}

          <span className="ml-3 text-sm font-medium text-gray-900">
            {" "}
            {title}{" "}
          </span>
        </div>
      </a>
    </div>
  );
};

TabLink.displayName = "TabLink";

export default TabLink;
