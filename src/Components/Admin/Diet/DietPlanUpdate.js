import axios from "axios";
import { useFormik } from "formik";
import { Link } from 'react-router-dom'
const DietPlanUpdate=()=>{
//  const navigation = useNavigate();

const formik = useFormik({

  initialValues:{
    id:0,
    slots:'',
    foodType:'',
    proteinRatio:'',
    fatRatio:'',
    carbsRatio:'',
    total:""
 },

  onSubmit: (values) => {
    console.log(values);
    axios.put(`http://localhost:8082/capg/userinterface/diets/${formik.initialValues.id}`, values)
    .then(resp=>{
        console.log("Updated");
        console.log(resp.data);
        alert("Successfully Updated");
        // navigation('/mySkills');
    }).catch(err=>{
        // console.error(err.response.data);
        console.log(err);
   })
  },
  validate:(values)=>{
    let errors={};
    if(!values.id){
      errors.id="Enter id"
    }
    if(!values.slots){
      errors.slots="Enter the Slots"
    }
    if(!values.foodType){
      errors.foodType="Enter foodType"
    }
    if(!values.proteinRatio){
        errors.proteinRatio="Enter proteinRatio"
      }
    if(!values.fatRatio){
        errors.fatRatio="Enter fatRatio"
      }
    if(!values.carbsRatio){
        errors.carbsRatio="Enter carbsRatio"
      }
    if(!values.total){
        errors.total="Enter total"
      }
    return errors;
  }
  
});

//console.log(formik.values);
return(
    <div>
    <div class="card">
    <div class="card-body">
    <h2 class="card-header">Update Diet Plans</h2>

    {/* Form to Add Plan */}
    {/* <div className="card align-middle shadow-lg p-3 mb-5 bg-body rounded">
        <div className="align-self-center shadow-lg p-3 mb-5 bg-body rounded"> */}
        <form className="was-validated" autoComplete="off" onSubmit={formik.handleSubmit}>

        <div className="form-group">
          <label htmlFor="skillId">ID:</label>
          <input name="id" type = "number" className="form-control" id="id" required value={formik.values.skillId} onChange={formik.handleChange} placeholder="Enter the Id"/>
          {formik.errors.id? <div className="errors">{formik.errors.id}</div> : null}
          </div>

          <div className="form-group">
            <label htmlFor="foodtype">Slots:</label>
            <input name="slots" className="form-control" type="text" id="slots" required value={formik.values.slots} onChange={formik.handleChange} placeholder="Enter the slots" />
            {formik.errors.slots? <div className="errors">{formik.errors.slots}</div> : null}
          </div>
          
          <div className="form-group">
            <label htmlFor="foodType">FoodType</label>
            <input name="foodType" className="form-control"  type="text" id="foodType" required  value={formik.values.foodType} onChange={formik.handleChange} placeholder="Enter the foodType"/>
            {formik.errors.foodType? <div className="errors">{formik.errors.foodType}</div> : null}
            </div>
        <div className="form-group">
            <label htmlFor="proteinRatio">proteinRatio</label>
            <input name="proteinRatio" className="form-control"  type="text" id="proteinRatio" required  value={formik.values.proteinRatio} onChange={formik.handleChange} placeholder="Enter the protein Ratio"/>
            {formik.errors.proteinRatio? <div className="errors">{formik.errors.proteinRatio}</div> : null}
            </div>
         <div className="form-group">
            <label htmlFor="fatRatio">fatRatio</label>
            <input name="fatRatio" className="form-control"  type="text" id="fatRatio" required  value={formik.values.fatRatio} onChange={formik.handleChange} placeholder="Enter the fat Ratio"/>
            {formik.errors.fatRatio? <div className="errors">{formik.errors.fatRatio}</div> : null}
            </div>
        <div className="form-group">
            <label htmlFor="carbsRatio">carbsRatio</label>
            <input name="carbsRatio" className="form-control"  type="text" id="carbsRatio" required  value={formik.values.carbsRatio} onChange={formik.handleChange} placeholder="Enter the carbs Ratio"/>
            {formik.errors.carbsRatio? <div className="errors">{formik.errors.carbsRatio}</div> : null}
            </div>
        <div className="form-group">
            <label htmlFor="total">total</label>
            <input name="total" className="form-control"  type="text" id="total" required  value={formik.values.total} onChange={formik.handleChange} placeholder="Enter the total"/>
            {formik.errors.total? <div className="errors">{formik.errors.total}</div> : null}
            </div>
  
          <div className="mb-3 form-check">             
            </div>

            <button type="submit" className="btn btn-outline-primary" style={{marginTop: "0.5px", marginBottom: "10px"}}>
              Update
            </button>
        </form>
        <div className="card shadow-lg p-2 mb-1 bg-body rounded">
        <Link className="list-group-item " to="/ChangeOptionDiet">Back</Link>
        </div>
          {/* </div>
          </div> */}
          </div>
    </div>
    </div>
)

}
export default DietPlanUpdate;
