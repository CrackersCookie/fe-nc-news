import React from "react";
import styles from "./ErrorDisplay.module.css";

const ErrorDisplay = ({ status, msg }) => {
  return (
    <section>
      <h3>Something went wrong.... {msg}</h3>
      <h1 className={styles.bigError}>{status}</h1>
    </section>
  );
};

export default ErrorDisplay;
