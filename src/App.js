import {useSelector,useDispatch} from "react-redux";
import { login, register } from "./actions";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import UserLogin from "./Components/UserLogin";
import UserRegister from "./Components/UserRegister";

function App() {
  const isRegistered=useSelector((state)=>state.register);
  const isLogged=useSelector((state)=>state.login);
  //const dispatch=useDispatch();
  return (
    <Router>
    <div className="App">
        <Nav />
        <Routes>
          if(isRegistered){
          <Route path="/register" element={<UserRegister/>}  />
        }
          {/* {isRegistered? <p>Registered</p>:<p>please register</p>} */}
          <Route path="/login" element={<UserLogin/>} />
          {/* {isLogged ? <p>Logged in</p>:<p>Not logged in</p>} */}
        </Routes>
        {/* <h1>Nutrition App</h1>
        <h3>Regsiter:</h3>
        <button onClick={()=>dispatch(register())}>register</button>
        {isRegistered? <p>Registered</p>:<p>please register</p>}
        <button onClick={()=>dispatch(login())}>Login</button>
        {isLogged ? <p>Logged in</p>:<p>Not logged in</p>} */}
    </div>
    </Router>
  );
}

export default App;
