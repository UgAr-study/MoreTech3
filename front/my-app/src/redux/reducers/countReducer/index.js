import {MINUS_ONE, PLUS_ONE} from "../../constants/countConstants";


const initialState={
    count:0
}

export const countReducer = (state = initialState, action) => {
    switch (action.type){
        case PLUS_ONE:
            return{
                ...state,
                count:state.count+1
            }
        case MINUS_ONE:
            return{
                ...state,
                count:state.count-1
            }
        default:
            return {
            ...state
        }
    }
}
