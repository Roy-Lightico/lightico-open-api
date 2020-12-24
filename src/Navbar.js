import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src="https://images.lighti.co/logo-color.png"
        alt="logo"
        className="logo"
      />
      <p>Lightico API Docs V2.6</p>
      <a href="/login" className="navbar_txt">
        Login
      </a>
    </div>
  );
};

export default Navbar;
