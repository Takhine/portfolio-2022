import React from "react";

interface H1Props extends React.ComponentProps<"h1"> {}

const H1: React.FC<H1Props> = ({ children, className, ...h1Props }) => {
  return (
    <h1
      className={`text-slate text-4xl font-extrabold ${className}`}
      {...h1Props}
    >
      {children}
    </h1>
  );
};

H1.defaultProps = {
  className: "",
};

H1.displayName = "H1";

export default H1;
