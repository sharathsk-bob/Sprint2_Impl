import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios';
//import {useSelector,useDispatch} from "react-redux";
function Admin() {
const [formValues, setFormValues] = useState('');
const [inputData,setInputData]=useState('');
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setInputData({...inputData,[name]:value});
  };
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

const getAdmin=async()=>{
    await axios.get(formValues.url,{headers:{"Content-Type" : "application/json"}}).then((data)=>{
    console.log(data.data);
    }).catch((error)=>console.log(error));
}
const postAdmin=async()=>{
    await axios.post(formValues.url,inputData.inputData,{headers:{"Content-Type" : "application/json"}}).then((data)=>{
    console.log(data.data);
    }).catch((error)=>console.log(error));
}
const putAdmin=async()=>{
    console.log(formValues);
    await axios.put(formValues.url,inputData.inputData,{headers:{"Content-Type" : "application/json"}}).then((data)=>{
    console.log(data.data);
    }).catch((error)=>console.log(error));
}
const deleteAdmin=async()=>{
    console.log(formValues);
    await axios.delete(formValues.url,{headers:{"Content-Type" : "application/json"}}).then((data)=>{
    console.log(data.data);
    }).catch((error)=>console.log(error));
}
const validate = (values) =>{
    const errors={};
    if(!values.url){
        errors.url = "Url is required!";
    }
    return errors;
}
  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
        <h1>Admin</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>url:</label>
            <input
              type="text"
              name="url"
              placeholder="url"
              value={formValues.url}
              onChange={handleChange}
            />
          </div>
            <p>{formErrors.url}</p>
            <div className="field">
            <label>inputData:</label>
            <input
              type="text"
              name="inputData"
              placeholder="inputData"
              value={inputData.inputData}
              onChange={handleChange}
            />
          </div>
            <p>{formErrors.url}</p>
          <button onClick={getAdmin}>get</button>
          <button onClick={postAdmin}>post</button>
          <button onClick={putAdmin}>put</button>
          <button onClick={deleteAdmin}>delete</button>
          </div>
        </form>
        
    </div>
  )
}

export default Admin;