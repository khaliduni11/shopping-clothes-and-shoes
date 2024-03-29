import {createStore, compose, applyMiddleware}  from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/index";


const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
    ),
    
);

export default store;