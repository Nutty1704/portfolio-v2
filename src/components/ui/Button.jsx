import React from "react";

const sizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
};

const getClassNames = (variant) => {
  switch (variant) {
    case "default":
      return "bg-primary text-primary-foreground hover:bg-primary-darker";
    case "outline":
      return "border-2 border-gray-200 hover:border-gray-400";
    default:
      "";
  }
};

const Button = ({ children, variant = "default", size = 'default', btnClass }) => {
  return (
    <button
      className={`cursor-pointer text-sm font-medium transition-colors ${getClassNames(variant)} ${btnClass} ${sizes[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;
