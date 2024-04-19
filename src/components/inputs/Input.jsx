/* eslint-disable react/prop-types */
import { cn } from "~/lib/utils";

const Input = ({
  style = "form-input",
  classNameInput,
  disabled = false,
  type = "text",
  label,
  id,
  placeholder,
  register,
  validate,
  errors,
}) => {
  return (
    <div className={cn("flex flex-col items-start gap-2")}>
      <label className="font-medium" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        className={cn("w-full rounded-md", style, classNameInput)}
        {...register(id, validate)}
      />
      {errors[id] && (
        <small className="text-red-500">{errors[id].message}</small>
      )}
    </div>
  );
};

export default Input;
