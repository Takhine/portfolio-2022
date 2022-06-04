import React from "react";

interface H4Props extends React.ComponentProps<"h4"> {}

const H4: React.FC<H4Props> = ({ children, className, ...h4Props }) => {
  return (
    <h4
      className={`text-slate text-base font-semibold ${className}`}
      {...h4Props}
    >
      {children}
    </h4>
  );
};

H4.displayName = "H4";

export default H4;
