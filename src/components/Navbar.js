import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="header__list">
        <li>
          <NavLink to="/p8-kasa/">ACCUEIL</NavLink>
        </li>

        <li>
          <NavLink to="/p8-kasa/about">A PROPOS</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
