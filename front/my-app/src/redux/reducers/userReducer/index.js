import {FETCH_USERS} from "../../constants/userСonstants";


const initialState={
    users:[]
}

export const userReducer = (state=initialState,action) => {
    switch (action.type){
        case FETCH_USERS:
            return {
                ...state,
                users:[...state.users,...action.payload]
            }
        default:
            return state
    }
}
