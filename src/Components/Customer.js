import React from 'react'

import './Customer.css';

import { Link } from 'react-router-dom'
function Customer() {
  
  return (
    <div className="container overflow-hidden text-center">
    <div className="card align-middle shadow-lg p-3 mt-5 mb-5 bg-body rounded">
        <div className="card align-self-center shadow-lg p-3 mb-3 bg-body rounded">
        <div className="card-header">
        <h1>Choose one!!!</h1>
        </div>
      <br/>
      <div id="list-example" className="list-group">
      {/* <div className="card-title"> */}
      <div className="card shadow-lg p-2 mb-1 bg-body rounded">
        <Link className="list-group-item " to="/nutrition">Nutrition Plans</Link>
        </div>
      {/* </div> */}
      {/* <div className="card-title"> */}
      <div className="card shadow-lg p-2 mb-2 bg-body rounded">
        <Link className="list-group-item " to="/DietPlan">Diet Plans</Link>
        </div>
        <div className="card shadow-lg p-2 mb-2 bg-body rounded">
        <Link className="list-group-item " to="/WeightLog">Weight Log Plans</Link>
        </div>
        <div className="card shadow-lg p-2 mb-2 bg-body rounded">
        <Link className="list-group-item " to="/logout">logout</Link>
        </div>
      {/* </div> */}
    </div>
    </div>
    </div>
    </div>
  )
}

export default Customer