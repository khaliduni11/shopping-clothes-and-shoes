import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { setCurrentUser } from "./store/action/auth";
import setAuthToken from "./token/setAuthToken";
import jwt_Decode from "jwt-decode";

if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_Decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <App />
            </Switch>
        </Router>
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
