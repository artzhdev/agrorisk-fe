import { ReactNode } from "react";

import styles from "./insight-layout.module.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const InsightLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={styles["insight-layout"]}>
        <Navbar whiteLogo />
        <div className={styles["insight-layout-content"]}>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default InsightLayout;
