import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// import DietPlanView from "./DietPlanView";

function DietPlan() {
  const [dietPlan, setDietPlan] = useState("");
  useEffect(() => {

    const v = () => {axios
      .get(`http://localhost:8020/dietPlan/showPlans`)
      .then((dat) => {
        setDietPlan(dat.data);
        console.log(dietPlan);
      })
      .catch((error) => console.log(error));}
      v()
  }, []);

  return (
    <div>
      <h1>Diet Plans</h1>
        <div className="grid" id="DietHead">
            <table>
              <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Slots</th>
                <th scope="col">FoodType</th>
                <th scope="col">ProteinRatio</th>
                <th scope="col">FatRatio</th>
                <th scope="col">CarbsRatio</th>
                <th scope="col">Total</th>
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
              </tr>
        </tbody>
        ))}
       
            </table>
        </div>
        
    </div>
  );
}

export default DietPlan;