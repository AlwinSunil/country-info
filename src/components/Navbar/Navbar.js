import React from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <p>Country Info</p>
      <ThemeSwitcher />
    </div>
  );
}

export default Navbar;
