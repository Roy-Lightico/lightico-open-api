import React from "react";

const Workflows = () => {
  return (
    <div>
      <div className="outer-method" onClick={() => hide()}>
        <h2 onClick={() => hide()}>Workflows</h2>
        <h2>
          <i className="fas fa-arrow-right"></i>
        </h2>
      </div>
      <div style={{ display: "block" }} id="workflows">
        <div className="method-block">
          <p className="method-box">POST</p>
          <p className="end-point">/v2.6/sessions/*sessionId*/workflows</p>
          <p>Add Workflow to session</p>
        </div>
      </div>
    </div>
  );
};

export default Workflows;
const hide = () => {
  let div = document.getElementById("workflows");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
};
