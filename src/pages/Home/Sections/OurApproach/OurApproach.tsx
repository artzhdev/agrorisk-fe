import styles from "./our-approach.module.css";

import CicrleOne from "@/assets/imgs/decor/circle-1.svg";
import CicrleTwo from "@/assets/imgs/decor/circle-2.svg";
import ButtonLink from "@/components/Buttons/ButtonLink/ButtonLink";

const OurApproachSection = () => {
  return (
    <div className={styles["our-approach-section"]}>
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
            OUR APPROACH
          </span>
          <div
            className={styles["our-approach-section-content-heading-content"]}
          >
            <span
              className={
                styles["our-approach-section-content-heading-content-title"]
              }
            >
              Intuitive platform <br />
              for sustainability.
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
                Our Analytics Platform is an end-to-end solution to explore and
                analyse the sustainability profile of individual issuers, funds
                or entire portfolios.
              </span>
              <span
                className={
                  styles[
                    "our-approach-section-content-heading-content-subtitle-item"
                  ]
                }
              >
                From high-level portfolio analysis to granular insights on
                single entities, we enable more efficient understanding of
                investments and benchmarking, as well as powerful report
                generation and data exports.
              </span>
            </div>
          </div>
        </div>
        <ButtonLink
          to="#"
          title="Discover it now"
          className={
            styles["our-approach-section-content-discover-it-now-link"]
          }
        />
      </div>
    </div>
  );
};

export default OurApproachSection;
