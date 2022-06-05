import React from "react";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return <div className={`rounded-xl border border-gray-300 ${className}`}>{children}</div>;
};

Card.displayName = "Card";

Card.defaultProps = {
  className: "",
};

export default Card;
