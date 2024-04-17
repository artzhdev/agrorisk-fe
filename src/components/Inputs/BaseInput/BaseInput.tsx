import { FC, InputHTMLAttributes } from "react";
import styles from "./base-input.module.css";

import cn from "classnames";

type BaseInputProps = InputHTMLAttributes<HTMLInputElement>;

const BaseInput: FC<BaseInputProps> = ({
  type = "text",
  value = "",
  onChange = () => {},
  placeholder = "",
  className,
  name = "",
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      className={cn({
        [styles["base-input"]]: true,
        [className || ""]: !!className,
      })}
    />
  );
};

export default BaseInput;
