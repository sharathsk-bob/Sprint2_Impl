import {useSelector,useDispatch} from "react-redux";
import { login, register } from "./actions";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import UserLogin from "./Components/UserLogin";
import UserRegister from "./Components/UserRegister";
import Admin from "./Components/Admin";
import Customer from "./Components/Customer";
import NutritionModule from "./Components/NutritionModule";
import Payment from "./Components/Payment/Payment";
import DietPlan from "./Components/DietPlan";
import WeightLog from "./Components/WeightLog";
import DietPlanAdmin from "./Components/DietPlanAdmin";
// import OptionsAvailable from "./Components/OptionsAvailable";
//import { ThemeProvider } from 'styled-components';
import DietPlanDelete from "./Components/DietPlanDelete";
import Popup from "./Components/DietPlanUpdate";
import DietPlanUpdate from "./Components/DietPlanUpdate";
import Admin_1 from "./Components/OptionsAvailable";
import OptionPage from "./Components/OptionPage";
import ChangeOption from "./Components/ChangeOption";


import PaymentUpdateForm from "./Components/Payment/PaymentUpdateForm";
import PaymentAdmin from "./Components/Payment/PaymentAdmin";
import PaymentGetAPI from "./Components/Payment/PaymentGetAPI";
import PaymentAddOffer from "./Components/Payment/PaymentAddOffer";



function App() {
  //const isRegistered=useSelector((state)=>state.register);
  //const isLogged=useSelector((state)=>state.login);
  //const dispatch=useDispatch();
  return (
    <Router>
    <div className="App">
        <Nav />
        <header className="App-header">
        <Routes>
          <Route path="/nutrition" element={<NutritionModule/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path="/PaymentGetAPI" element={<PaymentGetAPI/>}/>
          <Route path="/PaymentUpdateForm" element={<PaymentUpdateForm/>}/>
          <Route path="/PaymentAdmin" element={<PaymentAdmin/>}/>
          <Route path="/PaymentAddOffer" element={<PaymentAddOffer/>}/>
          {/* <Route path="/PaymentMainPage" element={<PaymentMainPage/>}/> */}
          <Route path="/register" element={<UserRegister/>}  />
          <Route path="/login" element={<UserLogin/>} />
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/DietPlan" element={<DietPlan />} />
          <Route path="/WeightLog" element={<WeightLog />} />
          <Route path="/customer" element={<Customer/>}/>
          <Route path="/DietPlanAdmin" element={<DietPlanAdmin/>}/>
          {/* <Route path="/OptionsAvailable" element={<OptionsAvailable/>}/> */}
          <Route path="/DietPlanDelete" element={<DietPlanDelete/>}/>
          <Route path="/DietPlanUpdate" element={<DietPlanUpdate/>}/>
          <Route path="/Admin_1" element={<Admin_1/>}/>
          <Route path="/OptionPage" element={<OptionPage/>}/>
          <Route path="/ChangeOption" element={<ChangeOption/>}/>

          
          {/* {isLogged ? <p>Logged in</p>:<p>Not logged in</p>} */}
        </Routes>
        {/* <h1>Nutrition App</h1>
        <h3>Regsiter:</h3>
        <button onClick={()=>dispatch(register())}>register</button>
        {isRegistered? <p>Registered</p>:<p>please register</p>}
        <button onClick={()=>dispatch(login())}>Login</button>
        {isLogged ? <p>Logged in</p>:<p>Not logged in</p>} */}
        </header>
    </div>
    
    </Router>
    
  );
}

export default App;
