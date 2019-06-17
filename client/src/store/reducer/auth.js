import { SET_CURRENT_USER, } from "../actionType";

const intialState = {
    isAuthenticated: false,
    user: {},
}

export default (state = intialState, action ) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!Object.keys(action.payload).length,
                user: action.payload
            }
        default: 
            return state;    
    }
}