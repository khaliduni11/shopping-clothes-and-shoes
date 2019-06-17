import { GET_USER, GET_ERROR } from "../actionType";

const initalState = {
    user: {},
    message: {}
}

export default (state = initalState, action) => {
    switch(action.type){
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case GET_ERROR: 
            return {
                message: action.payload
            }
        default:
            return state;
    }
}