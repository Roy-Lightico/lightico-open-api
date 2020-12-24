import React from "react";
import AddEsign from "./AddEsign";

const Esigns = () => {
  return (
    <div>
      <div className="outer-method" onClick={() => hide()}>
        <h2 onClick={() => hide()}>Esigns</h2>
        <h2>
          <i className="fas fa-arrow-right"></i>
        </h2>
      </div>
      <div style={{ display: "block" }} id="esigns">
        <div className="method-block">
          <p className="method-box">POST</p>
          <p className="end-point">/v20.4/sessions/*{"sessionId"}*/esigns</p>
          <p>Add esign document to session</p>
          <AddEsign />
        </div>
      </div>
    </div>
  );
};

export default Esigns;
const hide = () => {
  let div = document.getElementById("esigns");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
};
