import { FC } from "react";
import BaseModal from "../BaseModal/BaseModal";
import styles from "./submtting-modal.module.css";
import submittingModalImg from "@/assets/imgs/submitting-modal-img.png";
import EnvelopeIcon from "@/assets/icons/envelope.svg";

type SubmittingModalProps = {
  open: boolean;
  onClick: () => void;
};

const SubmittingModal: FC<SubmittingModalProps> = ({ open, onClick }) => {
  return (
    <BaseModal open={open} onClick={onClick}>
      <div className={styles["submitting-modal-body"]}>
        <div className={styles["submitting-modal-body-content"]}>
          <img src={EnvelopeIcon} />
          <div className={styles["submitting-modal-body-content-wrapper"]}>
            <span className={styles["submitting-modal-body-content-title"]}>
              Thanks for submitting to our newsletter!
            </span>
            <span className={styles["submitting-modal-body-content-subtitle"]}>
              We will send you our <br /> latest insights pieces and updates,
              and we promise <br /> to never spam
            </span>
          </div>
        </div>
        <img
          src={submittingModalImg}
          className={styles["submitting-modal-body-img"]}
        />
      </div>
    </BaseModal>
  );
};

export default SubmittingModal;
