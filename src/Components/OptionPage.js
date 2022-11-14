import React from 'react'
import { Link } from 'react-router-dom'

const OptionPage = () => {
  return (
    <div className="card" style={{width: "400px", height: "310px"}}>
     {/* <div className="card align-middle shadow-lg p-3 mt-5 mb-5 bg-body rounded"> */}
        {/* <div className="card align-self-center shadow-lg p-3 mb-3 bg-body rounded"> */}
        <div className="card-header"> 
        <h2 style={{fontWeight:"600", color:"black"}} >Choose one!!!</h2>
        </div> 
      <br/>
      <div id="list-example" className="list-group">
      {/* <div className="card-title"> */}
      <div className="card shadow-lg p-2 mb-1 bg-body rounded">
        <Link className="list-group-item " to="/ChangeOptionNutri">Update Nutrition Plans</Link>
        </div>
      {/* </div> */}
      {/* <div className="card-title"> */}
      <div className="card shadow-lg p-2 mb-2 bg-body rounded">
        <Link className="list-group-item " to="/ChangeOptionDiet">Update Diet Plans</Link>
        </div>
        <button type='submit' class="btn btn-primary" style={{fontSize:"17px",marginTop:"10px", width:"200px", height: "50px", marginLeft: "100px"}}>Back To Home Page</button>
      {/* </div> */}
    </div>
    </div>
    // </div>
    // </div>
  )
}

export default OptionPage

