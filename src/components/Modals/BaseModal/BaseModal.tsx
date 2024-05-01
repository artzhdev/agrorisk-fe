import { FC, ReactNode } from "react";

import styles from "./base-modal.module.css";

type BaseModalProps = {
  open: boolean;
  children: ReactNode;
  onClick: () => void;
};

const BaseModal: FC<BaseModalProps> = ({ open, children, onClick }) => {
  return (
    <>
      {open && (
        <div className={styles["base-modal-overlay"]} onClick={onClick}>
          {children}
        </div>
      )}
    </>
  );
};

export default BaseModal;
