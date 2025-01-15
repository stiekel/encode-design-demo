import classNames from "classnames";
import { IEButtonProps } from "./interface";
import "./index.css";

const Button = ({
  label,
  onClick,
  disabled = false,
  size = "medium",
  ...rest
}: IEButtonProps) => {
  // const { label, onClick, disabled = false, size = 'medium', ...rest } = props;

  const cls = classNames([rest.className || "", "btn-default", `btn-${size}`]);
  return (
    <button
      type="button"
      className={cls}
      style={rest.style}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
