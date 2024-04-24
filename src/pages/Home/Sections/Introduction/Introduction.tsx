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
            Financial Climate Risk <br />
            for Agriculture
          </span>
          <span
            className={styles["introduction-section-content-heading-subtitle"]}
          >
            Actionable risk insights for financial companies
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
