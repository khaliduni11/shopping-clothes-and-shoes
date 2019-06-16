import { GET_ERROR, REMOVE_ERROR } from "../actionType";


export default (state = { message: null }, action) => {
    switch (action.type) {
        case GET_ERROR:
            return action.payload
        case REMOVE_ERROR:
            return {
                message: null
            }
        default:
            return state;
    }
}