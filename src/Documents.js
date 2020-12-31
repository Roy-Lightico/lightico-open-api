import React from "react";

const Documents = () => {
  return (
    <div>
      <div className="outer-method" onClick={() => hide()}>
        <h2>Documents</h2>
        <h2>
          <i className="fas fa-arrow-right"></i>
        </h2>
      </div>
      <div style={{ display: "block" }} id="documents">
        <div className="method-block">
          <div className="method-row">
            <p className="method-box">POST</p>
            <p className="end-point">/sessions/*sessionId*/documentsRequests</p>
            <p>Add Document Request to session</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
const hide = () => {
  let div = document.getElementById("documents");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
};
