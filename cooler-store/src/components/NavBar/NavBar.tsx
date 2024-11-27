import React from "react";
import NavBarButtons from "../NavBarButtons/NavBarButtons";
import "./NavBar.css";
import logo from "../../assets/logo.png";

function NavBar() {
  return (
    <div className="container">
      <div className="name-logo">
        <img src={logo} className="logo" alt="" />
        <p className="name">Cooler</p>
      </div>

      <NavBarButtons />
    </div>
  );
}

export default NavBar;
