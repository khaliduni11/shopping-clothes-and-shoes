//this file is only for admin
import { GET_USER, GET_ERROR, REMOVE_ERROR } from "../actionType";
import axios from "axios"

//get user to check it
export const getUserAction = (email) => (dispatch, getState) => {
    //get currentuser from state and select the user active
    let { currentUser } = getState();
    const user = currentUser.user.id;
    return axios.post(`/market/user/${user}`, email)
        .then(res => {
            dispatch({
                type: REMOVE_ERROR
            })

            dispatch({
                type: GET_USER,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: GET_ERROR,
                payload: err.response.data
            })
        })

}

//give the user the role of admin
export const adminRole = () => (dispatch, getState) => {
    //get currentuser from state and select the user active
    let { currentUser } = getState();
    const user = currentUser.user.id;
    let { getUserReducer } = getState();
    const id = getUserReducer.user.id;
    return axios.put(`/market/user/${user}/admin/${id}`)
        .then(res => { })
        .catch(err => {
            dispatch({
                type: GET_ERROR,
                payload: err.response.data
            })
        })
}

//give the user the of editor
export const editorRole = () => (dispatch, getState) => {
    //get currentuser from state and select the user active
    let { currentUser } = getState();
    const user = currentUser.user.id;
    let { getUserReducer } = getState();
    const id = getUserReducer.user.id;
    return axios.put(`/market/user/${user}/editor/${id}`)
        .then(res => { })
        .catch(err => {
            dispatch({
                type: GET_ERROR,
                payload: err.response.data
            })
        })
}