import React from "react";

interface ListIconProps {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

const ListIcon: React.FC<ListIconProps> = ({
  width,
  height,
  color,
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>
  );
};

ListIcon.defaultProps = {
  width: 24,
  height: 24,
  color: "#6A82E3",
  className: "",
};

ListIcon.displayName = "ListIcon";

export default ListIcon;
