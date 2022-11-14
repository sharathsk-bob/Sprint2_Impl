import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const AddNutritionPlan = ({setNutritionPlan}) => {
    //Managing State of fills Using Use State, Initial Empty
     const [NutritionDetails, setNutritionDetails] = useState({
        name:"",
        planDescription:"",
        created_At:"",
        updated_At:"",
        price:""
    }) 

    // Constants for Form Validation
    const [NameErr, setNameErr] = useState({});
    const [planDescriptionErr, setplanDescriptionErr] = useState({});
    const [created_AtErr, setcreated_AtErr] = useState({});
    const [updated_AtErr, setupdated_AtErr] = useState({});
    // const [carbsRatioNameErr, setcarbsRatioErr] = useState({});
    const [priceErr, setpriceErr] = useState({});


    //Handeling Input
    const handleInput = (e)=>{
        const name =e.target.name;
        const value = e.target.value;
        console.log(name, value);
        // First taking Initial State and then setting Card Details 
        setNutritionDetails({ ...NutritionDetails, [name]: value})
    }

    //Handeling Submit
    const handleSubmit = (e)=>{
        e.preventDefault();
        const isValid = formValidation();
        if(isValid){
            axios.post("http://localhost:8082/NutritionPlan/addnutri",NutritionDetails)
            .then(resp=>{
                console.log(resp.id)
                alert("Successfully Added");
            let newPlan = {...NutritionDetails, id:resp.id};
            setNutritionPlan(prev=>[...prev, newPlan]);
            setNutritionDetails({ 
                name:"",
                planDescription:"",
                created_At:"",
                updated_At:"",
                carbsRatio:"",
                price:""})
            })
            .catch(err=>console.log(err));
        }
        //setFormErrors(validate(cardDetails));
        //setIsSubmit(true);
    }

    //Form Validation
    const formValidation = (values) =>{
        const NameErr ={};
        const planDescriptionErr ={};
        const created_AtErr ={};
        const updated_AtErr={};
        // const carbsRatioErr={};
        const priceErr={};
        let isValid = true;

        if(NutritionDetails.name===''){
            NameErr.name = "*Proper Name is required*";
            isValid = false;
        }
        if(NutritionDetails.planDescription===''){
            planDescriptionErr.planDescription = "*Plan Description is required*";
            isValid = false;
        }
        if(NutritionDetails.created_At===''){
            created_AtErr.created_At = "*Protein Ratio is required*";
            isValid = false;
        }
        if(NutritionDetails.updated_At===''){
            updated_AtErr.updated_At = "*Fat Ratio is required*";
            isValid = false;
        }
        // if(NutritionDetails.carbsRatio===''){
        //     carbsRatioErr.carbsRatio = "*Carbs Ratio is required";
        //     isValid = false;
        // }
        if(NutritionDetails.price===''){
            priceErr.price = "*Valid Price is required*";
            isValid = false;
        }
        setNameErr(NameErr);
        setplanDescriptionErr(planDescriptionErr);
        setcreated_AtErr(created_AtErr);
        setupdated_AtErr(updated_AtErr);
        //setcarbsRatioErr(carbsRatioErr);
        setpriceErr(priceErr);

        return isValid;
        
    }


  return (
    <div>
    {/* Heading for Add Card */}
    <div class="card">
    <div class="card-body">
    <h2 class="card-header">Add Nutrition Plans</h2>

    {/* Form to Add Plan */}
    <div className="card align-middle shadow-lg p-3 mb-5 bg-body rounded">
        <div className="align-self-center shadow-lg p-3 mb-5 bg-body rounded">
   
    {/* Form to Add Plan */}
    <form action="" onSubmit={handleSubmit} className="Diet">

        {/* name Input */}
        <div class="mb-3">
            <label htmlFor='Slotname' className="form-label" style={{fontWeight:"600"}}>Name</label>
            <br />
            <input type= 'text' autoComplete='off' 
            value={NutritionDetails.name}
            placeholder="Enter name"
            onChange={handleInput}
            name='name' id='name' className="form-control"/>
        </div>
        {Object.keys(NameErr).map((key)=>{
            return <div style={{color:"red", fontSize:"13px"}}>{NameErr[key]}</div>
        })}

        {/* planDescription Input */}
        <div class="mb-3">
            <label htmlFor='food' className="form-label" style={{fontWeight:"600"}}>Plan Description</label>
            <br />
            <input type= 'text' autoComplete='off'
            value={NutritionDetails.planDescription}
            placeholder="Enter Plan Description"
            onChange={handleInput}
            name='planDescription' id='food' className="form-control"/>
        </div>
        {Object.keys(planDescriptionErr).map((key)=>{
            return <div style={{color:"red", fontSize:"13px"}}>{planDescriptionErr[key]}</div>
        })}


        {/* Protein Ratio Input */}
        <div class="mb-3">
            <label htmlFor='created_At' className="form-label" style={{fontWeight:"600"}}>Created At</label>
            <br />
            <input type= 'date' autoComplete='off' 
            value={NutritionDetails.created_At}
            placeholder="Enter Creation Date"
            onChange={handleInput}
            name='created_At' id='created_At' className="form-control"/>
        </div>
        {Object.keys(created_AtErr).map((key)=>{
            return <div style={{color:"red", fontSize:"13px"}}>{created_AtErr[key]}</div>
        })}
        {/* Fat Ratio Input */}
        <div class="mb-3">
            <label htmlFor='updated_At' className="form-label" style={{fontWeight:"600"}}>Updated At</label>
            <br />
            <input type= 'date' autoComplete='off' 
            value={NutritionDetails.updated_At}
            placeholder="Enter Updation Date"
            onChange={handleInput}
            name='updated_At' id='updated_At' className="form-control"/>
        </div>
        {Object.keys(updated_AtErr).map((key)=>{
            return <div style={{color:"red", fontSize:"13px"}}>{updated_AtErr[key]}</div>
        })}
        {/* Carbs Ratio Input
         <div class="mb-3">
            <label htmlFor='carbsRatio' className="form-label" style={{fontWeight:"600"}}>Carbs Ratio</label>
            <br />
            <input type= 'text' 
            value={NutritionDetails.carbsRatio}
            placeholder="Enter carbs Ratio"
            onChange={handleInput}
            name='carbsRatio' id='carbsRatio' className="form-control"/>
        </div>
        {Object.keys(carbsRatioNameErr).map((key)=>{
            return <div style={{color:"red", fontSize:"13px"}}>{carbsRatioNameErr[key]}</div>
        })} */}
         {/* price*/}
         <div class="mb-3">
            <label htmlFor='price' className="form-label" style={{fontWeight:"600"}}>price</label>
            <br />
            <input type= 'number' autoComplete='off' 
            value={NutritionDetails.price}
            placeholder="Enter Price"
            onChange={handleInput}
            name='price' id='price' className="form-control"/>
        </div>
        {Object.keys(priceErr).map((key)=>{
            return <div style={{color:"red", fontSize:"13px"}}>{priceErr[key]}</div>
        })}


        {/* Submit Button */}
        <button type='submit' class="btn btn-primary" style={{fontSize:"17px",marginTop:"10px"}}>Add Nutrition Plan</button>
        
    </form>
    </div>
    </div>
    </div>
    </div>
    <div className="card shadow-lg p-2 mb-1 bg-body rounded">
        <Link className="list-group-item " to="/ChangeOptionNutri">Back</Link>
        </div>
    </div>

  )
}

export default AddNutritionPlan;