import React from "react";
import { Link } from "react-router-dom";
//Hello
function Nav() {
  const navStyle = { color: "red" };
  return (
    <nav>
      <h3>Nutrition App</h3>
      <ul>
        <Link style={navStyle} to="/register">
          <li>Register</li>
       </Link>
        <Link style={navStyle} to="/login" >
          <li>Login</li>
        </Link>
        <Link style={navStyle} to="/WeightLog" >
          <li>WeightLog</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;