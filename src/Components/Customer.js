import React from 'react'
import axios from 'axios';
import './Customer.css';
import { useState, useEffect } from "react";
import {useSelector,useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

function Customer() {
  const history=useNavigate();
  const initialValues={id:"",name:"",dob:"",gender:"",email:"",weight:"",height:"",workoutTime:"",sleepTime:"",medicalCondition:"",allergicTo:""};
const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  var isLogged=false;
  const dispatch=useDispatch();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  //const dis1=()=>{dispatch(register())};
  const fetchUsers = async() =>{
    await axios.get('http://localhost:8082/capg/userinterface/users', 
    JSON.stringify(formValues),{headers:{"Content-Type" : "application/json"}})
    .then((data)=>{
      for(let i=0;i<data.data.length;i++){

        if(data.data[i].email===formValues.email){
          let id=data.data[i].id;
          setFormValues({...formValues,[id]:id});
          axios.put(`http://localhost:8082/capg/userinterface/users/${id}`, 
          JSON.stringify(formValues),{headers:{"Content-Type" : "application/json"}})
        }
      }
    }
    ).catch((error)=>console.log(error));
  }
  //console.log(fetchUsers);
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
    if (!values.name) {
      errors.name = "name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    return errors;
  };
  return (
     <div className='NewApp'>
      <h1>Welcome</h1>
      <h1>Please Fill the Form</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.name}</p>
          <div className="field">
            <label>Dob:</label>
            <input
              type="text"
              name="dob"
              placeholder="dob"
              value={formValues.dob}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.dob}</p>
          <div className="field">
            <label>Gender:</label>
            <input
              type="text"
              name="gender"
              placeholder="gender"
              value={formValues.gender}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.gender}</p>
          <div className="field">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Weight:</label>
            <input
              type="number"
              name="weight"
              placeholder="weight"
              value={formValues.weight}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.weight}</p>
          <div className="field">
            <label>Height:</label>
            <input
              type="number"
              name="height"
              placeholder="height"
              value={formValues.height}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.height}</p>
          <div className="field">
            <label>WorkOutTime:</label>
            <input
              type="number"
              name="workOutTime"
              placeholder="workOutTime"
              value={formValues.workOutTime}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.workOutTime}</p>
          <div className="field">
            <label>SleepTime:</label>
            <input
              type="number"
              name="sleepTime"
              placeholder="sleepTime"
              value={formValues.sleepTime}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.sleepTime}</p>
          
          <div className="field">
            <label>MedicalCondition:</label>
            <input
              type="text"
              name="medicalCondition"
              placeholder="medicalCondition"
              value={formValues.medicalCondition}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.medicalCondition}</p>
          <div className="field">
            <label>AllergicTo:</label>
            <input
              type="text"
              name="allergicTo"
              placeholder="allergicTo"
              value={formValues.allergicTo}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.allergicTo}</p>
          
          <button className="fluid ui button blue" onClick={fetchUsers}>Submit</button>
          
        </div>
      </form>
     </div>
  )
}

export default Customer