import axios from "axios";
import { ADD_PRODUCT, GET_PRODUCT, GET_PRODUCTS, UPDATE_PRODUCT, DELETE_PRODUCT, SEARCH_PRODUCT, SEARCH_ERROR, GET_ERROR } from "../actionType";

const loadproduct = product => ({
    type: GET_PRODUCTS,
    payload: product
})

//this shows all the product 
//to every one who visits this site  
export const getProducts = () => {
    return dispatch => {
        return axios.get("/market/product")
            .then(res => {
                dispatch(loadproduct(res.data.result));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERROR,
                    payload: err.response.data.error
                })
            });
    }
}

//this creates a new product and only have to do that admin/editor
export const addProduct = (product) => (dispatch, getState) => {
    //get currentuser from state and select the user active
    const { currentUser } = getState();
    const userId = currentUser.user.id;
    return axios.post(`/market/product/${userId}`, product)
        .then(res => {
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data
            })
        })
        .catch(err => { })
}

//get specific data to check all of it's data 
//every person have permission to do that 
export const getProduct = (id) => dispatch => {
    return axios.get(`/market/product/${id}`)
        .then(res => {
            dispatch({
                type: GET_PRODUCT,
                payload: res.data.result[0]
            })
        })
}

//search product you perfer 
//and you can search every character of that item you know 
//or description 
//every person have permission to do that
export const searchProduct = (search) => dispatch => {
    return axios.post("/market/product", search)
        .then(res => {
            dispatch({
                type: SEARCH_PRODUCT,
                payload: res.data.result
            })
        })
        .catch(err => {
            dispatch({
                type: SEARCH_ERROR,
                payload: err.response.data.error
            })
        })
}

//update product 
//this can update only admin/editor
//and it takes the id of which product you prefer to edit
//and the data you need to change the old one
export const updateProduct = (id, update) => (dispatch, getState) => {
    const { currentUser } = getState();
    const userId = currentUser.user.id
    return axios.put(`/market/product/${id}/${userId}`, update)
        .then(res => {
            dispatch({
                type: UPDATE_PRODUCT,
                payload: res.data
            })
        })
}


//delete product 
//product can only delete admin/editor 
//and it invokes id 
//and id identifies which product you prefer to delete
export const deleteProduct = (id) => (dispatch, getState) => {
    const { currentUser } = getState();
    const userId = currentUser.user.id;
    return axios.delete(`/market/product/${id}/${userId}`)
        .then(res => {
            dispatch({
                type: DELETE_PRODUCT,
            })
        })
}