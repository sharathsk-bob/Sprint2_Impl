import React from 'react';
import axios from 'axios';
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import PaymentModule from "../Components/Payment/Payment";
import { Link } from 'react-router-dom'
import './nutrition.css';
function NutritionModule() {
    //const [input,setInput]=useState("");
  const [nutridata,setNutridata]=useState([]);
  const history=useNavigate();
  useEffect(()=>{

    axios.get('http://localhost:8082/NutritionPlan/getnutri',{headers:{"Content-Type" : "application/json"}})

   
    .then((data)=>{
      console.log(data.data);
        setNutridata(data.data);  
    }).catch((error)=>setNutridata({ errorMessage: error.error}));
  },[]);
  
    const pay=(id)=>{
        history(`/PaymentCustomer`)
    }
  return (
    <div >
        <h1 className='nutri-head' id ='nutri-head-id'>Nutrition Modules</h1>
        <div className='nutri-scroll'>
        <div className='nutri-container'>
        {nutridata &&(
          <React.Fragment>
            {nutridata.map((nutri)=>(
              <div key={nutri.id} className='nutri-div' >
            <p className='nutri-p-name'>{nutri.name}</p>
            <p className='nutri-p'>{nutri.planDescription}</p>
            <p className='nutri-p'><i>Created At :</i>{nutri.created_At}</p>
            <p className='nutri-p'><i>Updated At :</i>{nutri.updated_At}</p>
            <p className='nutri-p'>Price = {nutri.price}</p>
            <button className='nutri-button' onClick={ ()=>pay(nutri.id)}> BUY</button>
            </div>
              
            ))}
            </React.Fragment >)}
         </div>
        </div>
        <div className="card shadow-lg p-2 mb-2 bg-body rounded">
        <Link className="list-group-item " to="/Admin_1">Back</Link>
      </div>
     {/* <button onClick={getAdmin}>BUY</button> */}
     {/* <button onClick={Pay}>BUY</button> */}
    </div>
  )
}
export default NutritionModule;

