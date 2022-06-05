import React from "react";

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  contentClassname?: string;
}

const GradientCard: React.FC<GradientCardProps> = ({ children, className, contentClassname }) => {
  return (
    <div
      className={`p-1 shadow-lg gradient-card rounded-md ${className}`}
      style={{
        background: `linear-gradient(90deg, #3d5afe 0%, #84ffff 100%)`,
        backgroundSize: "300% 300%",
      }}
    >
      <div className={`block bg-white dark:bg-gradient-to-b dark:from-eventgrabBlack dark:to-portfolioBlack rounded h-full ${contentClassname}`}>
        {children}
      </div>
    </div>
  );
};

GradientCard.displayName = "GradientCard";

GradientCard.defaultProps = {
  className: "",
  contentClassname: ""
};

export default GradientCard;
