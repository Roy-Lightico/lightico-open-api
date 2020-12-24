import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <h2>Lightico API V2.6</h2>
        <h4>[ Base URL: api.lightico.com ]</h4>
        {/* <p>
          Lightico API Overview: Lightico's API brings the power of Lightico to
          innumerable customer touchpoints. Thanks to the API, businesses can
          sell and serve their customers immediately, efficiently and
          effectively from any touchpoint. With powerful functionality including
          document collection, file sharing, dynamic form filling and instant
          eSignatures, businesses can provide robust self-service solutions to
          businesses serving 'on-the-go' customers. Sell and service your
          customers more effectively and efficiently with Lightico. Lightico is
          installed for you pre-configured, making your life and the life of
          your users that much easier.
        </p> */}
      </div>
      <div className="header-bottom">
        <select>
          <option>HTTPS</option>
        </select>
        <button type="button" className="auth-btn">
          <span className="auth-span">Authorize</span>
          <i className="fas fa-unlock"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
