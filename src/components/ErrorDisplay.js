import React from "react";

const ErrorDisplay = ({ status, msg }) => {
  return (
    <section>
      <h1>{status}</h1>
      <h3>Something went wrong.... {msg}</h3>
    </section>
  );
};

export default ErrorDisplay;
