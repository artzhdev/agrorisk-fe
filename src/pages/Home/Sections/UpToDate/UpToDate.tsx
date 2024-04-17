import ButtonLink from "@/components/Buttons/ButtonLink/ButtonLink";
import styles from "./up-to-date.module.css";
import BaseInput from "@/components/Inputs/BaseInput/BaseInput";
import { useState } from "react";

const UpToDateSection = () => {
  const [email, setEmail] = useState("");

  return (
    <div className={styles["up-to-date-section"]}>
      <div className={styles["up-to-date-section-content"]}>
        <span className={styles["up-to-date-section-content-title"]}>
          Want to be up-to-date?
        </span>
        <span className={styles["up-to-date-section-content-subtitle"]}>
          Sustainable investing is about much more than ratings. Sign up for
          news, product updates and challenging perspectives from Agro Risk.
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
  );
};

export default UpToDateSection;
