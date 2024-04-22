import {
  EXPLORE_OUR_DATA_BUTTONS,
  EXPLORE_OUR_DATA_CONTENT,
} from "@/constants/exploreOurData";
import styles from "./explore-our-data.module.css";

import cn from "classnames";
import { useMemo, useState } from "react";

const preview: { [key: string]: string } = {
  field_level_data: "EXPLORE OUR DATA",
  company_risk_insights: "ADVANCED ANALYTICS",
  portfolio_reporting: "COMPLIANT REPORTING",
};

const ExploreOurDataSection = () => {
  const [dataName, setDataName] = useState("company_risk_insights");

  const dataContent = useMemo(() => {
    return EXPLORE_OUR_DATA_CONTENT.find((item) => item.name === dataName);
  }, [dataName]);

  return (
    <div className={styles["explore-our-data-section"]} id="exploreOurData">
      <div className={styles["explore-our-data-section-grid"]}>
        <div className={styles["explore-our-data-section-grid-details"]}>
          <span
            className={styles["explore-our-data-section-grid-details-title"]}
          >
            {preview[dataName]}
          </span>
          <div
            className={styles["explore-our-data-section-grid-details-heading"]}
          >
            <span
              className={
                styles["explore-our-data-section-grid-details-heading-title"]
              }
            >
              {dataContent?.title}
            </span>
            <div
              className={
                styles["explore-our-data-section-grid-details-heading-subtitle"]
              }
            >
              {dataContent?.subtitle.map((item) => {
                return (
                  <span
                    key={item.id}
                    className={
                      styles[
                        "explore-our-data-section-grid-details-heading-subtitle-item"
                      ]
                    }
                  >
                    {item.title}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles["explore-our-data-section-grid-points"]}>
          {EXPLORE_OUR_DATA_BUTTONS.map((data) => {
            return (
              <button
                key={data.id}
                onClick={() => setDataName(data.name)}
                className={cn({
                  [styles["explore-our-data-section-grid-points-item"]]: true,
                  [styles["explore-our-data-section-grid-points-item-active"]]:
                    dataName === data.name,
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
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreOurDataSection;
