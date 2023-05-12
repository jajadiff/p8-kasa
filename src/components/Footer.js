import React from "react";
import footerlogo from "./../assets/logofooter.png";

function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer__logo"
        src={footerlogo}
        alt="Kasa, Footer Logo"
      ></img>
      <p className="footer__txt">© 2023 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
