import React from "react";
import logo from "../assets/logo.png";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">
        <img src={logo} alt="Logo Kasa" />
      </h1>
      <Navbar />
    </header>
  );
}

export default Header;