import React from "react";

interface H3Props extends React.ComponentProps<"h3"> {}

const H3: React.FC<H3Props> = ({ children, className, ...h3Props }) => {
  return (
    <h3
      className={`text-slate text-lg font-semibold ${className}`}
      {...h3Props}
    >
      {children}
    </h3>
  );
};

H3.displayName = "H3";

export default H3;
