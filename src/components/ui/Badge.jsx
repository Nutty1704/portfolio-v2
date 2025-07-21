const variantStyles = {
  default: "border-2 border-gray-100",
  secondary: "border-transparent bg-gray-150 hover:bg-gray-200/80",
};

const Badge = ({ children, containerClass, variant = "default" }) => {
  return (
    <div
      className={`w-fit inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variantStyles[variant]} ${containerClass}`}
    >
      {children}
    </div>
  );
};

export default Badge;
