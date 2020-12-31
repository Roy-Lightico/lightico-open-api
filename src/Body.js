import React from "react";

const Body = (props) => {
  const {
    sourceName,
    userName,
    customerName,
    phoneNumber,
    email,
    sendNow,
    chatEnabled,
    sessionState,
    attachmentEnabled,
    autoOpen,
    emailSubject,
    smsContent,
    sessionEnabled,
    startSession,
    customerData,
    invokeData,
    sessionId,
    name,
    documents,
    templateId,
    documentUri,
    embeddedForms,
    uriCredentials,
    mode,
    fields,
    signatureText,
    participantId,
    role,
    coSigners,
  } = props;

  let obj = {
    sourceName,
    userName,
    customerName,
    phoneNumber,
    email,
    sendNow,
    chatEnabled,
    attachmentEnabled,
    autoOpen,
    sessionId,
    invokeData,
    customerData,
    sessionEnabled,
    startSession,
    name,
    templateId,
    documentUri,
    embeddedForms,
    uriCredentials,
    mode,
    fields,
    signatureText,
    participantId,
    role,
    coSigners,
    documents,
    emailSubject,
    smsContent,
  };

  return (
    <div>
      <h1>Request:</h1>
      <pre>{JSON.stringify(obj, undefined, 2)}</pre>
      <div>
        <pre>
          Resposne:
          {typeof sessionState === "object"
            ? JSON.stringify(sessionState, undefined, 2)
            : sessionState}
        </pre>
      </div>
    </div>
  );
};

export default Body;
