import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {countReducer} from "./countReducer";
import {authReducer} from "./authReducer";

export default combineReducers({
    users:userReducer,
    count:countReducer,
    auth:authReducer
})
