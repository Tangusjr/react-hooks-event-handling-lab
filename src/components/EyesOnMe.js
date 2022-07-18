// Code EyesOnMe Component Here
import React from "react";

const EyesOnMe = () => {
  function handleFocus() {
    console.log("Good");
  }
  function handleBlur() {
    console.log("Hey! Eyes on Me");
  }
  return (
    <div>
      <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on Me</button>
    </div>
  );
};

export default EyesOnMe;
