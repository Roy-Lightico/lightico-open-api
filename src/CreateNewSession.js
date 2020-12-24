import React, { useState, useEffect } from "react";
import Body from "./Body";
import { getSessionId } from "./utils";
const CreateNewSession = () => {
  const [sourceName, getSourceName] = useState("lightico");
  const [userName, getuserName] = useState("example@lightico.com");
  const [customerName, getcustomerName] = useState("Chris P Bacon");
  const [phoneNumber, getphoneNumber] = useState("9176582004");
  const [email, getemail] = useState("chris@email.com");
  const [sendNow, getsendNow] = useState(true);
  const [chatEnabled, getchatEnabled] = useState(false);
  const [attachmentEnabled, getattachmentEnabled] = useState(true);
  const [autoOpen, getautoOpen] = useState(true);
  const [smsContent, getsmsContent] = useState(
    "You Have a New Message from Lightico"
  );
  const [emailSubject, getemailSubject] = useState(
    "You have an invitation from Lightico"
  );
  const [sessionState, updateSessionState] = useState("");

  const loadData = async () => {
    const d = await getSessionId(
      sourceName,
      userName,
      customerName,
      phoneNumber,
      email,
      sendNow,
      chatEnabled,
      attachmentEnabled,
      autoOpen
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
          <label htmlFor="sourceName">
            <h5>sourceName</h5>
            <input
              id="sourceName"
              placeholder="sourceName"
              value={sourceName}
              onChange={(e) => getSourceName(e.target.value)}
            />
          </label>
          <label htmlFor="userName">
            <h5>userName</h5>
            <input
              id="userName"
              placeholder="userName"
              value={userName}
              onChange={(e) => getuserName(e.target.value)}
            />
          </label>
          <label htmlFor="customerName">
            <h5>customerName</h5>
            <input
              id="customerName"
              placeholder="customerName"
              value={customerName}
              onChange={(e) => getcustomerName(e.target.value)}
            />
          </label>
          <label htmlFor="phoneNumber">
            <h5>phoneNumber</h5>
            <input
              id="phoneNumber"
              placeholder="phoneNumber"
              value={phoneNumber}
              onChange={(e) => getphoneNumber(e.target.value)}
            />
          </label>
          <label htmlFor="smsContent">
            <h5>smsContent</h5>
            <input
              id="smsContent"
              placeholder="smsContent"
              value={smsContent}
              onChange={(e) => getsmsContent(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            <h5>email</h5>
            <input
              id="email"
              placeholder="email"
              value={email}
              onChange={(e) => getemail(e.target.value)}
            />
          </label>
          <label htmlFor="emailSubject">
            <h5>emailSubject</h5>
            <input
              id="emailSubject"
              placeholder="emailSubject"
              value={emailSubject}
              onChange={(e) => getemailSubject(e.target.value)}
            />
          </label>
          <label htmlFor="sendNow">
            <h5>sendNow</h5>
            <select onChange={(e) => getsendNow(e.target.value)}>
              <option>true</option>
              <option>false</option>
            </select>
          </label>
          <label htmlFor="chatEnabled">
            <h5>chatEnabled</h5>
            <select onChange={(e) => getchatEnabled(e.target.value)}>
              <option>true</option>
              <option>false</option>
            </select>
          </label>
          <label htmlFor="attachmentEnabled">
            <h5>attachmentEnabled</h5>
            <select onChange={(e) => getattachmentEnabled(e.target.value)}>
              <option>true</option>
              <option>false</option>
            </select>
          </label>
          <label htmlFor="autoOpen">
            <h5>autoOpen</h5>
            <select onChange={(e) => getautoOpen(e.target.value)}>
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
            sourceName={sourceName}
            autoOpen={autoOpen}
            userName={userName}
            customerName={customerName}
            phoneNumber={phoneNumber}
            email={email}
            sendNow={sendNow}
            chatEnabled={chatEnabled}
            attachmentEnabled={attachmentEnabled}
            sessionState={sessionState}
            smsContent={smsContent}
            emailSubject={emailSubject}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNewSession;
