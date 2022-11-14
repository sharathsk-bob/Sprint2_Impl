import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";

const NutritionPlanDelete = () => {
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
      `http://localhost:8082/NutritionPlan/delnutri/${input}`
    );
    console.log("Removed");
    alert("Successfully Deleted");
    setIsSubmit(true);
  };

  return (
    <div>
      {/* <h1>Nutrition Plan Delete</h1> */}

      {/* <BookmarkFreelancerAdd/> */}
      {/* <BookmarkedFreelancerFindById/> */}
      <div className="card shadow-lg p-3 mb-5 bg-body rounded">
        <div className="align-self-center shadow-lg p-3 mb-5 bg-body rounded">
          <span className="align-middle">
            <br />
            <div className="card-header">
              <h2>Remove Nutrition Plan</h2>
            </div>
            <form className="was-validated " onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                {/* <label htmlFor="exampleInputEmail1" className="form-label">
                  Nutrition plan
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
                  Please Enter Valid ID
                </div>
              </div>
              <button type="submit" className="btn btn-outline-primary" >
                Remove
              </button>
              <a href="/bookmarked_freelancer">
                <button type="submit" className="btn btn-outline-danger mx-2" >
                  Cancel
                </button>
              </a>
              <div className="card shadow-lg p-2 mb-1 bg-body rounded">
              <Link className="list-group-item " to="/ChangeOptionNutri">Back</Link>
              </div>
            </form>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NutritionPlanDelete;
