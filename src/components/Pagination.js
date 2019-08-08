import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ p, pMax, handlePageChange }) => {
  return (
    <div className={styles.flexPagination}>
      <button
        className={styles.buttonPagination}
        onClick={() => handlePageChange(-1)}
        disabled={p <= 1}
      >
        prev
      </button>
      <p className={styles.pPagination}>
        page {p} of {pMax}
      </p>
      <button
        className={styles.buttonPagination}
        onClick={() => handlePageChange(1)}
        disabled={p >= pMax}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
