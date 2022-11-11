import React from 'react';
import axios from 'axios';
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Payment from './Payment';
import './nutrition.css';
function NutritionModule() {
    //const [input,setInput]=useState("");
  const [nutridata,setNutridata]=useState([]);
  const history=useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:8040/nutritionplan/',{headers:{"Content-Type" : "application/json"}})
    .then((data)=>{
        setNutridata(data.data);  
    }).catch((error)=>setNutridata({ errorMessage: error.error}));
  },[]);
  
    const pay=(id)=>{
        history(`/payment/${id}`)
    }
  return (
    <div >
        <h1 className='nutri-head' id ='nutri-head-id'>Nutrition Modules</h1>
        <form className='container'>
        {nutridata &&(
          <React.Fragment>
            {nutridata.map((nutri)=>(
              <div key={nutri.id} className='nutri-div' >
            <p className='nutri-p'>{nutri.name}</p>
            <p className='nutri-p'>{nutri.planDiscription}</p>
            <p className='nutri-p'>{nutri.created_At}</p>
            <p className='nutri-p'>{nutri.updated_At}</p>
            <p className='nutri-p'>{nutri.price}</p>
            <button className='nutri-button' onClick={ ()=>pay(nutri.id)}> BUY</button>
            </div>
              
            ))}
            </React.Fragment >)}
     </form>
     {/* <button onClick={getAdmin}>BUY</button> */}
     {/* <button onClick={Pay}>BUY</button> */}
    </div>
  )
}
export default NutritionModule;