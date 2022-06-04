import React from "react";

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
}

const GradientCard: React.FC<GradientCardProps> = ({ children, className }) => {
  return (
    <div
      className={`p-0.5 shadow-lg gradient-card  rounded-md ${className}`}
      style={{
        background: `linear-gradient(90deg, #3d5afe 0%, #84ffff 100%)`,
        backgroundSize: "300% 300%",
      }}
    >
      <div className="block p-6 bg-gray-50 sm:p-7 rounded h-full">
        {children}
      </div>
    </div>
  );
};

GradientCard.displayName = "GradientCard";

GradientCard.defaultProps = {
  className: "",
};

export default GradientCard;
