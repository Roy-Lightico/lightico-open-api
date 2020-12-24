import React from "react";

const Payment = () => {
  return (
    <div>
      <div className="outer-method" onClick={() => hide()}>
        <h2 onClick={() => hide()}>Payments</h2>
        <h2>
          <i className="fas fa-arrow-right"></i>
        </h2>
      </div>
      <div style={{ display: "block" }} id="payments">
        <div className="method-block">
          <p className="method-box">POST</p>
          <p className="end-point">/v2.6/sessions/*sessionId*/payments</p>
          <p>Add Payment to session</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
const hide = () => {
  let div = document.getElementById("payments");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
};
