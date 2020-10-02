import { Form } from "reactstrap";
import {createStore} from "redux";
import rootReducer from "./index"

const configureStore = () =>{

    return createStore(rootReducer);
}

export default configureStore;