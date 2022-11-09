import React from 'react';
import axios from 'axios';
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Payment from '../../../../Sprint2/Sprint2_Impl/src/Components/Payment';
import './nutrition.css';
function NutritionModule() {
    //const [input,setInput]=useState("");
  const [weatherData,setWeatherData]=useState("");
  const [weatherData2,setWeatherData2]=useState("");
  const [weatherData3,setWeatherData3]=useState("");

  const history=useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:8020/capg/userinterface/users',{headers:{"Content-Type" : "application/json"}})
    .then((data)=>{
      for(let i=0;i<data.data.length;i++){
        setWeatherData(data.data[18].nutritionPlan);
        setWeatherData2(data.data[21].nutritionPlan);
        setWeatherData3(data.data[22].nutritionPlan);
      }
    }).catch((error)=>setWeatherData({ errorMessage: error.error}));
  },[]);
  
  const handleSearch=()=>{
    var errorMessage;
         axios.get('http://localhost:8020/capg/userinterface/users',{headers:{"Content-Type" : "application/json"}})
        .then((data)=>{
            setWeatherData(data.data[21].nutritionPlan
            );
        }).catch((error)=>setWeatherData({ errorMessage: error.error}));

  };
    const getAdmin=()=>{
        var errorMessage;
        axios.get('http://localhost:8020/capg/userinterface/users',{headers:{"Content-Type" : "application/json"}})
        .then((data)=>
            console.log(data.data[21])).catch((error)=>setWeatherData({ errorMessage: error.error}));
    }
    const Pay=()=>{
        history("/payment")
    }
  return (
    
    <div >
        <h3>Nutrition Modules</h3>
        <form className='container'>
        {weatherData &&(
          <React.Fragment>
            <div >
            <p>{weatherData.planDiscription}</p>
            <p>{weatherData.created_At}</p>
            <p>{weatherData.updated_At}</p>
            <p>{weatherData.price}</p>
            <button onClick={Pay}>BUY</button>
            {/* <p>{weatherData.current.feelslike_c}&deg;C</p>
            <img src={weatherData.current.condition.icon} alt="weather"/>
            <p>{weatherData.current.condition.text}</p>  */}
            </div>
            </React.Fragment >)}
            {weatherData &&(
            <React.Fragment>
            <div >
            <p>{weatherData2.planDiscription}</p>
            <p>{weatherData2.created_At}</p>
            <p>{weatherData2.updated_At}</p>
            <p>{weatherData2.price}</p>
            <button onClick={getAdmin}>BUY</button>
            {/* <p>{weatherData.current.feelslike_c}&deg;C</p>
            <img src={weatherData.current.condition.icon} alt="weather"/>
            <p>{weatherData.current.condition.text}</p>  */}
            </div>
            </React.Fragment>)
            }
             {weatherData &&(
            <React.Fragment>
            <div >
            <p>{weatherData3.planDiscription}</p>
            <p>{weatherData3.created_At}</p>
            <p>{weatherData3.updated_At}</p>
            <p>{weatherData3.price}</p>
            <button onClick={getAdmin}>BUY</button>
            {/* <p>{weatherData.current.feelslike_c}&deg;C</p>
            <img src={weatherData.current.condition.icon} alt="weather"/>
            <p>{weatherData.current.condition.text}</p>  */}
            </div>
            </React.Fragment>)
    }  
     </form>
    </div>
    

  )
}

export default NutritionModule;