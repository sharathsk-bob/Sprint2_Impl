import {combineReducers} from "redux";
import registerReducer from "./isRegistered";
import loggedReducer from "./isLogged";

const allReducers=combineReducers({
    isRegistered: registerReducer,
    isLogged:loggedReducer,
});

export default allReducers;