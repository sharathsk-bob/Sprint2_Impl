import React from 'react'
import { useNavigate } from "react-router-dom";
function logOut() {
    const history=useNavigate();
    const logOut=()=>{
        localStorage.setItem("isLoggedIn",false);
        history("/");
    }
  return (
    <div>{logOut}</div>
  )
}

export default logOut