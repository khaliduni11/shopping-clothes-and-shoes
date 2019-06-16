import {combineReducers} from "redux";
import errors from "./error";
import currentUser from "./auth";
import getUserReducer from "./user";
import product from "./product";
import addcarts from "./addcart";
import ordered from "./ordered";

const rootReducer = combineReducers({
    error : errors,
    currentUser: currentUser,
    getUserReducer: getUserReducer,
    product: product,
    addcarts: addcarts,
    ordered: ordered
})

export default rootReducer;