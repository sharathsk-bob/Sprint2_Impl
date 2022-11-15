import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";

const DietPlanDelete = () => {
  const [input, setInput] = useState("");

  // const [output, setOutput]

  const { id } = input;

  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const[isSubmit, setIsSubmit]=
  useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.delete(
      `http://localhost:8082/Diet/deldiet${input}`
    );
    console.log("Removed");
    alert("Successfully Deleted");
    setIsSubmit(true);
  };

  return (
    <div>
     
      {/* <BookmarkFreelancerAdd/> */}
      {/* <BookmarkedFreelancerFindById/> */}
      <div class="card">
    <div class="card-body">
    <h2 class="card-header">Remove Diet Plan</h2>

    {/* Form to Add Plan */}
    {/* <div className="card align-middle shadow-lg p-3 mb-5 bg-body rounded">
        <div className="align-self-center shadow-lg p-3 mb-5 bg-body rounded"> */}
            <form className="was-validated " onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                {/* <label htmlFor="exampleInputEmail1" className="form-label">
                  Diet plan
                </label> */}
                <input
                  type="number"
                  className="form-control"
                  id="validationTextarea"
                  aria-describedby="emailHelp"
                  name="input"
                  value={input}
                  // defaultValue={freelancerId}
                  onChange={(e) => onInputChange(e)}
                  required
                />
                <div className="invalid-feedback">
                  Please Enter Diet Plan ID
                </div>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Remove
              </button>
              <div className="card shadow-lg p-2 mb-1 bg-body rounded">
        <Link className="list-group-item " to="/ChangeOptionDiet">Back</Link>
        </div>
            </form>
            
          
        {/* </div>
        
      </div> */}
      </div>
    </div>
    </div>
    
  );
};

export default DietPlanDelete;
