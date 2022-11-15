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
 

  return (
    <div>
      <h1 className='weight-head' id ='weight-head-id'>WeightLog</h1>
        <div className='weight-scroll'>
        <div className='weight-container'>
        {weightLog &&(
          <React.Fragment>
            {weightLog.map((Weightlog)=>(
              <div key={Weightlog.id} className='weight-div' >
            <p className='Weightlog-p-name'><i>Weight:</i>{Weightlog.weight}</p>
            <p className='Weightlog-p'><i>Created_At:</i>{Weightlog.created_At}</p>
            <p className='Weightlog-p'><i>Updated_At:</i>{Weightlog.updated_At}</p>
            
            </div>
              
            ))}
            </React.Fragment >)}
         </div>
      </div>
            <div className="card shadow-lg p-2 mb-2 bg-body rounded">
        <Link className="list-group-item " to="/DietPlan">Back to DietPlan</Link>
        </div>
        <div className="card shadow-lg p-2 mb-2 bg-body rounded">
        <Link className="list-group-item " to="/nutrition">Back to NutritionPlan</Link>
        </div>
        </div>
        
    // </div>
  );
}

export default WeightLog;
