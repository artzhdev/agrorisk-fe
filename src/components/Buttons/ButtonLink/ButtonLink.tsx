import { FC } from "react";
import { To, Link } from "react-router-dom";
import cn from "classnames";
import styles from "./button-link.module.css";

type ButtonLinkProps = {
  title: string;
  to: To;
  className?: string;
};

const ButtonLink: FC<ButtonLinkProps> = ({ title, to, className }) => {
  return (
    <Link
      to={to}
      className={cn({
        [styles["button-link"]]: true,
        [className || ""]: !!className,
      })}
    >
      {title}
    </Link>
  );
};

export default ButtonLink;
