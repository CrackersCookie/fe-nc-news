import React from "react";
import styles from "./SortByForm.module.css";

const SortByForm = ({ sort_by, HandleFormChange }) => {
  return (
    <form className={styles.form}>
      <label>
        <select
          value={sort_by}
          onChange={HandleFormChange}
          className={styles.select}
        >
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
      </label>
    </form>
  );
};

export default SortByForm;
