import React from 'react';
import axios from 'axios';
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Payment from './Payment';
import './nutrition.css';
function NutritionModule() {
    //const [input,setInput]=useState("");
  const [weatherData,setWeatherData]=useState([]);
  const history=useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:8020/nutritionplan/',{headers:{"Content-Type" : "application/json"}})
    .then((data)=>{
        setWeatherData(data.data);  
    }).catch((error)=>setWeatherData({ errorMessage: error.error}));
  },[]);
  
    const Pay=()=>{
        history("/payment")
    }
  return (
    <div >
        <h1 className='nutri-head'>Nutrition Modules</h1>
        <form className='container'>
        {weatherData &&(
          <React.Fragment>
            {weatherData.map((weather)=>(
              <div key={weather.id} className='nutri-div' >
            <p className='nutri-p'>{weather.name}</p>
            <p className='nutri-p'>{weather.planDiscription}</p>
            <p className='nutri-p'>{weather.created_At}</p>
            <p className='nutri-p'>{weather.updated_At}</p>
            <p className='nutri-p'>{weather.price}</p>
            <button className='nutri-button' onClick={Pay}>BUY</button>
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