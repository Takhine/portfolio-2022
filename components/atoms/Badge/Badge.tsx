import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  return (
    <strong className={`bg-graphite02 border-graphite01 border tracking-wide px-2 py-0.5 rounded-full text-xxs font-medium ${className}`}>
      {children}
    </strong>
  );
};

Badge.displayName = "Badge";

Badge.defaultProps = {
  className: ""
}

export default Badge;
