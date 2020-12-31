import React from "react";
import CreateNewSession from "./CreateNewSession";
// import { updateSessionData } from "./utils";
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
          <div className="method-row" onClick={() => hideNewSession()}>
            <p className="method-box">POST</p>
            <p className="end-point">/v2.3/sessions</p>
            <p>Create New Session</p>
          </div>
          <CreateNewSession />
        </div>
        <div className="method-block">
          <div className="method-row" onClick={() => hideUpdateSession()}>
            <p className="patch-method-box">PATCH</p>
            <p className="end-point">/v2.3/sessions/*sessionId*</p>
            <p> Update Session Data</p>
          </div>
          <UpdateSession />
        </div>
      </div>
    </div>
  );
};

export default Sessions;

const hide = () => {
  let div = document.getElementById("sessions");
  if (div) {
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
};
const hideNewSession = () => {
  let div = document.getElementById("create-new-session");
  if (div) {
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
};
const hideUpdateSession = () => {
  let div = document.getElementById("update-session-data");
  if (div) {
    if (div.style.display === "none") {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
};
