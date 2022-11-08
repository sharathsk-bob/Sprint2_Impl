import React from 'react';
import { useState, useEffect } from "react";
import {useSelector,useDispatch} from "react-redux";
import axios from 'axios';

function Customer() {
    const initialValues={loginName:"",email:"",password:"",role:""};
    const [formValues, setFormValues] = useState(initialValues);
      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);
      const dispatch=useDispatch();
      const isRegistered=useSelector((state)=>state.register);
    
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
      //const dis1=()=>{dispatch(register())};
      const fetchProducts = async () =>{
        await axios.post('http://localhost:8020/capg/userinterface/users', JSON.stringify(formValues),{headers:{"Content-Type" : "application/json"}}).then((data)=>console.log(data.data)).catch((error)=>console.log(error));
      }
     
      // function handleClick() {
        
      //   fetch('http://localhost:8020/capg/userinterface/users', {  
    
      //     method: 'POST', 
      //     mode: 'no-cors', 
      //     body: JSON.stringify(formValues) 
    
      //   })
      //   //dis1();
      // }
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
            <h1>Customer</h1>
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
              <div className="field">
                <label>Role:</label>
                <input
                  type="text"
                  name="role"
                  placeholder="Role"
                  value={formValues.role}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.role}</p>
    
              <button className="fluid ui button blue" onClick={fetchProducts}>Submit</button>
              {/* <button onClick={()=>{dispatch(register())}}>test</button>
              {isRegistered? <p>Registered</p>:<p>please register</p>}  */}
            </div>
          </form>
          
        </div>
      )
    
}

export default Customer;