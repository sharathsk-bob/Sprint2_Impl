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
import Payment from "./Components/Payment";
import DietPlan from "./Components/DietPlan";
import WeightLog from "./Components/WeightLog";
import PaymentGetAPI from "./Components/PaymentGetAPI";


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
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/PaymentGetAPI" element={<PaymentGetAPI/>}/>
          <Route path="/register" element={<UserRegister/>}  />
          <Route path="/login" element={<UserLogin/>} />
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/DietPlan" element={<DietPlan />} />
          <Route path="/WeightLog" element={<WeightLog />} />
          <Route path="/customer" element={<Customer/>}/>
          
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
