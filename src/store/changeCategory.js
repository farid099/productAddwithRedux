import intitalState from "../redux/reducers/intitalState";

const changeCategory =(state = intitalState,action)=>{

    if(action.type === "CHANGE_CATEGORY"){
        return {
            ...state,
            currentCategory:action.payload
        }
    }
    else if(action.type === "FETCH_CATEGORIES"){
        return{
            ...state,
            categories:action.payload
        }
    }
    return state;
};

export default changeCategory