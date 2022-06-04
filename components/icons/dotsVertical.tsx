import React from "react";

interface DotsVerticalProps {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

const DotsVertical: React.FC<DotsVerticalProps> = ({
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
        fill={color}
        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
      />
    </svg>
  );
};

DotsVertical.defaultProps = {
  width: 24,
  height: 24,
  color: "#6A82E3",
  className: "",
};

DotsVertical.displayName = "DotsVertical";

export default DotsVertical;
