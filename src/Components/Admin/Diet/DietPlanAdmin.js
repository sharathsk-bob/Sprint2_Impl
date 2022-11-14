import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const AddDietPlan = ({setDietPlan}) => {
    //Managing State of fills Using Use State, Initial Empty
    const [PlanDetails, setPlanDetails] = useState({
        slots:"",
        foodType:"",
        proteinRatio:"",
        fatRatio:"",
        carbsRatio:"",
        total:""
    }) 
    // Constants for Form Validation
    const [slotNameErr, setSlotNameErr] = useState({});
    const [foodTypeNameErr, setFoodTypeNameErr] = useState({});
    const [proteinRatioNameErr, setProteinRatioNameErr] = useState({});
    const [fatRatioNameErr, setFatRatioNameErr] = useState({});
    const [carbsRatioNameErr, setcarbsRatioNameErr] = useState({});
    const [TotalNameErr, setTotalNameErr] = useState({});

    //Handeling Input
    const handleInput = (e)=>{
        const name =e.target.name;
        const value = e.target.value;
        console.log(name, value);
        // First taking Initial State and then setting Card Details 
        setPlanDetails({ ...PlanDetails, [name]: value})
    }

    //Handeling Submit
    const handleSubmit = (e)=>{
        e.preventDefault();
        const isValid = formValidation();
        if(isValid){
            axios.post("http://localhost:8082/capg/userinterface/diets",PlanDetails)
            .then(resp=>{
                console.log(resp.id)
                alert("Successfully Added");
            let newPlan = {...PlanDetails, id:resp.id};
            setDietPlan(prev=>[...prev, newPlan]);
            setPlanDetails({ 
                slots:"",
                foodType:"",
                proteinRatio:"",
                fatRatio:"",
                carbsRatio:"",
                Total:""})
            })
            .catch(err=>console.log(err));
        }
        //setFormErrors(validate(cardDetails));
        //setIsSubmit(true);
    }
    //Form Validation
    const formValidation = (values) =>{
        const slotNameErr ={};
        const foodTypeNameErr ={};
        const proteinRatioNameErr ={};
        const fatRatioNameErr={};
        const carbsRatioNameErr={};
        const TotalNameErr={};
        let isValid = true;

        if(PlanDetails.slots===''){
            slotNameErr.slots = "*Slots are required";
            isValid = false;
        }
        if(PlanDetails.foodType===''){
            foodTypeNameErr.foodType = "*Food Type is required";
            isValid = false;
        }
        if(PlanDetails.proteinRatio===''){
            proteinRatioNameErr.proteinRatio = "*Protein Ratio is required";
            isValid = false;
        }
        if(PlanDetails.fatRatio===''){
            fatRatioNameErr.fatRatio = "*Fat Ratio is required";
            isValid = false;
        }
        if(PlanDetails.carbsRatio===''){
            carbsRatioNameErr.carbsRatio = "*Carbs Ratio is required";
            isValid = false;
        }
        if(PlanDetails.total===''){
            TotalNameErr.carbsRatio = "*Total is required";
            isValid = false;
        }
        setSlotNameErr(slotNameErr);
        setFoodTypeNameErr(foodTypeNameErr);
        setProteinRatioNameErr(proteinRatioNameErr);
        setFatRatioNameErr(fatRatioNameErr);
        setcarbsRatioNameErr(carbsRatioNameErr);
        setTotalNameErr(TotalNameErr);

        return isValid;
        
    }

  return (
    <div>
    {/* Heading for Add Card */}
    <div className="card" style={{width: "380px"}}>
    <div className="card-body">
    <h2 className="card-header">Add Diet Plans</h2>

    {/* Form to Add Plan */}
    {/* <div className="card align-middle shadow-lg p-3 mb-5 bg-body rounded"> */}
        {/* <div className="align-self-center shadow-lg p-3 mb-5 bg-body rounded"> */}
   
    <form action="" onSubmit={handleSubmit} className="Diet">

        {/* Slots Input */}
       
        <div class="mb-3">
            <label htmlFor='Slotname' className="form-label" >Slots</label>
            <br />
            <input type= 'text' autoComplete='off' 
            value={PlanDetails.slots}
            placeholder="Enter Slots"
            onChange={handleInput}
            name='slots' id='slots' className="form-control"/>
        </div>
        {Object.keys(slotNameErr).map((key)=>{
            return <div>{slotNameErr[key]}</div>
        })}

        {/* FoodType Input */}
        <div class="mb-3">
            <label htmlFor='food' className="form-label">Food Type</label>
            <br />
            <input type= 'text' autoComplete='off'
            value={PlanDetails.foodType}
            placeholder="Enter Food Type"
            onChange={handleInput}
            name='foodType' id='food' className="form-control"/>
        </div>
        {Object.keys(foodTypeNameErr).map((key)=>{
            return <div>{foodTypeNameErr[key]}</div>
        })}

        {/* Protein Ratio Input */}
        <div class="mb-3">
            <label htmlFor='proteinrationame' className="form-label">Protein Ratio</label>
            <br />
            <input type= 'text' autoComplete='off' 
            value={PlanDetails.proteinRatio}
            placeholder="Enter Protein Ratio"
            onChange={handleInput}
            name='proteinRatio' id='proteinratio' className="form-control"/>
        </div>
        {Object.keys(proteinRatioNameErr).map((key)=>{
            return <div>{proteinRatioNameErr[key]}</div>
        })}
        {/* Fat Ratio Input */}
        <div class="mb-3">
            <label htmlFor='FatRationame' className="form-label">Fat Ratio</label>
            <br />
            <input type= 'text' autoComplete='off' 
            value={PlanDetails.fatRatio}
            placeholder="Enter Fat Ratio"
            onChange={handleInput}
            name='fatRatio' id='fatratio' className="form-control"/>
        </div>
        {Object.keys(fatRatioNameErr).map((key)=>{
            return <div>{fatRatioNameErr[key]}</div>
        })}
        {/* Carbs Ratio Input*/}
         <div class="mb-3">
            <label htmlFor='carbsRatio' className="form-label">Carbs Ratio</label>
            <br />
            <input type= 'text' 
            value={PlanDetails.carbsRatio}
            placeholder="Enter carbs Ratio"
            onChange={handleInput}
            name='carbsRatio' id='carbsRatio' className="form-control"/>
        </div>
        {Object.keys(carbsRatioNameErr).map((key)=>{
            return <div>{carbsRatioNameErr[key]}</div>
        })}
         {/* Total*/}
         <div class="mb-3">
            <label htmlFor='Total' className="form-label">Total</label>
            <br />
            <input type= 'text' autoComplete='off' 
            value={PlanDetails.total}
            placeholder="Enter total Amount"
            onChange={handleInput}
            name='total' id='total' className="form-control"/>
        </div>
        {Object.keys(TotalNameErr).map((key)=>{
            return <div>{TotalNameErr[key]}</div>
        })}

        {/* Submit Button */}
        <button type='submit' class="btn btn-primary">Add DietPlan</button>
    </form>
    </div>
    {/* </div> */}
    {/* </div> */}
    </div>
    <div className="card shadow-lg p-2 mb-1 bg-body rounded">
        <Link className="list-group-item " to="/ChangeOptionDiet">Back</Link>
        </div>
    </div>
  )
}

export default AddDietPlan;
