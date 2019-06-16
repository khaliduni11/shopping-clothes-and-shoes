import {ADD_ORDER, GET_ORDER, SEARCH_ORDER, SEARCH_ORDER_ERROR} from "../actionType";

const initialState = {
    ordered: [],
    search: [],
    error: {},
    message: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_ORDER:
            return {
                ...state,
                ordered: [action.payload, ...state.ordered],
                message: action.payload.message
            }
        case GET_ORDER:
            return {
                ...state,
                ordered: action.payload,
                error: {}
            }
        case SEARCH_ORDER:
            return{
                ...state,
                search: action.payload,
                error: {},
                ordered: []
            }
        case SEARCH_ORDER_ERROR:
            return{
                ...state,
                error: action.payload,
                search: [],
                ordered: []
            }
        default:
            return state
    }
}