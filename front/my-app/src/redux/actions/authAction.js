import {LOG_IN, LOG_OUT} from "../constants/isAuthConstants";


export const logIn=()=>{
    localStorage.setItem('auth',"true")
    return{type:LOG_IN}
}
export const logOut=()=>{
    localStorage.removeItem('auth')
    return {type:LOG_OUT}
}


