import { ReactNode } from "react";

import styles from "./talt-to-us-layout.module.css";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

const TalkToUsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={styles["talk-to-us-layout"]}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default TalkToUsLayout;
