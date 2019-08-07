import React from "react";
import styles from "./AscDescButtons.module.css";

const AscDescButtons = ({ HandleFormChange }) => {
  return (
    <div>
      <button className={styles.button} name="asc" onClick={HandleFormChange}>
        Asc
      </button>
      <button className={styles.button} name="desc" onClick={HandleFormChange}>
        Desc
      </button>
    </div>
  );
};

export default AscDescButtons;
