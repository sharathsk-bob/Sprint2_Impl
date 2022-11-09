import React from "react";
import { NavLink } from "react-router-dom";
//Hello
const Nav =(props)=> {
  const navStyle = { color: "red" };
  const logOut=()=>{
    localStorage.setItem("isLoggedIn",0)
}
  return (
    <nav>
      <h3>Nutrition App</h3>
      <ul style={{listStyle:"none"}}>
        <NavLink style={navStyle} to="/register">
          <li>Register</li>
       </NavLink>
        <NavLink style={navStyle} to="/login" >
          <li>Login</li>

        </NavLink>
        <NavLink style={navStyle} to="/" onClick={logOut}>
          <li>logOut</li>
        </NavLink>
        
        <NavLink style={navStyle} to="/DietPlan" >
          <li>DietPlan</li>
        </NavLink>
      
        
        <NavLink style={navStyle} to="/WeightLog" >
          <li>WeightLog</li>
        </NavLink>
        <NavLink style={navStyle} to="/nutrition" >
          <li>NutritionModule</li>
        </NavLink>

      </ul>
    </nav>
  );
}

export default Nav;