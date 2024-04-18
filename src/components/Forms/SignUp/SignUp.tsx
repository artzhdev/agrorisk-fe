import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./sign-up.module.css";
import BaseInput from "@/components/Inputs/BaseInput/BaseInput";
import jsonp from "jsonp";

const SignUpForm = () => {
  const [values, setValues] = useState({
    FNAME: "",
    LNAME: "",
    EMAIL: "",
    phone: "",
    message: "",
  });
  const [subscribe, setSubcribe] = useState("subscribe");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailchimpBaseUrl = import.meta.env.VITE_MAILCHIMP_BASE_URL;
    const mailchimpApiKey = import.meta.env.VITE_MAILCHIMP_API_KEY;
    const mailchimpFormId = import.meta.env.VITE_MAILCHIMP_FORM_ID;
    const mailchimpId = import.meta.env.VITE_MAILCHIMP_ID;

    const url = `${mailchimpBaseUrl}?u=${mailchimpApiKey}&amp;id=${mailchimpId}&amp;f_id=${mailchimpFormId}`;

    jsonp(
      `${url}&EMAIL=${values.EMAIL}&FNAME=${values.FNAME}&LNAME=${values.LNAME}`,
      { param: "c" },
      (_, data) => {
        if (data && Object.keys(data).length) {
          setValues({
            FNAME: "",
            LNAME: "",
            EMAIL: "",
            phone: "",
            message: "",
          });
          setSubcribe("subscribe");
        }
      }
    );
  };

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubscribe = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setSubcribe(value);
  };

  return (
    <div className={styles["sign-up-container"]}>
      <form
        className={styles["sign-up-container-form"]}
        onSubmit={handleSubmit}
      >
        <div className={styles["sign-up-container-form-required"]}>
          <label className={styles["sign-up-container-form-label"]}>
            First name *
            <BaseInput
              placeholder="First"
              name="FNAME"
              value={values.FNAME}
              onChange={handleChange}
              className={styles["sign-up-container-form-input"]}
            />
          </label>
          <label className={styles["sign-up-container-form-label"]}>
            Last name *
            <BaseInput
              name="LNAME"
              value={values.LNAME}
              onChange={handleChange}
              placeholder="Last"
              className={styles["sign-up-container-form-input"]}
            />
          </label>
          <label className={styles["sign-up-container-form-label"]}>
            Business email *
            <BaseInput
              name="EMAIL"
              value={values.EMAIL}
              onChange={handleChange}
              placeholder="Email"
              className={styles["sign-up-container-form-input"]}
            />
          </label>
        </div>
        <div className={styles["sign-up-container-form-required"]}>
          <label className={styles["sign-up-container-form-label"]}>
            Phone number *
            <BaseInput
              name="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder="Phone"
              className={styles["sign-up-container-form-input"]}
            />
          </label>
          <label className={styles["sign-up-container-form-label"]}>
            Message *
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="What would you like to talk about?"
              className={styles["sign-up-container-form-textarea"]}
            />
          </label>
        </div>
        <div className={styles["sign-up-container-form-subscribe"]}>
          <span className={styles["sign-up-container-form-subscribe-label"]}>
            Do you want to sign up for <br /> Agro Risk’s newsletter?
          </span>
          <div className={styles["sign-up-container-form-subscribe-inputs"]}>
            <label
              className={
                styles["sign-up-container-form-subscribe-inputs-label"]
              }
            >
              <input
                type="radio"
                value="subscribe"
                checked={subscribe === "subscribe"}
                onChange={handleSubscribe}
                className={
                  styles["sign-up-container-form-subscribe-inputs-label-item"]
                }
              />
              Yes, I’d like to subscribe.
            </label>
            <label
              className={
                styles["sign-up-container-form-subscribe-inputs-label"]
              }
            >
              <input
                type="radio"
                value="unsubscribe"
                checked={subscribe === "unsubscribe"}
                onChange={handleSubscribe}
                className={
                  styles["sign-up-container-form-subscribe-inputs-label-item"]
                }
              />
              No, thank you.
            </label>
          </div>
        </div>
        <button
          type="submit"
          className={styles["sign-up-container-form-submit-btn"]}
        >
          Submit the form
        </button>
        <div className={styles["sign-up-container-form-description"]}>
          <span className={styles["sign-up-container-form-description-title"]}>
            With{" "}
            <span
              className={
                styles["sign-up-container-form-description-title-bold"]
              }
            >
              Agro Risk
            </span>{" "}
            you can:
          </span>
          <ul className={styles["sign-up-container-form-description-list"]}>
            <li className={styles["sign-up-container-form-description-list-item"]}>
              Screen one or multiple portfolios to evaluate their
              sustainability.
            </li>
            <li className={styles["sign-up-container-form-description-list-item"]}>Provide accurate sustainability metrics to your clients.</li>
            <li className={styles["sign-up-container-form-description-list-item"]}>
              Get access to insights from over 50 data sources, including NGOs,
              academic institutions, governments and media.
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
