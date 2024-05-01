import styles from "./up-to-date.module.css";
import BaseInput from "@/components/Inputs/BaseInput/BaseInput";
import { useState } from "react";
import jsonp from "jsonp";
import SubmittingModal from "@/components/Modals/Submitting/SubmittingModal";

const UpToDateSection = () => {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubscribe = () => {
    const mailchimpBaseUrl = import.meta.env.VITE_MAILCHIMP_BASE_URL;
    const mailchimpApiKey = import.meta.env.VITE_MAILCHIMP_API_KEY;
    const mailchimpFormId = import.meta.env.VITE_MAILCHIMP_FORM_ID;
    const mailchimpId = import.meta.env.VITE_MAILCHIMP_ID;

    const url = `${mailchimpBaseUrl}?u=${mailchimpApiKey}&amp;id=${mailchimpId}&amp;f_id=${mailchimpFormId}`;

    jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, data) => {
      if (data && Object.keys(data).length) {
        setEmail("");
        setIsOpen(true);
      }
    });
  };

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
        <button
          className={styles["up-to-date-section-subscribe-btn"]}
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
      <SubmittingModal open={isOpen} onClick={() => setIsOpen(false)} />
    </div>
  );
};

export default UpToDateSection;
