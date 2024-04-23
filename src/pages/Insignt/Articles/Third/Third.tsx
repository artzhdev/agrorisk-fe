import InsughtImageThird from "@/assets/imgs/insights/insights-3.svg";

import styles from "./third.module.css";

const ThirdArticle = () => {
  return (
    <>
      <img src={InsughtImageThird} className={styles["third-article-img"]} />
      <div className={styles["third-article-content"]}>
        <span className={styles["third-article-content-title"]}>
          Climate Reporting Requirements in CSRD
        </span>
        <span className={styles["third-article-content-text"]}>
          The Corporate Sustainability Reporting Directive (CSRD) and the
          European Sustainability Reporting Standards (ESRS) guide financial
          institutions on how to approach climate-related disclosures. We
          explain the specific requirements under these frameworks, focusing on
          disclosure of climate risks.
        </span>
        <span className={styles["third-article-content-text"]}>
          CSRD and ESRS have set a structured framework for climate-related
          disclosures, emphasizing transparency and uniformity across financial
          institutions within the EU. The primary goal is to provide
          stakeholders with comprehensive data on how climate-related risks are
          managed and to identify potential opportunities that climate change
          might present.
        </span>
        <span className={styles["third-article-content-text"]}>
          Accurate and reliable data collection remains a challenge for many
          institutions. The need for high-quality data that can support the
          required disclosures under CSRD and ESRS necessitates enhanced data
          management systems and processes.
        </span>
        <span className={styles["third-article-content-text"]}>
          Financial institutions must evaluate and disclose how climate-related
          risks impact their financials, covering aspects such as:
        </span>
        <ul className={styles["third-article-content-list"]}>
          <li>
            <span className={styles["third-article-content-list-bold"]}>
              Physical Risks:
            </span>{" "}
            The potential monetary impacts of climate-induced physical risks on
            assets.
          </li>
          <li>
            <span className={styles["third-article-content-list-bold"]}>
              Transition Risks:
            </span>{" "}
            The financial implications of transitioning to a low-carbon economy,
            including changes in asset values and potential liabilities.
          </li>
          <li>
            <span className={styles["third-article-content-list-bold"]}>
              Opportunities:
            </span>{" "}
            Potential benefits from transitioning to greener alternatives or
            technologies that might open new markets or improve competitive
            advantage.
          </li>
        </ul>
        <span
          className={styles["third-article-content-text"]}
          style={{ marginTop: "2rem" }}
        >
          The ESRSs specifically mandates the disclosure of climate-related
          risks, underlining the need for detailed, asset-specific data to
          evaluate both current and future risks:
        </span>
        <ul className={styles["third-article-content-list"]}>
          <li>
            <span className={styles["third-article-content-list-bold"]}>
              Granular Risk Identification:
            </span>{" "}
            Financial institutions should employ asset-level data to pinpoint
            the exact nature and location of both transitional and physical
            climate risks. This data-driven approach allows for a more precise
            identification of vulnerabilities across the institution's
            portfolio.
          </li>
          <li>
            <span className={styles["third-article-content-list-bold"]}>
              Detailed Impact Analysis:
            </span>{" "}
            By leveraging detailed asset data, institutions can assess the
            specific impacts of identified risks on individual assets,
            aggregating this information to understand broader implications on
            business operations and strategy.
          </li>
          <li>
            <span className={styles["third-article-content-list-bold"]}>
              Advanced Risk Management Strategies:
            </span>{" "}
            The utilization of asset-level data informs more targeted risk
            mitigation measures, enhancing the precision and effectiveness of
            management strategies tailored to specific asset vulnerabilities.
          </li>
        </ul>
        <span
          className={styles["third-article-content-text"]}
          style={{ marginTop: "2rem" }}
        >
          The use of scenario analysis in assessing climate risks requires
          sophisticated modeling techniques and deep understanding of both
          climatology and the impact of extreme weather on specific assets.
          Financial institutions must develop or acquire the capability to
          conduct robust scenario analyses that meet regulatory expectations.
        </span>
        <span
          className={styles["third-article-content-title"]}
          style={{ marginTop: "2rem" }}
        >
          Conclusion
        </span>
        <span className={styles["third-article-content-text"]}>
          The CSRD and ESRS represent a transformative shift in how financial
          institutions in the EU will approach sustainability reporting, with a
          particular emphasis on the comprehensive and transparent reporting of
          climate risks. As these regulations come into force, institutions must
          enhance their systems, processes, and capabilities to meet these new
          standards. The focus on detailed and reliable climate risk reporting
          will not only comply with regulatory requirements but also provide
          significant value to stakeholders by highlighting the resilience and
          sustainability of financial institutions in the face of climate
          change.
        </span>
        <span className={styles["third-article-content-text"]}>
          Financial institutions should begin by assessing their current
          reporting capabilities against the CSRD and ESRS requirements,
          identifying gaps, and developing implementation plans based on the
          phased timelines.
        </span>
      </div>
    </>
  );
};

export default ThirdArticle;
