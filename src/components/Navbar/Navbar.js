import React from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <p>Country Info</p>
      </Link>
      <ThemeSwitcher />
    </div>
  );
}

export default Navbar;
