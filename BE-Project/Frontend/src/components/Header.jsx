import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>My Website</h1>
      <nav>
        <Link className="home" to="/">
          Home
        </Link>
        <Link className="detect" to="/detect">
          Detect
        </Link>
      </nav>
    </header>
  );
}

export default Header;
