import React from "react";

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
}

const GradientCard: React.FC<GradientCardProps> = ({ children, className }) => {
  return (
    <div
      className={`p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-lg ${className}`}
    >
      <div className="block p-6 bg-white sm:p-7 rounded-md h-full">{children}</div>
    </div>
  );
};

GradientCard.displayName = "GradientCard";

GradientCard.defaultProps = {
  className: "",
};

export default GradientCard;
