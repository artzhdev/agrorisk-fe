import { EXPLORE_OUR_DATA } from "@/constants/exploreOurData";
import styles from "./explore-our-data.module.css";

import cn from "classnames";

const ExploreOurDataSection = () => {
  return (
    <div className={styles["explore-our-data-section"]}>
      <div className={styles["explore-our-data-section-grid"]}>
        <div className={styles["explore-our-data-section-grid-details"]}>
          <span
            className={styles["explore-our-data-section-grid-details-title"]}
          >
            EXPLORE OUR DATA
          </span>
          <div
            className={styles["explore-our-data-section-grid-details-heading"]}
          >
            <span
              className={
                styles["explore-our-data-section-grid-details-heading-title"]
              }
            >
              Want to know more about AgroRisk?
            </span>
            <div
              className={
                styles["explore-our-data-section-grid-details-heading-subtitle"]
              }
            >
              <span
                className={
                  styles[
                    "explore-our-data-section-grid-details-heading-subtitle-item"
                  ]
                }
              >
                AgroRisk is a leading software tool designed to specifically for
                financial companies to evaluate and quantify climate-related
                risks faced by agricultural farms.
              </span>
              <span
                className={
                  styles[
                    "explore-our-data-section-grid-details-heading-subtitle-item"
                  ]
                }
              >
                AgroRisk offers advanced analytics and data-driven insights to
                help financial institutions and farmers to make informed
                decisions and transition strategies.
              </span>
            </div>
          </div>
        </div>
        <div className={styles["explore-our-data-section-grid-points"]}>
          {EXPLORE_OUR_DATA.map((data, dataIndex) => {
            return (
              <div
                key={data.id}
                className={cn({
                  [styles["explore-our-data-section-grid-points-item"]]: true,
                  [styles["explore-our-data-section-grid-points-item-shift"]]:
                    dataIndex === 1,
                })}
              >
                <img src={data.icon} />
                <span
                  className={
                    styles["explore-our-data-section-grid-points-item-title"]
                  }
                >
                  {data.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreOurDataSection;
