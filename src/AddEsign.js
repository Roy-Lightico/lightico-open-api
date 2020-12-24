import React, { useState, useEffect } from "react";
import Body from "./Body";
import { addEsign } from "./utils";
const AddEsign = () => {
  const [sessionId, getsessionId] = useState("");
  const [name, getname] = useState("name");
  const [templateId, gettemplateId] = useState("");
  const [documentUri, getdocumentUri] = useState("");
  const [embeddedForms, getembeddedForms] = useState("");
  const [mode, getmode] = useState("");
  const [uriCredentials, geturiCredentials] = useState("");
  const [fields, getfields] = useState("");
  const [invokeData, getinvokeData] = useState("{}");
  const [signatureText, getsignatureText] = useState("SIGNED");
  const [participantId, getparticipantId] = useState(1);
  const [role, getrole] = useState("signer");
  const [coSigners, getcoSigners] = useState("");

  const [sessionState, updateSessionState] = useState("");

  const loadData = async () => {
    const d = await addEsign(
      sessionId,
      name,
      templateId,
      documentUri,
      embeddedForms,
      uriCredentials,
      mode,
      fields,
      invokeData,
      signatureText,
      participantId,
      role,
      coSigners
    );
    updateSessionState(d);
  };

  return (
    <div>
      <div className="form-container">
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
              onChange={(e) => getsessionId(e.target.value)}
            />
          </label>
          <label htmlFor="name">
            <h5>name</h5>
            <input
              id="name"
              placeholder="name"
              value={name}
              onChange={(e) => getname(e.target.value)}
            />
          </label>
          <label htmlFor="templateId">
            <h5>templateId</h5>
            <input
              id="templateId"
              placeholder="templateId"
              value={templateId}
              onChange={(e) => gettemplateId(e.target.value)}
            />
          </label>
          <label htmlFor="documentUri">
            <h5>documentUri</h5>
            <input
              id="documentUri"
              placeholder="documentUri"
              value={documentUri}
              onChange={(e) => getdocumentUri(e.target.value)}
            />
          </label>
          <label htmlFor="embeddedForms">
            <h5>embeddedForms</h5>
            <input
              id="embeddedForms"
              placeholder="embeddedForms"
              value={embeddedForms}
              onChange={(e) => getembeddedForms(e.target.value)}
            />
          </label>
          <label htmlFor="uriCredentials">
            <h5>uriCredentials</h5>
            <input
              id="uriCredentials"
              placeholder="uriCredentials"
              value={uriCredentials}
              onChange={(e) => geturiCredentials(e.target.value)}
            />
          </label>
          <label htmlFor="mode">
            <h5>mode</h5>
            <input
              id="mode"
              placeholder="mode"
              value={mode}
              onChange={(e) => getmode(e.target.value)}
            />
          </label>
          <label htmlFor="fields">
            <h5>fields</h5>
            <select onChange={(e) => getfields(e.target.value)}>
              <option>true</option>
              <option>false</option>
            </select>
          </label>
          <label htmlFor="signatureText">
            <h5>signatureText</h5>
            <select onChange={(e) => getsignatureText(e.target.value)}>
              <option>true</option>
              <option>false</option>
            </select>
          </label>
          <label htmlFor="participantId">
            <h5>participantId</h5>
            <select onChange={(e) => getparticipantId(e.target.value)}>
              <option>true</option>
              <option>false</option>
            </select>
          </label>
          <label htmlFor="invokeData">
            <h5>invokeData</h5>
            <select onChange={(e) => getinvokeData(e.target.value)}>
              <option>{true}</option>
              <option>{false}</option>
            </select>
          </label>
          <button type="submit" id="submit-btn" onClick={() => loadData()}>
            Execute
          </button>
        </form>
        <div>
          <Body
            sessionId={sessionId}
            name={name}
            templateId={templateId}
            documentUri={documentUri}
            invokeData={invokeData}
            mode={mode}
            embeddedForms={embeddedForms}
            fields={fields}
            participantId={participantId}
            sessionState={sessionState}
            signatureText={signatureText}
            uriCredentials={uriCredentials}
          />
        </div>
      </div>
    </div>
  );
};

export default AddEsign;
