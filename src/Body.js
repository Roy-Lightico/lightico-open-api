import React, { useEffect, useState } from "react";

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
    sourceName: sourceName,
    userName: userName,
    customerName: customerName,
    phoneNumber: phoneNumber,
    email: email,
    sendNow: sendNow,
    chatEnabled: chatEnabled,
    attachmentEnabled: attachmentEnabled,
    autoOpen: autoOpen,
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
