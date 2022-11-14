import axios from "axios";
import { useFormik } from "formik";
import { Link } from 'react-router-dom'

const NutritionPlanUpdate=()=>{
//  const navigation = useNavigate();

const formik = useFormik({

  initialValues:{
    id:0,
    name:'',
    planDescription:'',
    created_At:'',
    updated_At:'',
    //carbsRatio:'',
    price:""
 },

  onSubmit: (values) => {
    console.log(values);
    axios.put(`http://localhost:8082/NutritionPlan/updatenutri/${formik.initialValues.id}`, values)
    .then(resp=>{
        console.log("Updated");
        alert("Successfully Updated");
        console.log(resp.data);
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
    if(!values.name){
      errors.name="Enter the name"
    }
    if(!values.planDescription){
      errors.planDescription="Enter Plan Description"
    }
    if(!values.created_At){
        errors.created_At="Enter Creation Date"
      }
    if(!values.updated_At){
        errors.updated_At="Enter Updated Date"
      }
    // if(!values.carbsRatio){
    //     errors.carbsRatio="Enter carbsRatio"
    //   }
    if(!values.price){
        errors.price="Enter Valid Price"
      }
    return errors;
  }
  
});

//console.log(formik.values);
return(
    <div>
      <div class="card">
    <div class="card-body">
    <div className="bg-success p-2 text-white bg-opacity-75">Update Nutrition Plans</div>
        <form className="was-validated" autoComplete="off" onSubmit={formik.handleSubmit}>

        <div className="form-group">
          <label htmlFor="skillId">ID:</label>
          <input name="id" type = "number" className="form-control" id="id" required value={formik.values.id} onChange={formik.handleChange} placeholder="Enter Id"/>
          {formik.errors.id? <div className="errors">{formik.errors.id}</div> : null}
          </div>

          <div className="form-group">
            <label htmlFor="planDescription">Name:</label>
            <input name="name" className="form-control" type="text" id="name" required value={formik.values.name} onChange={formik.handleChange} placeholder="Enter Name" />
            {formik.errors.name? <div className="errors">{formik.errors.name}</div> : null}
          </div>
          
          <div className="form-group">
            <label htmlFor="planDescription">Plan Description</label>
            <input name="planDescription" className="form-control"  type="text" id="planDescription" required  value={formik.values.planDescription} onChange={formik.handleChange} placeholder="Enter Plan Description"/>
            {formik.errors.planDescription? <div className="errors">{formik.errors.planDescription}</div> : null}
            </div>
        <div className="form-group">
            <label htmlFor="created_At">Created_At</label>
            <input name="created_At" className="form-control"  type="date" id="created_At" required  value={formik.values.created_At} onChange={formik.handleChange} placeholder="Enter Creation Date"/>
            {formik.errors.created_At? <div className="errors">{formik.errors.created_At}</div> : null}
            </div>
         <div className="form-group">
            <label htmlFor="updated_At">Updated_At</label>
            <input name="updated_At" className="form-control"  type="date" id="updated_At" required  value={formik.values.updated_At} onChange={formik.handleChange} placeholder="Enter Updation Date"/>
            {formik.errors.updated_At? <div className="errors">{formik.errors.updated_At}</div> : null}
            </div>
        {/* <div className="form-group">
            <label htmlFor="carbsRatio">carbsRatio</label>
            <input name="carbsRatio" className="form-control"  type="text" id="carbsRatio" required  value={formik.values.carbsRatio} onChange={formik.handleChange} placeholder="Enter the carbs Ratio"/>
            {formik.errors.carbsRatio? <div className="errors">{formik.errors.carbsRatio}</div> : null}
            </div> */}
        <div className="form-group">
            <label htmlFor="price">Price</label>
            <input name="price" className="form-control"  type="number" id="price" required  value={formik.values.price} onChange={formik.handleChange} placeholder="Enter Price"/>
            {formik.errors.price? <div className="errors">{formik.errors.price}</div> : null}
            </div>
  
          <div className="mb-3 form-check">             
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Update
            </button>
            <a href="/Skill">
              <button type="submit" className="btn btn-outline-danger mx-2">
                Cancel
              </button>
              </a>
        </form>
        <div className="card shadow-lg p-2 mb-1 bg-body rounded">
        <Link className="list-group-item " to="/ChangeOptionNutri">Back</Link>
        </div>    
    </div>
    </div>
    </div>
)

}
export default NutritionPlanUpdate;
