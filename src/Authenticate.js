import React, { useState } from "react";
import { auth } from "./utils";
// const axios = require("axios");
// var api = "ff202081-61d5-42dc-b715-53027d9fe857";
// var client = "b66a61e9-9343-4ddb-b479-45da30157631";

const Authenticate = () => {
  const [apiKey, getKey] = useState("");
  const [tenantId, getTenantId] = useState("");

  return (
    <div className="auth-container">
      <div className="outer-method" onClick={() => hide()}>
        <h2 onClick={() => hide()}>Authentication</h2>
        <h2>
          <i className="fas fa-arrow-right"></i>
        </h2>
      </div>
      <form
        style={{ display: "block" }}
        id="authentication"
        className="auth-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="method-block">
          <p className="method-box">POST</p>
          <p className="end-point">/v2.3/services/oauth2/token</p>
          <p>Description: Create OAuth2 token.</p>
        </div>
        <label htmlFor="API Key">
          API Key
          <input
            id="API Key"
            placeholder="API Key"
            onChange={(e) => getKey(e.target.value)}
          />
        </label>
        <label htmlFor="Client ID">
          Client ID
          <input
            id="Client ID"
            placeholder="Client ID"
            onChange={(e) => getTenantId(e.target.value)}
          />
        </label>
        <p>Request Params</p>
        grant_type:
        <select>
          <option>“client_credentials”</option>
        </select>
        <button
          type="submit"
          onClick={async () => await auth(apiKey, tenantId)}
        >
          Execute
        </button>
      </form>
      {/* <div>Response: </div> */}
    </div>
  );
};

export default Authenticate;

const hide = () => {
  let div = document.getElementById("authentication");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
};
