import SignUpForm from "@/components/Forms/SignUp/SignUp";
import styles from "./sign-up.module.css";
import { FC } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import AgroriskLogoTwo from "@/assets/imgs/logos/agrorisk-logo-2.svg";

type SignUpSectionProps = {
  onClick: () => void;
  isSubmitted: boolean;
};

const SignUpSection: FC<SignUpSectionProps> = ({ onClick, isSubmitted }) => {
  return (
    <div
      className={cn({
        [styles["sign-up-section"]]: true,
        [styles["sign-up-section-submitted"]]: isSubmitted,
      })}
    >
      {!isSubmitted ? (
        <>
          <div className={styles["sign-up-section-heading"]}>
            <div className={styles["sign-up-section-heading-content"]}>
              <span
                className={styles["sign-up-section-heading-content-preview"]}
              >
                TALK TO US
              </span>
              <span className={styles["sign-up-section-heading-content-title"]}>
                Sign up for a talk with us
              </span>
            </div>
            <span className={styles["sign-up-section-heading-tip"]}>
              Looking for a solution to measure and report climate risk in
              agriculture? Book a call with us!
            </span>
          </div>
          <SignUpForm onClick={onClick} />
        </>
      ) : (
        <div className={styles["sign-up-section-submitted-content"]}>
          <img
            src={AgroriskLogoTwo}
            className={styles["sign-up-section-submitted-content-img"]}
          />
          <div className={styles["sign-up-section-submitted-content-wrapper"]}>
            <div
              className={
                styles["sign-up-section-submitted-content-wrapper-heading"]
              }
            >
              <span
                className={
                  styles[
                    "sign-up-section-submitted-content-wrapper-heading-title"
                  ]
                }
              >
                Thanks for reaching out!
              </span>
              <span
                className={
                  styles[
                    "sign-up-section-submitted-content-wrapper-heading-subtitle"
                  ]
                }
              >
                We will be in touch shortly to follow up.
              </span>
            </div>
            <Link
              to="/"
              className={
                styles["sign-up-section-submitted-content-wrapper-link"]
              }
            >
              Back to home page
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpSection;
