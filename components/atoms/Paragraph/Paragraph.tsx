import React from "react";

interface ParagraphProps extends React.ComponentProps<"p"> {}

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className,
  ...pProps
}) => {
  return (
    <p className={`${className} text-graphite01 text-sm`} {...pProps}>
      {children}
    </p>
  );
};

Paragraph.displayName = "Paragraph atom";

Paragraph.defaultProps = {
  className: "",
};

export default Paragraph;
