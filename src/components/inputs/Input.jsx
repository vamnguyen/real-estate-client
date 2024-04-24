import { cn } from "~/lib/utils";
import PropTypes from "prop-types";

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

Input.propTypes = {
  style: PropTypes.string,
  classNameInput: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  validate: PropTypes.object,
  errors: PropTypes.object,
};

export default Input;
