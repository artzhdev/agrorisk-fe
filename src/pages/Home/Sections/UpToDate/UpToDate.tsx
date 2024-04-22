import ButtonLink from "@/components/Buttons/ButtonLink/ButtonLink";
import styles from "./up-to-date.module.css";
import BaseInput from "@/components/Inputs/BaseInput/BaseInput";
import { useState } from "react";

const UpToDateSection = () => {
  const [email, setEmail] = useState("");

  return (
    <div className={styles["up-to-date-section"]}>
      <div className={styles["up-to-date-section-wrapper"]}>
        <div className={styles["up-to-date-section-content"]}>
          <span className={styles["up-to-date-section-content-title"]}>
            Stay Informed
          </span>
          <span className={styles["up-to-date-section-content-subtitle"]}>
            Sign up for our newsletter to receive news, product updates and
            analyses from AgroRisk.
          </span>
          <BaseInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email here..."
            name="email"
          />
        </div>
        <ButtonLink
          to="#"
          title="Subscribe"
          className={styles["up-to-date-section-subscribe-link"]}
        />
      </div>
    </div>
  );
};

export default UpToDateSection;
