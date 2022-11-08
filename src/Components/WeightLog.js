import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import WeightLogView from "./WeightLogView";

function WeightLog() {
  const [weightLog, setWeightLog] = useState();
  useEffect(() => {

    const v = () => {axios
      .get(`http://localhost:8040/weightLog`)
      .then((data) => {
        setWeightLog(data.data);
        console.log(data.data);
      })
      .catch((error) => console.log(error));}
      v()
  }, []);


  return (
    <div>
      <h1>Weight Logs</h1>
        <div className="grid" id="WeightHead">
            <table>
              <tr>
                <th>ID</th>
                <th>Weight</th>
                <th>created_At</th>
                <th>updated_At</th>
                <th>userid</th>
              </tr>

            </table>
        </div>
      {weightLog &&
        weightLog.map((weightLog) => (
          <div key={weightLog.weightLogId} className='tile'>
            <WeightLogView weightLog={weightLog} />
          </div>
        ))}
    </div>
  );
}

export default WeightLog;