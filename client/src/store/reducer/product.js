import {GET_PRODUCT, GET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, SEARCH_PRODUCT, SEARCH_ERROR, GET_ERROR} from "../actionType";

const initialState = {
    products: [],
    product: {},
    search: [],
    error: {},
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [action.payload, ...state.products],
                error: {}
            }
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload,
                error: {}
            }
        case SEARCH_PRODUCT:
            return {
                ...state,
                search: action.payload,
                error: {}
            }
        case SEARCH_ERROR: 
            return {
                ...state,
                error: action.payload,
                search: [],
                product: []
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => 
                    product.id !== action.payload
                )
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map(product => 
                    product.id === action.payload.id ?
                    (product = action.payload)
                    :product
                )
            }
        case GET_ERROR:
            return {
                ...state,
                error: action.payload,
                products: []
            }
        default: 
            return state;
    }
}