import React, { useState } from "react";
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
    <div id="update-session-data">
      <h3>Parameters</h3>
      <div className="form-container">
        <div className="form-inner">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="parameters-container">
              <div className="input-container">
                <label htmlFor="sessionId">
                  <h5>sessionId</h5>
                  <input
                    id="sessionId"
                    placeholder="sessionId"
                    value={sessionId}
                    onChange={(e) => getSessionId(e.target.value)}
                  />
                </label>
                <label htmlFor="customerData">
                  <h5>customerData</h5>
                  <input
                    id="customerData"
                    placeholder="{first_name: Chris}"
                    onChange={(e) => getCustomerData(e.target.value)}
                  />
                </label>
                <label htmlFor="invokeData">
                  <h5>invokeData</h5>
                  <input
                    id="invokeData"
                    placeholder="{crm_id: 1123324}"
                    onChange={(e) => getInvokeData(e.target.value)}
                  />
                </label>
              </div>
              <div className="option-container">
                <label htmlFor="sessionEnabled">
                  <h5>sessionEnabled</h5>
                  <select onChange={(e) => getSessionEnabled(e.target.value)}>
                    <option>true</option>
                    <option>false</option>
                  </select>
                </label>
                <label htmlFor="startSession">
                  <h5>startSession</h5>
                  <select onChange={(e) => getStartSession(e.target.value)}>
                    <option>true</option>
                    <option>false</option>
                  </select>
                </label>
              </div>
            </div>
          </form>
          <button type="submit" id="submit-btn" onClick={() => loadData()}>
            Execute
          </button>
        </div>
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
