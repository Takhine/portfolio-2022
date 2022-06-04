import React from "react";

interface H2Props extends React.ComponentProps<"h2"> {}

const H2: React.FC<H2Props> = ({ children, className, ...h2Props }) => {
  return (
    <h2
      className={`text-slate text-xl font-semibold ${className}`}
      {...h2Props}
    >
      {children}
    </h2>
  );
};

H2.displayName = "H2";

export default H2;
