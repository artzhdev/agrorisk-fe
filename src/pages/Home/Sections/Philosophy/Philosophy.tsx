import styles from "./philosophy.module.css";

import iStockImg from "@/assets/imgs/istock.svg";
import basfLogoOne from "@/assets/imgs/logos/basf-logo-1.svg";

const PhilosophySection = () => {
  return (
    <div className={styles["philosophy-section"]}>
      <div className={styles["philosophy-section-grid"]}>
        <div className={styles["philosophy-section-grid-details"]}>
          <img src={basfLogoOne} alt="basf" />
          <div className={styles["philosophy-section-grid-details-content"]}>
            <span
              className={styles["philosophy-section-grid-details-content-item"]}
            >
              “Understanding the extent to which companies' core business
              revenues are aligned to the Sustainable Development Goals, and by
              extension have the potential to contribute to real-world
              sustainable outcomes, is the next frontier of sustainability
              analysis.
            </span>
            <span
              className={styles["philosophy-section-grid-details-content-item"]}
            >
              Matter helps to break down this barrier and provides investors
              with actionable information on what constitutes company alignment
              to the targets underpinning the 17 SDGs”
            </span>
          </div>
        </div>
        <img
          src={iStockImg}
          alt="istock"
          className={styles["philosophy-section-grid-img"]}
        />
      </div>
    </div>
  );
};

export default PhilosophySection;
