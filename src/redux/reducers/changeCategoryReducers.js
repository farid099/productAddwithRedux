import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes";


const changeCategoryReducer = (state=initialState.currentCategory,action) =>{

    switch (action) {
        case actionTypes.CHANGE_CATEGORY:
            return action.payload
        default:
            return state;
    }
}

export default changeCategoryReducer