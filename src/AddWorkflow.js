import React, { useState } from "react";
import Body from "./Body";
import { addWorkflow } from "./utils";
const AddWorkflow = () => {
  const [sessionId, getsessionId] = useState("");
  const [name, getname] = useState("name");
  const [templateId, gettemplateId] = useState("");
  //   const [documentUri, getdocumentUri] = useState("");
  const [documents, getDocuments] = useState("");
  //   const [mode, getmode] = useState("");

  const [sessionState, updateSessionState] = useState("");

  const loadData = async () => {
    const d = await addWorkflow(sessionId, name, templateId, documents);
    updateSessionState(d);
  };

  return (
    <div id="add-workflow">
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
              <label htmlFor="documents">
                <h5>documents</h5>
                <input
                  id="wf_documents"
                  placeholder="documents"
                  onChange={(e) => getDocuments(e.target.value)}
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
            documents={documents}
            sessionState={sessionState}
          />
        </div>
      </div>
    </div>
  );
};

export default AddWorkflow;
