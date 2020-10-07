import * as actionTypes from "../actions/actionTypes";
import intitalState from "./intitalState";


const changeCategoryReducer = (state=intitalState,action) =>{

    switch (action) {
        case actionTypes.CHANGE_CATEGORY:
            return {
                ...state,
                currentCategory:action.payload   
            }
            case actionTypes.FETCH_CATEGORIES:
                return {
                    ...state,
                    categories:action.payload
                }
        default:
            return state;
    }
}

export default changeCategoryReducer