import { FC, HTMLAttributeAnchorTarget } from "react";
import { To, Link } from "react-router-dom";
import cn from "classnames";
import styles from "./button-link.module.css";

type ButtonLinkProps = {
  title: string;
  to: To;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
};

const ButtonLink: FC<ButtonLinkProps> = ({ title, to, className, target }) => {
  return (
    <Link
      to={to}
      target={target}
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
