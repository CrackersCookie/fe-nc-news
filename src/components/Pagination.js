import React from "react";

const Pagination = ({ p, pMax, handlePageChange }) => {
  return (
    <div>
      <button onClick={() => handlePageChange(-1)} disabled={p <= 1}>
        prev
      </button>
      <button onClick={() => handlePageChange(1)} disabled={p >= pMax}>
        next
      </button>
    </div>
  );
};

export default Pagination;
