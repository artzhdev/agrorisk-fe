import ButtonLink from "@/components/Buttons/ButtonLink/ButtonLink";
import styles from "./depth-and-transparency.module.css";

import mapImgTwo from "@/assets/imgs/map-2.svg";

const DepthAndTransparencySection = () => {
  return (
    <div className={styles["depth-and-transparency-section"]}>
      <div className={styles["depth-and-transparency-section-grid"]}>
        <img src={mapImgTwo} alt="map two" />
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
              APPROACH
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
                Depth and <br /> transparency.
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
                  We take a structured approach to measuring sustainability and
                  we ensure all our data is traceable back to the originating
                  source for full transparency.
                </span>
                <span
                  className={
                    styles[
                      "depth-and-transparency-section-grid-content-details-heading-subtitle-item"
                    ]
                  }
                >
                  Our datasets offer more granularity than conventional ESG
                  data, allowing you to run complex ESG analyses with
                  unparalleled depth, across multiple portfolios and benchmarks,
                  focusing on the sustainability metric of your choice.
                </span>
              </div>
            </div>
          </div>
          <ButtonLink
            to="#"
            title="Read more"
            className={
              styles[
                "depth-and-transparency-section-grid-content-read-mode-link"
              ]
            }
          />
        </div>
      </div>
    </div>
  );
};

export default DepthAndTransparencySection;
