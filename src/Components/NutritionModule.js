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
  
  

 
    const getAdmin=()=>{
        var errorMessage;
        axios.get('http://localhost:8020/nutritionplan/',{headers:{"Content-Type" : "application/json"}})
        .then((data)=>
            console.log(data.data)).catch((error)=>setWeatherData({ errorMessage: error.error}));
    }
    const Pay=()=>{
        history("/payment")
    }
  return (
    
    <div >
        <h3>Nutrition Modules</h3>
        <form className='container'>
        {weatherData[0] &&(
          <React.Fragment>
            <div >
            <p>{weatherData[0].planDiscription}</p>
            <p>{weatherData[0].created_At}</p>
            <p>{weatherData[0].updated_At}</p>
            <p>{weatherData[0].price}</p>
            <button onClick={Pay}>BUY</button>
         
            </div>
            <div >
            <p>{weatherData[1].planDiscription}</p>
            <p>{weatherData[1].created_At}</p>
            <p>{weatherData[1].updated_At}</p>
            <p>{weatherData[1].price}</p>
            <button onClick={Pay}>BUY</button>
           
            </div>
            <div >
            <p>{weatherData[2].planDiscription}</p>
            <p>{weatherData[2].created_At}</p>
            <p>{weatherData[2].updated_At}</p>
            <p>{weatherData[2].price}</p>
            <button onClick={Pay}>BUY</button>
           
            </div>
            </React.Fragment >)}
            
     
     </form>
     {/* <button onClick={getAdmin}>BUY</button> */}
     <button onClick={Pay}>BUY</button>
    </div>
    

  )
}

export default NutritionModule;