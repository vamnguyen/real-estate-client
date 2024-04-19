/* eslint-disable react/prop-types */
import { cn } from "~/lib/utils";

const Button = ({
  children,
  className,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={cn(
        "py-3 px-6 text-white bg-primary-700 rounded-md",
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
