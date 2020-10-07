import {combineReducers} from "redux";
import changeCategory from './changeCategory';
import getProducts from "./getProducts";
import getBasketProducts from "./getBasketProducts"


const rootReducer = combineReducers({
    changeCategory,
    getProducts,
    getBasketProducts,
})

export default rootReducer;