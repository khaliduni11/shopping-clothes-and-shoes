import {ADD_ORDER, GET_ORDER, SEARCH_ORDER_ERROR, SEARCH_ORDER, DELIVERED} from "../actionType";
import axios from 'axios';

//allow user to order
export const addOrder = (id, postOrdered) => (dispatch, getState) => {
    //get currentuser from state and select the user active 
    const {currentUser } = getState();
    const userId = currentUser.user.id;
    axios.post(`/market/order/${id}/${userId}/order`, postOrdered)
    .then(res => {
        dispatch({
            type: ADD_ORDER,
            payload: res.data
        })
    })
}

//search individual username 
//only for admin/editor not other users allowed
export const searchOrder = (username) => (dispatch, getState) => {
    //get currentuser from state and select the user active 
    const {currentUser} = getState();
    const userId = currentUser.user.id
    axios.post(`/market/order/${userId}/search`, username)
    .then(res => {
        dispatch({
            type: SEARCH_ORDER,
            payload: res.data.result
        })
    })
    .catch(err => {
        dispatch({
            type: SEARCH_ORDER_ERROR,
            payload: err.response.data.error
        })
    })
}

//show all ordered even sorted as date and delivered 
//there is no worry about which is next and who delivered
//the next is always at the top and delivered is always at the bottom
//only for admin/editor not other users allowed
export const getOrder = () => (dispatch, getState) => {
    //get currentuser from state and select the user active 
    const {currentUser} = getState();
    const userId = currentUser.user.id
    axios.get(`/market/order/${userId}`)
    .then(res => {
        dispatch({
            type: GET_ORDER,
            payload: res.data.results
        })
    })
}

//this indicates if the user get product.
export const deliveredProduct = (id) => (dispatch, getState) => {
    //get currentuser from state and select the user active 
    const {currentUser} = getState();
    const userId = currentUser.user.id
    axios.post(`/market/order/${userId}/${id}/delivered`)
    .then(res => {
        dispatch({
            type: DELIVERED,
            payload: res.data
        })
    })
}
