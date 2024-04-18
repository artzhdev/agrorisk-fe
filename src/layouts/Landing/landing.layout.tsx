import { ReactNode } from "react";
import styles from "./landing-layout.module.css";
import Footer from "@/components/Footer/Footer";

const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles["landing-layout"]}>
      {children}
      <Footer />
    </div>
  );
};

export default LandingLayout;
