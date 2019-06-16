import {GET_ADDCARTS, GET_ADDCART, GET_ADDCART_ERRORS, POST_ADDCART, UPDATE_ADDCART, DELETE_ADDCART} from "../actionType";
import axios from 'axios';


//fetch all data from addcart
//everybody gets it's own addcart no one will another person's addcart
//even the admin and editor
export const getAddcarts = () => (dispatch, getState) => {
    //get currentuser from state and select the user active 
    const {currentUser} = getState();
    const userId = currentUser.user.id;
    return axios.get(`/market/addcart/${userId}`)
    .then(res => {
        dispatch({
            type: GET_ADDCARTS,
            payload: res.data.results
        })
    })
    .catch(err => {
        dispatch({
            type: GET_ADDCART_ERRORS,
            payload: err.response.data
        })
    })
}

//fetch selected and get all of its information
export const getAddcart = (id) => (dispatch, getState) => {
    //get currentuser from state and select the user active 
    const {currentUser} = getState();
    const userId = currentUser.user.id;
    return axios.get(`/market/addcart/${userId}/${id}`)
    .then(res => {
        dispatch({
            type: GET_ADDCART,
            payload: res.data.result[0]
        })
    })
}

//add new addcart 
export const postAddcart = (productId) => (dispatch, getState )=> {
    //get currentuser from state and select the user active 
    const {currentUser} = getState();
    const userId = currentUser.user.id;

    return axios.post(`/market/addcart/${productId}/${userId}/addcart`)
    .then(res => {
        dispatch({
            type: POST_ADDCART,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: GET_ADDCART_ERRORS,
            payload: err.response.data
        })
    })
}

//update addcart
//and it is only can update the user who have made this addcart
export const updateAddcart = (id, updateData) => (dispatch, getState) => {
    //get currentuser from state and select the user active 
    const {currentUser} = getState();
    const userId = currentUser.user.id;
    return axios.put(`/market/addcart/${userId}/${id}`, updateData)
    .then(res => {
        dispatch({
            type: UPDATE_ADDCART,
            payload: res.data
        })
    })
}

//delete addcart
//only can delete the person who made this addcart 
export const deleteAddcart = (id) => (dispatch, getState) => {
    //get currentuser from state and select the user active 
    const {currentUser} = getState();
    const userId = currentUser.user.id;
    return axios.delete(`/market/addcart/${userId}/${id}`)
    .then(res => {
        dispatch({
            type: DELETE_ADDCART,
            payload: res.data
        })
    })
}
// export const addProduct = (product) => (dispatch, getState) => {