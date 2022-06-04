import React from "react";

interface CopyIconProps {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

const CopyIcon: React.FC<CopyIconProps> = ({
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
        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
      />
    </svg>
  );
};

CopyIcon.defaultProps = {
  width: 24,
  height: 24,
  color: "#6A82E3",
  className: "",
};

CopyIcon.displayName = "CopyIcon";

export default CopyIcon;
