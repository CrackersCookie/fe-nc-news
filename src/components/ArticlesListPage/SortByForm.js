import React from 'react';

const SortByForm = ({ sort_by, HandleFormChange }) => {
  return (
    <form>
      <label>
        <select value={sort_by} onChange={HandleFormChange}>
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
      </label>
    </form>
  );
};

export default SortByForm;