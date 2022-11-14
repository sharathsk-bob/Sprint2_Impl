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
      .get(`http://localhost:8082/Diets/listdiets`)
      .then((dat) => {
        setDietPlan(dat.data);
        console.log(dietPlan.data);
      })
      .catch((error) => console.log(error));}
      v()
  }, []);
  const history=useNavigate();
  const select=(id)=>{
    history(`/WeightLog`)
}

  return (
    <div>
      <h2>Diet Plans</h2>
        <div>
        <table id = "Hello">
              <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">CarbsRatio</th>
                <th scope="col">FoodType</th>
                <th scope="col">ProteinRatio</th>
                <th scope="col">FatRatio</th>
                <th scope="col">Slots</th>
                <th scope="col">Total</th>
                <th scope="col">Choose</th>
              </tr>
              </thead>
          {dietPlan &&
          dietPlan.map((dietplan) => (
        //   <div key={dietplan} className='tile'>
        //     <DietPlanView dietplan={dietplan} />
        //   </div>
        <tbody>
              <tr>
                <th>{dietplan.id}</th>
                <th>{dietplan.slots}</th>
                <th>{dietplan.foodType}</th>
                <th>{dietplan.proteinRatio}</th>
                <th>{dietplan.fatRatio}</th>
                <th>{dietplan.carbsRatio}</th>
                <th>{dietplan.total}</th>
                <th> <button className='diet-button' onClick={ ()=>select(dietplan.id)}> BUY</button></th>
              </tr>
        </tbody>
        
        ))}
       
            </table>
            <div className="card shadow-lg p-2 mb-2 bg-body rounded">
        <Link className="list-group-item " to="/Admin_1">Back</Link>
        </div>
        </div>
        
    </div>
  );
}

export default DietPlan;