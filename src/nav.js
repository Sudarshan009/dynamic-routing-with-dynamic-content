import React from "react";
import { Link, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
  const navStyle = {
    color: "white",
    margin: "10px",
  };
  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/greeting">
          <li>Greeting</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
