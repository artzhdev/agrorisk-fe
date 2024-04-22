import styles from "./insights.module.css";
import { INSIGHTS } from "@/constants/insights";

const InsightsSection = () => {
  return (
    <div className={styles["insights-section"]} id="insights">
      <div className={styles["insights-section-content"]}>
        <div className={styles["insights-section-content-heading"]}>
          <span className={styles["insights-section-content-heading-preview"]}>
            INSIGHTS
          </span>
          <span className={styles["insights-section-content-heading-title"]}>
            Latest insights
          </span>
          <span className={styles["insights-section-content-heading-subtitle"]}>
            Read the latest analyses and think pieces from AgroRisk
          </span>
        </div>
        <div className={styles["insights-section-content-grid"]}>
          {INSIGHTS.map((insight) => {
            return (
              <div
                key={insight.id}
                className={styles["insights-section-content-grid-item"]}
              >
                <img src={insight.img} />
                <div
                  className={
                    styles["insights-section-content-grid-item-content"]
                  }
                >
                  <div
                    className={
                      styles[
                        "insights-section-content-grid-item-content-heading"
                      ]
                    }
                  >
                    <span
                      className={
                        styles[
                          "insights-section-content-grid-item-content-heading-item"
                        ]
                      }
                    >
                      {insight.title}
                    </span>
                    <span
                      className={
                        styles[
                          "insights-section-content-grid-item-content-heading-item"
                        ]
                      }
                    >
                      {insight.date}
                    </span>
                  </div>
                  <span
                    className={
                      styles[
                        "insights-section-content-grid-item-content-caption"
                      ]
                    }
                  >
                    {insight.caption}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InsightsSection;
