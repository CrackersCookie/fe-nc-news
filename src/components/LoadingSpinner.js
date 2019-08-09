import React from "react";
import Loader from "react-loader-spinner";
import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <Loader
      type="Circles"
      color="#FFFFFF"
      height={100}
      width={100}
      className={styles.spinner}
    />
  );
};

export default LoadingSpinner;
