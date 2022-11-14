import axios from 'axios';
import React from 'react';
import { useState, useEffect } from "react";
import {useSelector,useDispatch} from "react-redux";
import { login, register } from "../actions";
import state from "../Store";

//import axios from 'axios';
function UserRegister() {
  const initialValues={loginName:"",email:"",password:"",role:""};
const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [response, setResponse] = useState();
  const dispatch=useDispatch();
  const isRegistered=useSelector((state)=>state.register);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const fetchProducts = async () =>{
    await axios.post('http://localhost:8082/capg/userinterface/users', JSON.stringify(formValues),{headers:{"Content-Type" : "application/json"}})
    .then((data)=>{console.log(data.data);setResponse(data.data);}).catch((error)=>{console.log(error);setResponse(error.response.data.errorMessage);});
  }
 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

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
    if(!values.role){
      errors.role="Role is required!";
    }else if(!values.role==="Admin" || !values.role==="Customer"){
      errors.role="Role should be either Admin or Customer!";
    }
    return errors;
  };

  return (
    <div className="container">
  

      <form onSubmit={handleSubmit}>
        <h1>Register Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>loginName:</label>
            <input
              type="text"
              name="loginName"
              data-testid="loginname"
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
              data-testid="email"
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
              data-testid="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <div className="field">
            <label>Role:</label>
            <input
              type="text"
              name="role"
              data-testid="role"
              placeholder="Role"
              value={formValues.role}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.role}</p>

          <button className="fluid ui button blue" onClick={fetchProducts}>Submit</button>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">{response}</div>
      ) : (
        <pre>{response}</pre>
      )}
         
        </div>
      </form>
      
    </div>
  )
}

export default UserRegister;