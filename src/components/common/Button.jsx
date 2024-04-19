import { cn } from "~/lib/utils";

// eslint-disable-next-line react/prop-types
const Button = ({ children, className, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      className={cn(
        "py-3 px-6 text-white bg-primary-700 rounded-md",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
