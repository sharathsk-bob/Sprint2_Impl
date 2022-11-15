import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
// import DietPlanView from "./DietPlanView";
import './DietPlanCSS.css';

function DietPlan() {
  const [dietPlan, setDietPlan] = useState("");

  useEffect(() => {

    const v = () => {axios
      .get(`http://localhost:8082/Diet/listdiets`)
      .then((dat) => {
        setDietPlan(dat.data);
        console.log(dietPlan.data);
      })
      .catch((error) => console.log(error));}
      v()
  }, []);
  const history=useNavigate();
  const select=(id)=>{
    history(`/PaymentCustomer`)
}

  return (
    <div>
     <h1 className='diet-head' id ='diet-head-id'>Diet Plans</h1>
        <div className='diet-scroll'>
        <div className='diet-container'>
        {dietPlan &&(
          <React.Fragment>
            {dietPlan.map((dietplan)=>(
              <div key={dietplan.id} className='diet-div' >
            <p className='dietplan-p-name'><i>Slots:</i>{dietplan.slots}</p>
            <p className='dietplan-p'><i>Food Type:</i>{dietplan.foodType}</p>
            <p className='dietplan-p'><i>Protein Ratio:</i>{dietplan.proteinRatio}</p>
            <p className='dietplan-p'><i>Fat Ratio:</i>{dietplan.fatRatio}</p>
            <p className='dietplan-p'>Carbs Ratio: {dietplan.carbsRatio}</p>
            <p className='dietplan-p'>Total: {dietplan.total}</p>
            <button className='dietplan-button' onClick={ ()=>select(dietplan.id)}> BUY</button>
            </div>
              
            ))}
            </React.Fragment >)}
         </div>
      </div>
            <div className="card shadow-lg p-2 mb-2 bg-body rounded">
        <Link className="list-group-item " to="/Admin_1">Back</Link>
        </div>
        </div>
    // </div>
  );
}

export default DietPlan;
