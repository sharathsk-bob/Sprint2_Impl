const registerReducer=(state=false,action)=>{
    switch(action.type){
        case "REGISTERED":
            return !state;
        default:
            return state;
    }
};

export default registerReducer;