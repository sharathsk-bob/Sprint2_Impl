import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// import DietPlanView from "./DietPlanView";

function WeightLog() {
  const [weightLog, setWeightLog] = useState("");
  useEffect(() => {

    const v = () => {axios
      .get(`http://localhost:8020/weightLog/showWeightLog`)
      .then((dat) => {
        setWeightLog(dat.data);
        console.log(weightLog);
      })
      .catch((error) => console.log(error));}
      v()
  }, []);

  return (
    <div>
      <h1>Weight Logs</h1>
        <div className="grid" id="WeightHead">
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
                <th>{weightlog.created_At}</th>
                <th>{weightlog.updated_At}</th>
                <th>{weightlog.weight}</th>
              </tr>
        </tbody>
        ))}
       
            </table>
        </div>
        
    </div>
  );
}

export default WeightLog;