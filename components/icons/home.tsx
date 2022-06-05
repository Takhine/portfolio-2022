import React from "react";

interface HomeIconProps {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

const HomeIcon: React.FC<HomeIconProps> = ({
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
        strokeWidth="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );
};

HomeIcon.defaultProps = {
  width: 24,
  height: 24,
  color: "#6A82E3",
  className: "",
};

HomeIcon.displayName = "HomeIcon";

export default HomeIcon;
