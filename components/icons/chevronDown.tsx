import React from "react";

interface ChevronDownProps {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

const ChevronDown: React.FC<ChevronDownProps> = ({
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
      viewBox="0 0 20 20"
      stroke={color}
      strokeWidth="2"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ChevronDown.defaultProps = {
  width: 20,
  height: 20,
  color: "#6A82E3",
  className: "",
};

ChevronDown.displayName = "ChevronDown";

export default ChevronDown;
