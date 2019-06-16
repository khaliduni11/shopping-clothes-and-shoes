import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Addcart from "./addcart";
import OrderForm from "../order/OrderForm";

class AddCartRoute extends Component {
    render() {
        return (
            <Switch>
                <Route
                    path="/addcart/:id"
                    exact
                    render={props => { return (<Addcart {...props} />) }}
                />

                <Route
                    path="/orderform/:id"
                    exact
                    render={props => { return (<OrderForm {...props} />) }}
                />

            </Switch>
        )
    }
}

export default AddCartRoute;