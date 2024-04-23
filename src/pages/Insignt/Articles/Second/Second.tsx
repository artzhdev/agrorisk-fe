import InsughtImageTwo from "@/assets/imgs/insights/insights-2.svg";

import styles from "./second.module.css";

const SecondArticle = () => {
  return (
    <>
      <img src={InsughtImageTwo} className={styles["second-article-img"]} />
      <div className={styles["second-article-content"]}>
        <span className={styles["second-article-content-title"]}>
          Using Scenario-Analysis to Assess Climate Risks in Loans and Mortgages
        </span>
        <span className={styles["second-article-content-text"]}>
          Climate change poses undeniable financial risks that affect the global
          economy. As physical and transitional impacts of climate change become
          more apparent, financial institutions are compelled to adopt
          sophisticated risk management tools to quantify and mitigate these
          risks. Among these tools, scenario analysis stands out as a crucial
          method for predicting and managing the potential impacts of
          climate-related risks on financial assets, such as loans and
          mortgages. This article explores the utilization of scenario analysis,
          focusing particularly on flood risks and the implications of new
          regulatory requirements such as the Corporate Sustainability Reporting
          Directive (CSRD) and the Capital Requirements Regulation/Directive
          (CRR/CRD) on climate scenario modeling in the financial sector.
        </span>
        <span className={styles["second-article-content-text"]}>
          Scenario analysis is increasingly recognized as an essential technique
          in the financial sector’s toolkit to manage climate-related risks.
          Unlike traditional risk assessment tools that rely on historical data,
          scenario analysis explores potential future outcomes by creating a
          range of plausible scenarios based on various assumptions about how
          climate change can affect economic and environmental systems. These
          scenarios help financial institutions to prepare for an array of
          possible futures, enhancing their resilience against climate-related
          uncertainties.
        </span>
        <span className={styles["second-article-content-text"]}>
          Effective scenario analysis requires extending broad macro-climate
          scenarios to the specific contexts of individual assets. This process
          involves adjusting for spatial granularity, ensuring the scenarios
          reflect the nuanced realities of asset-specific locations which may
          face disparate levels of risk, such as flood proneness.
        </span>
        <span className={styles["second-article-content-text"]}>
          Implementing scenario analysis requires a variety of data sources:
        </span>
        <ol className={styles["second-article-content-list"]}>
          <li>
            <span className={styles["second-article-content-list-bold"]}>
              Granularity:
            </span>{" "}
            Asset-level analysis requires high-resolution data to accurately
            reflect local environmental and economic conditions.
          </li>
          <li>
            <span className={styles["second-article-content-list-bold"]}>
              Temporal and Sectoral Alignment:
            </span>{" "}
            Financial assets vary in maturity and sector-specific
            characteristics, necessitating tailored scenario applications to
            match these diverse profiles.
          </li>
          <li>
            <span className={styles["second-article-content-list-bold"]}>
              Solid climate scenarios:
            </span>{" "}
            Best practice is to apply commonly used scenarios such as the ones
            developed by the Network for Greening the Financial System (NGFS).
          </li>
        </ol>
        <span
          className={styles["second-article-content-title"]}
          style={{ marginTop: "2rem" }}
        >
          Regulatory Implications: CSRD and CRR/CRD
        </span>
        <span className={styles["second-article-content-text"]}>
          The recent introduction of the Corporate Sustainability Reporting
          Directive (CSRD) by the European Union marks a significant step
          towards more robust climate risk reporting and management. The CSRD
          mandates more detailed disclosures, pushing companies to integrate
          sustainability and provide comprehensive data on how they assess and
          manage climate-related risks.
        </span>
        <span className={styles["second-article-content-text"]}>
          Similarly, updates to the Capital Requirements Regulation and
          Directive (CRR/CRD) have sharpened the focus on climate-related risks.
          Financial institutions are now required to enhance their stress
          testing and scenario analysis capabilities to meet stricter regulatory
          standards, ensuring they have sufficient capital buffers to withstand
          potential losses from climate impacts.
        </span>
        <span className={styles["second-article-content-text"]}>
          These regulatory frameworks compel financial institutions to adopt
          advanced scenario analysis methods that not only comply with reporting
          requirements but also significantly enhance risk management
          strategies. They must now ensure that their scenario analysis
          processes are robust, verifiable, and capable of supporting strategic
          decisions aimed at minimizing climate-related financial risks.
        </span>
        <span
          className={styles["second-article-content-title"]}
          style={{ marginTop: "2rem" }}
        >
          Conclusion and Looking Ahead
        </span>
        <span className={styles["second-article-content-text"]}>
          The financial sector's response to climate risks, augmented by
          regulatory requirements like the CSRD and CRR/CRD, highlights the
          critical role of scenario analysis in contemporary financial
          practices. By providing a framework to understand and prepare for
          future climates, scenario analysis not only fulfills regulatory
          expectations but also serves as a strategic asset in financial
          planning and risk management. As the climate landscape evolves, so too
          must the tools we use to understand and navigate it, with scenario
          analysis at the forefront of this adaptive challenge.
        </span>
        <span className={styles["second-article-content-text"]}>
          As scenario analysis continues to develop, financial institutions must
          remain agile, continuously updating their models to incorporate the
          latest scientific data and regulatory guidelines. Collaboration across
          sectors and disciplines will be essential to enhancing the accuracy
          and applicability of scenario analysis, ultimately strengthening the
          financial sector’s ability to manage emerging climate risks
          effectively.
        </span>
      </div>
    </>
  );
};

export default SecondArticle;
