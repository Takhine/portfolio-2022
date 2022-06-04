import React from "react";

interface BoardIconProps {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

const BoardIcon: React.FC<BoardIconProps> = ({
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
        d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
      />
    </svg>
  );
};

BoardIcon.defaultProps = {
  width: 24,
  height: 24,
  color: "#6A82E3",
  className: "",
};

BoardIcon.displayName = "BoardIcon";

export default BoardIcon;
