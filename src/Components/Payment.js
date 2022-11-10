import React from 'react';
import axios from 'axios';
import {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Payment from './Payment';
import PaymentGetAPI from './PaymentGetAPI';
import './Payment.css';
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
        setWeatherData(data.data[18].paymentList[0]);
        setWeatherData2(data.data[21].paymentList[0]);
        setWeatherData3(data.data[22].paymentList[0]);
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

    const PayDis=()=>{
      history("/PaymentGetAPI")
  }
  return (
    
    <div >
        <h3>Payment</h3>
        <form className='container-payment'>
        {weatherData &&(
          <React.Fragment>
            <div >
            <p>Price:{weatherData.payment}</p>
            <p>CreatedAt:{weatherData.created_At}</p>
            <p>UpdatedAt:{weatherData.updated_At}</p>
            <p>Discount:{weatherData.discount}</p>
            <button >PAY</button>
             </div>
            </React.Fragment>
            )
    }  
     </form>
     <button  onClick={PayDis}>Show All Payments</button>
    </div>
  

  )
}

export default NutritionModule;