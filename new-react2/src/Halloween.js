import React from "react";
import { useState } from "react";

const Halloween = () => {
  const [message, setMessage] = useState("");

  const onClickTreatButton = () => {
    setMessage("Treat :)");
  };
  const onClickTrickButton = () => {
    setMessage("Trick :(");
  };

  return (
    <div>
      <h1>Treat or Trick?</h1>
      <button id="treat-button" onClick={onClickTreatButton}>
        Treat
      </button>
      <button id="trick-button" onClick={onClickTrickButton}>
        Trick
      </button>
      <p>{message}</p>
    </div>
  );
};

export default Halloween;
