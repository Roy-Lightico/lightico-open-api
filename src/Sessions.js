import React, { useState } from "react";
import CreateNewSession from "./CreateNewSession";
import { updateSessionData } from "./utils";
import UpdateSession from "./UpdateSession";

const Sessions = () => {
  return (
    <div>
      <div className="outer-method" onClick={() => hide()}>
        <h2>Sessions</h2>
        <h2>
          <i className="fas fa-arrow-right"></i>
        </h2>
      </div>
      <div style={{ display: "block" }} id="sessions">
        <div className="method-block">
          <p className="method-box">POST</p>
          <p className="end-point">/v2.3/sessions</p>
          <p>Create New Session</p>
          <CreateNewSession />
        </div>
        <div className="method-block">
          <p className="patch-method-box">Patch</p>
          <p className="end-point">/v2.3/sessions/*sessionId*</p>
          <p> Update Session Data</p>
          <UpdateSession />
        </div>
      </div>
    </div>
  );
};

export default Sessions;
const hide = () => {
  let div = document.getElementById("sessions");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
};
