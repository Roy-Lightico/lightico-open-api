const axios = require("axios");
require("dotenv").config();
const convertToBase64 = (apikey, tenantId) => {
  let str = `${tenantId}:${apikey}`;
  let res = btoa(str);
  return `Basic ${res}`;
};

export const editData = (customerEmail, customer_name) => {
  let data = {};
  data = {
    sourceName: "lightico",
    userName: "na1test@lightico.com",
    phoneNumber: customerEmail,
    customerName: customer_name,
    emailSubject: "You have an invitation from Lightico",
    sendNow: true,
    chatEnabled: true,
    customerData: { name: customer_name },
  };
  return data;
};
export const updateSessionData = async (
  sessionId,
  sessionEnabled,
  startSession,
  customerData,
  invokeData
) => {
  let data = {
    sessionId,
    sessionEnabled,
    startSession,
    customerData,
    invokeData,
  };
  try {
    let session = await axios({
      method: "patch",
      url: `https://api.lightico.com/v2.3/sessions/${sessionId}`,
      data: data,
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    // let ID = session.data.sessionId;
    console.log("Session Data Update Success", session);
    return `Update Session Data Seccess - ${session.status} OK`;
  } catch (error) {
    console.log("MY ERROR", error.response.status);
    return `ERROR STATUS ${error.response.status}`;
  }
};
export const getSessionId = async (
  sourceName,
  userName,
  customerName,
  phoneNumber,
  email,
  sendNow,
  chatEnabled,
  attachmentEnabled,
  autoOpen
) => {
  let data = {};
  data = {
    sourceName: sourceName,
    userName: userName,
    customerName: customerName,
    email: email,
    emailSubject: "You have an invitation from Lightico",
    sendNow: sendNow,
    chatEnabled: chatEnabled,
    attachmentEnabled: attachmentEnabled,
    autoOpen: autoOpen,
  };

  try {
    let session = await axios({
      method: "post",
      url: "https://api.lightico.com/v2.3/sessions",
      data: data,
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    // let ID = session.data.sessionId;
    console.log("Got SessionId", session.data);
    return session.data;
  } catch (error) {
    console.log("MY ERROR", error.response.status);
    return `ERROR STATUS ${error.response.status}`;
  }
};

export const auth = async (apiKey, tenantId) => {
  let data = "grant_type=client_credentials";
  try {
    let res = await axios({
      method: "post",
      url: "https://api.lightico.com/v2.3/services/oauth2/token",
      data: data,
      headers: {
        Authorization: convertToBase64(apiKey, tenantId),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    let token = res.data.access_token;
    localStorage.setItem("token", `Bearer ${token}`);
    return token;
  } catch (error) {
    console.log("My res:", error);

    let token = "Authentication Failed";
    let resData = error.response.status;
    return `${token} and ${resData}`;
  }
};

export const addEsign = async (
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
) => {
  let data = {
    sessionId,
    name,
    templateId,
    // documentUri,
    // embeddedForms,
    // uriCredentials,
    // mode,
    // fields,
    // invokeData,
    // signatureText,
    // participantId,
    // role,
    // coSigners,
  };
  try {
    let eSign = await axios({
      method: "post",
      url: `https://api.lightico.com/v20.4/sessions/${sessionId}/esigns`,
      data: data,
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    // let ID = session.data.sessionId;
    console.log("Added Esign To Session Success", eSign.data);
    return `Added Esign To Session Success - ${JSON.stringify(
      eSign.data,
      undefined,
      2
    )}`;
  } catch (error) {
    console.log("MY ERROR", error.response);
    return `ERROR STATUS ${error.response.status} ${JSON.stringify(
      error.response.data,
      undefined,
      2
    )}`;
  }
};
