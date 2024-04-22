import styles from "./depth-and-transparency.module.css";

import groundImg from "@/assets/imgs/ground.png";

const DepthAndTransparencySection = () => {
  return (
    <div className={styles["depth-and-transparency-section"]}>
      <div className={styles["depth-and-transparency-section-grid"]}>
        <img
          src={groundImg}
          alt="ground"
          className={styles["depth-and-transparency-section-grid-img"]}
        />
        <div className={styles["depth-and-transparency-section-grid-content"]}>
          <div
            className={
              styles["depth-and-transparency-section-grid-content-details"]
            }
          >
            <span
              className={
                styles[
                  "depth-and-transparency-section-grid-content-details-preview"
                ]
              }
            >
              COMPLIANCE
            </span>
            <div
              className={
                styles[
                  "depth-and-transparency-section-grid-content-details-heading"
                ]
              }
            >
              <span
                className={
                  styles[
                    "depth-and-transparency-section-grid-content-details-heading-title"
                  ]
                }
              >
                Stay on top of regulatory reporting
              </span>
              <div
                className={
                  styles[
                    "depth-and-transparency-section-grid-content-details-heading-subtitle"
                  ]
                }
              >
                <span
                  className={
                    styles[
                      "depth-and-transparency-section-grid-content-details-heading-subtitle-item"
                    ]
                  }
                >
                  With detailed ESG reporting requirements being rolled out
                  across the sector, it is more important than ever to have the
                  right data and risk insights to ensure compliant reporting.
                </span>
                <span
                  className={
                    styles[
                      "depth-and-transparency-section-grid-content-details-heading-subtitle-item"
                    ]
                  }
                >
                  With AgroRisk you have sufficient data to be compliant with
                  both the Corporate Sustainability Reporting Directive (CSRD)
                  and CRR/CRD.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepthAndTransparencySection;
