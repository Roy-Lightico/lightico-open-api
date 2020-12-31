import React, { useState } from "react";
import { auth } from "./utils";

const Authenticate = (props) => {
  const [apiKey, getKey] = useState("");
  const [tenantId, getTenantId] = useState("");
  const { toggleModal, showModal } = props;
  const [sessionState, updateSessionState] = useState("");

  const loadData = async () => {
    const d = await auth(apiKey, tenantId);
    updateSessionState(d);
  };

  return (
    <div>
      <div className="auth-container">
        <div className="auth-form"></div>
        <form
          style={{ display: "block" }}
          id="authentication"
          className="auth-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="API Key" id="api-Key">
            API Key
            <input
              id="API Key"
              placeholder="API Key"
              onChange={(e) => getKey(e.target.value)}
            />
          </label>
          <label htmlFor="Client ID" id="client-id">
            Client ID
            <input
              id="Client ID"
              placeholder="Client ID"
              onChange={(e) => getTenantId(e.target.value)}
            />
          </label>
          <p>Parameters</p>
          <div id="grant-type">
            <div>grant_type:</div>
            <select>
              <option>“client_credentials”</option>
            </select>
          </div>
          <div id="authForm-btn">
            <button
              type="button"
              onClick={() => toggleModal(!showModal)}
              id="x-btn"
            >
              Close
            </button>
            <button type="submit" id="auth-btn" onClick={() => loadData()}>
              Authorize
            </button>
          </div>
        </form>
        <pre>
          {typeof sessionState === "object"
            ? JSON.stringify(sessionState, undefined, 2)
            : sessionState}
        </pre>
      </div>
    </div>
  );
};

export default Authenticate;
