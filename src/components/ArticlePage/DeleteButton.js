import React from "react";
import { Icon } from "@iconify/react";
import trashAlt from "@iconify/icons-fa-regular/trash-alt";
import styles from "./DeleteButton.module.css";

const DeleteButton = ({ id, removeFunction, topic }) => {
  return (
    <button
      className={styles.button}
      value={id}
      onClick={() => {
        console.log(id, topic);
        removeFunction(id, topic);
      }}
    >
      <Icon icon={trashAlt} />
    </button>
  );
};

export default DeleteButton;
