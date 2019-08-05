import React from 'react';

const AscDescButtons = ({ HandleFormChange }) => {
  return (
    <div>
      <button name="asc" onClick={HandleFormChange}>Asc</button>
      <button name="desc" onClick={HandleFormChange}>Desc</button>
    </div>
  );
};

export default AscDescButtons;
