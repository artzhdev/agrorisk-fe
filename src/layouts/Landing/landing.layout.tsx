import { ReactNode } from "react";
import styles from "./landing-layout.module.css";

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return <div className={styles["landing-layout"]}>{children}</div>;
};

export default LandingLayout;
