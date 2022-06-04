import React from "react";

interface GridIconProps {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

const GridIcon: React.FC<GridIconProps> = ({
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
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
      />
    </svg>
  );
};

GridIcon.defaultProps = {
  width: 24,
  height: 24,
  color: "#6A82E3",
  className: "",
};

GridIcon.displayName = "GridIcon";

export default GridIcon;
