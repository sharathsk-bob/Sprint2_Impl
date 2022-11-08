import React from 'react';
import { useState, useEffect } from "react";
import {useSelector,useDispatch} from "react-redux";
import { login} from "../actions";
//import state from "../Store";

//import axios from 'axios';
function UserLogin() {
  const initialValues={loginName:"",email:"",password:""};
const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const isLogged=useSelector((state)=>state.register);
  const dispatch=useDispatch();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  //const dis1=()=>{dispatch(register())};
  const fetchUsers = async() =>{
    //await axios.get(`http://localhost:8020/capg/userinterface/users/${id}`, JSON.stringify(formValues),{headers:{"Content-Type" : "application/json"}}).then((data)=>console.log(data.data)).catch((error)=>console.log(error));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  // const handleSearch=()=>{
  //   //var errorMessage;
  //   axios
  //   .get(
  //     `http://localhost:8020/user/`
  //   )

  // };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validCredentials =()=>{
      //if(formValues.email==fetchUsers)
  }
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.loginName) {
      errors.loginName = "Login name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>loginName:</label>
            <input
              type="text"
              name="loginName"
              placeholder="loginName"
              value={formValues.loginName}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.loginName}</p>
          <div className="field">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="fluid ui button blue" onClick={()=>{dispatch(login())}}>Submit</button>
          <button onClick={()=>{dispatch(login())}}>test</button>
          {isLogged? <p>Logged In</p>:<p>please log in</p>} 
        </div>
      </form>
      
    </div>
  )
}

export default UserLogin