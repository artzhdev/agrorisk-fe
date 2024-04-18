import Navbar from "@/components/Navbar/Navbar";
import styles from "./introduction.module.css";
import ButtonLink from "@/components/Buttons/ButtonLink/ButtonLink";

const IntroductionSection = () => {
  return (
    <div className={styles["introduction-section"]}>
      <Navbar />
      <div className={styles["introduction-section-content"]}>
        <div className={styles["introduction-section-content-heading"]}>
          <span
            className={styles["introduction-section-content-heading-title"]}
          >
            Financial climate risks for agricultural farms.
          </span>
          <span
            className={styles["introduction-section-content-heading-subtitle"]}
          >
            Trusted and transparent insights across sustainability themes.
          </span>
        </div>
        <ButtonLink
          to="/talk-to-us"
          title="Ask for demonstration"
          className={styles["introduction-section-demonstration-link"]}
        />
      </div>
    </div>
  );
};

export default IntroductionSection;
