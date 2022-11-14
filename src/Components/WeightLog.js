import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
// import DietPlanView from "./DietPlanView";
import './WeightLogCSS.css'; 
function WeightLog() {
  const [weightLog, setWeightLog] = useState("");
  useEffect(() => {

    const v = () => {axios
      .get(`http://localhost:8082/weightLog/showAllWeightLog`)
      .then((dat) => {
        setWeightLog(dat.data);
        console.log(weightLog);
      })
      .catch((error) => console.log(error));}
      v()
  }, []);
  const history=useNavigate();
  const select=(id)=>{
    history(`/DietPlanAdmin`)
}

  return (
    <div>
      <h1>Weight Logs</h1>
        <div id="hey">
            <table>
              <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Weight</th>
                <th scope="col">created_At</th>
                <th scope="col">updated_At</th>
              </tr>
              </thead>
          {weightLog &&
          weightLog.map((weightlog) => (
        //   <div key={dietplan} className='tile'>
        //     <DietPlanView dietplan={dietplan} />
        //   </div>
        <tbody>
              <tr>
                <th>{weightlog.id}</th>
                <th>{weightlog.weight}</th>
                <th>{weightlog.created_At}</th>
                <th>{weightlog.updated_At}</th> 
              </tr>
              <button className='weight-button' onClick={ ()=>select(weightlog.id)}> Add</button>
        </tbody>
        ))}
       
            </table>
            <div className="card shadow-lg p-2 mb-2 bg-body rounded">
        <Link className="list-group-item " to="/DietPlan">Back to DietPlan</Link>
        </div>
        <div className="card shadow-lg p-2 mb-2 bg-body rounded">
        <Link className="list-group-item " to="/nutrition">Back to NutritionPlan</Link>
        </div>
        </div>
        
    </div>
  );
}

export default WeightLog;