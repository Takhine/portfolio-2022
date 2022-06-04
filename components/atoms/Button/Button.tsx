import React from "react";
import { BUTTON_VARIANTS } from "shared/enums/button";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: BUTTON_VARIANTS;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant,
  ...buttonProps
}) => {
  const isSolidButton = variant === BUTTON_VARIANTS.SOLID;
  return (
    <button
      className={`${
        isSolidButton ? "bg-gray-600 text-white" : "border border-indigo-600"
      } inline-block px-4 py-2 text-sm font-medium rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

Button.displayName = "Button atom";

Button.defaultProps = {
  className: "",
  variant: BUTTON_VARIANTS.SOLID,
};

export default Button;
