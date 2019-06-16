import {GET_ADDCARTS, GET_ADDCART, GET_ADDCART_ERRORS, DELETE_ADDCART} from "../actionType";


const initialState = {
    addcarts: [],
    addcart: {},
    error: {}
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_ADDCARTS:
            return {
                ...state,
                addcarts: action.payload,
                error: {}
            }
        case GET_ADDCART:
            return {
                ...state,
                addcart: action.payload
            }
        case GET_ADDCART_ERRORS:
            return{
                ...state,
                error: action.payload,
                addcarts: []
            }
        case DELETE_ADDCART:
            return {
                ...state,
                addcarts: state.addcarts.filter(addcart => addcart._id !== action.payload.id)
            }
        default: 
            return state;
    }
}