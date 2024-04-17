import ButtonLink from "@/components/Buttons/ButtonLink/ButtonLink";
import styles from "./map-based-anatytics.module.css";

import mapImgOne from "@/assets/imgs/map-1.svg";

const MapBasedAnalyticsSection = () => {
  return (
    <div className={styles["map-based-analytics-section"]}>
      <div className={styles["map-based-analytics-section-grid"]}>
        <div className={styles["map-based-analytics-section-grid-map"]}>
          <img src={mapImgOne} alt="map-one" />
        </div>
        <div className={styles["map-based-analytics-section-grid-details"]}>
          <div
            className={
              styles["map-based-analytics-section-grid-details-heading"]
            }
          >
            <span
              className={
                styles["map-based-analytics-section-grid-details-heading-title"]
              }
            >
              Map based <br /> analytics.
            </span>
            <div
              className={
                styles[
                  "map-based-analytics-section-grid-details-heading-subtitle"
                ]
              }
            >
              <span
                className={
                  styles[
                    "map-based-analytics-section-grid-details-heading-subtitle-item"
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
                    "map-based-analytics-section-grid-details-heading-subtitle-item"
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
          <ButtonLink
            to="#"
            title="Book demonstration"
            className={
              styles[
                "map-based-analytics-section-grid-details-book-demonstartion-link"
              ]
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MapBasedAnalyticsSection;
