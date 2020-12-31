import React, { useState } from "react";
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
  // const [role, getrole] = useState("signer");
  // const [coSigners, getcoSigners] = useState("");

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
      participantId
      // role,
      // coSigners
    );
    updateSessionState(d);
  };

  return (
    <div id="add-esign">
      <h3>Parameters</h3>
      <div className="form-container">
        <div className="form-inner">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="parameters-container">
              <label htmlFor="sessionId">
                <h5>sessionId</h5>
                <input
                  id="sessionId"
                  placeholder="sessionId"
                  onChange={(e) => getsessionId(e.target.value)}
                />
              </label>
              <label htmlFor="name">
                <h5>name</h5>
                <input
                  id="name"
                  placeholder="name"
                  onChange={(e) => getname(e.target.value)}
                />
              </label>
              <label htmlFor="templateId">
                <h5>templateId</h5>
                <input
                  id="templateId"
                  placeholder="templateId"
                  onChange={(e) => gettemplateId(e.target.value)}
                />
              </label>
              <label htmlFor="documentUri">
                <h5>documentUri</h5>
                <input
                  id="documentUri"
                  placeholder="documentUri"
                  onChange={(e) => getdocumentUri(e.target.value)}
                />
              </label>
              <label htmlFor="embeddedForms">
                <h5>embeddedForms</h5>
                <input
                  id="embeddedForms"
                  placeholder="embeddedForms"
                  onChange={(e) => getembeddedForms(e.target.value)}
                />
              </label>
              <label htmlFor="uriCredentials">
                <h5>uriCredentials</h5>
                <input
                  id="uriCredentials"
                  placeholder="uriCredentials"
                  onChange={(e) => geturiCredentials(e.target.value)}
                />
              </label>
              <label htmlFor="mode">
                <h5>mode</h5>
                <input
                  id="mode"
                  placeholder="mode"
                  onChange={(e) => getmode(e.target.value)}
                />
              </label>
              <label htmlFor="fields">
                <h5>fields</h5>
                <input
                  id="fields"
                  placeholder="fields"
                  onChange={(e) => getfields(e.target.value)}
                />
              </label>
              <label htmlFor="signatureText">
                <h5>signatureText</h5>
                <input
                  id="signatureText"
                  placeholder="signatureText"
                  onChange={(e) => getsignatureText(e.target.value)}
                />
              </label>
              <label htmlFor="participantId">
                <h5>participantId</h5>
                <input
                  id="participantId"
                  placeholder="participantId"
                  onChange={(e) => getparticipantId(e.target.value)}
                />
              </label>
              <label htmlFor="invokeData">
                <h5>invokeData</h5>
                <input
                  id="invokeData"
                  placeholder="invokeData"
                  onChange={(e) => getinvokeData(e.target.value)}
                />
              </label>
            </div>
          </form>
          <button type="submit" id="submit-btn" onClick={() => loadData()}>
            Execute
          </button>
        </div>
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
