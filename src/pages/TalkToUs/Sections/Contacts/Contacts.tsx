import { Link } from "react-router-dom";
import styles from "./contacts.module.css";

const ContactsSection = () => {
  return (
    <div className={styles["contacts-section"]} id="contacts">
      <div className={styles["contacts-section-item"]}>
        <span className={styles["contacts-section-item-title"]}>
          Get In Touch
        </span>
        <span className={styles["contacts-section-item-subtitle"]}>
          You can always send us an email to get in touch with us directly at{" "}
          <Link
            to="#"
            className={styles["contacts-section-item-subtitle-email-link"]}
          >
            hello@agrorisk.io
          </Link>
        </span>
      </div>
      <div className={styles["contacts-section-item"]}>
        <span className={styles["contacts-section-item-title"]}>
          Connect on LinkedIn
        </span>
        <span className={styles["contacts-section-item-subtitle"]}>
          Do not hesitate to connect with us <br /> on our{" "}
          <Link
            to="https://www.linkedin.com/company/envira-aps"
            target="_blank"
            className={styles["contacts-section-item-subtitle-linkedin-link"]}
          >
            LinkedIn page.
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ContactsSection;
