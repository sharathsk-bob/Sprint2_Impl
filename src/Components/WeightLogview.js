import React from "react";

function WeightLogView({weightLog}) {
  return (
    <div className="grid" >
        
      <div>{weightLog.weightLogId}</div>
      <div>{weightLog.ID}</div>
      <div>
        {weightLog.weight} 
      </div>
      <div>{weightLog.created_At}</div>
      <div>{weightLog.updated_At}</div>
      <div>{weightLog.email}</div>
    </div>
  );
}

export default WeightLogView;