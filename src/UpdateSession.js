import React, { useState, useEffect } from "react";
import Body from "./Body";
import { updateSessionData } from "./utils";
const UpdateSession = () => {
  const [sessionId, getSessionId] = useState("");
  const [sessionEnabled, getSessionEnabled] = useState(true);
  const [startSession, getStartSession] = useState(true);
  const [customerData, getCustomerData] = useState("{}");
  const [invokeData, getInvokeData] = useState("{}");
  const [sessionState, updateSessionState] = useState("");

  const loadData = async () => {
    const d = await updateSessionData(
      sessionId,
      sessionEnabled,
      startSession,
      customerData,
      invokeData
    );
    updateSessionState(d);
  };

  return (
    <div>
      <div className="for-container">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="parameters-container"
        >
          <h3>Parameters</h3>
          <label htmlFor="sessionId">
            <h5>sessionId</h5>
            <input
              id="sessionId"
              placeholder="sessionId"
              value={sessionId}
              onChange={(e) => getSessionId(e.target.value)}
            />
          </label>
          <label htmlFor="sessionEnabled">
            <h5>sessionEnabled</h5>
            <input
              id="sessionEnabled"
              placeholder="sessionEnabled"
              value={sessionEnabled}
              onChange={(e) => getSessionEnabled(e.target.value)}
            />
          </label>
          <label htmlFor="startSession">
            <h5>startSession</h5>
            <input
              id="startSession"
              placeholder="startSession"
              value={startSession}
              onChange={(e) => getStartSession(e.target.value)}
            />
          </label>
          <label htmlFor="customerData">
            <h5>customerData</h5>
            <input
              id="customerData"
              placeholder="customerData"
              value={customerData}
              onChange={(e) => getCustomerData(e.target.value)}
            />
          </label>
          <label htmlFor="invokeData">
            <h5>invokeData</h5>
            <input
              id="invokeData"
              placeholder="invokeData"
              value={invokeData}
              onChange={(e) => getInvokeData(e.target.value)}
            />
          </label>

          <button type="submit" id="submit-btn" onClick={() => loadData()}>
            Execute
          </button>
        </form>
        <div>
          <Body
            sessionId={sessionId}
            invokeData={invokeData}
            customerData={customerData}
            startSession={startSession}
            sessionEnabled={sessionEnabled}
            sessionState={sessionState}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateSession;
