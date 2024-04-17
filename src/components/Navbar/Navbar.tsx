import { NAVBAR_LINKS } from "@/constants/links";
import styles from "./navbar.module.css";

import AgroRiskLogoOne from "@/assets/imgs/logos/agrorisk-logo-1.svg";
import { Link } from "react-router-dom";
import ButtonLink from "../Buttons/ButtonLink/ButtonLink";

const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
      <img src={AgroRiskLogoOne} alt="logo" />
      <div className={styles["navbar-links"]}>
        {NAVBAR_LINKS.map((link) => {
          return (
            <Link
              className={styles["navbar-links-item"]}
              key={link.id}
              to={link.to}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
      <div className={styles["navbar-actions"]}>
        <ButtonLink to="#" title="Book Demo" className={styles["navbar-actions-book-demo-link"]} />
        <ButtonLink to="#" title="Log In" />
      </div>
    </div>
  );
};

export default Navbar;
