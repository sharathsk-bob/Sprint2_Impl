const loggedReducer=(state=false,action)=>{
    switch(action.type){
        case "LOG-IN":
            return !state;
        default:
            return state;
    }
};

export default loggedReducer;