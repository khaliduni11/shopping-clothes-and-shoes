import axios from "axios";
import { SET_CURRENT_USER, GET_ERROR, REMOVE_ERROR } from "../actionType";
import setAuthToken from "../../token/setAuthToken";
import jwtDecode from "jwt-decode";


export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

//this clears current user data from browser
//logs out the user
export const logout = () => dispatch => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}

//signup
export const signup = userData => dispatch => {
    return axios.post("/market/signup", userData)
        .then(res => {
            //this token is used to store localStorage 
            //if user refreshes or doesn't make any visit for long time 
            //if he/she tries to to visit the website it will automatic logged in 
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwtDecode(token);
            //this.removes the if there were error
            dispatch({
                type: REMOVE_ERROR
            })
            //and decodes token data
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            dispatch({
                type: GET_ERROR,
                payload: err.response.data
            })
        })
}


export const loginUser = userData => dispatch => {
    return axios.post("market/signin", userData)
        .then(res => {
            //this token is used to store localStorage 
            //if user refreshes or doesn't make any visit for long time 
            //if he/she tries to to visit the website it will automatic logged in 
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            setAuthToken(token);
            const decoded = jwtDecode(token);
            //this.removes the if there were error
            dispatch({
                type: REMOVE_ERROR
            })
            //and decodes token data
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            dispatch({
                type: GET_ERROR,
                payload: err.response.data
            })
        })
}