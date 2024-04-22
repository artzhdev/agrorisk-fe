import styles from "./our-approach.module.css";

import CicrleOne from "@/assets/imgs/decor/circle-1.svg";
import CicrleTwo from "@/assets/imgs/decor/circle-2.svg";

const OurApproachSection = () => {
  return (
    <div className={styles["our-approach-section"]} id="aboutUs">
      <div className={styles["our-approach-section-content"]}>
        <img
          src={CicrleOne}
          alt="circle one"
          className={styles["our-approach-section-content-circle-one"]}
        />
        <img
          src={CicrleTwo}
          alt="circle two"
          className={styles["our-approach-section-content-circle-two"]}
        />
        <div className={styles["our-approach-section-content-heading"]}>
          <span
            className={styles["our-approach-section-content-heading-preview"]}
          >
            About Us
          </span>
          <div
            className={styles["our-approach-section-content-heading-content"]}
          >
            <span
              className={
                styles["our-approach-section-content-heading-content-title"]
              }
            >
              Developed by sustainability professionals
            </span>
            <div
              className={
                styles["our-approach-section-content-heading-content-subtitle"]
              }
            >
              <span
                className={
                  styles[
                    "our-approach-section-content-heading-content-subtitle-item"
                  ]
                }
              >
                AgroRisk is founded by Theodor Christensen, who has extensive
                experience in sustainable finance and ESG risk management.
              </span>
              <span
                className={
                  styles[
                    "our-approach-section-content-heading-content-subtitle-item"
                  ]
                }
              >
                He was responsible for sustainability and climate at the Danish
                Financial Supervisory Authority, where he oversaw both policy
                development and enforcement of the key EU legislations in the
                field. He has also been Head of Sustainability Compliance for
                Danske Bank with responsibility to ensure bank-wide compliance
                with sustainability-related legislation and commitments.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproachSection;
