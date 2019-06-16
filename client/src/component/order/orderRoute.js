import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SearchOrder from "./searchOrdered"



class OrderRoute extends Component {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/searchOrdered"
                    render={props => { return (<SearchOrder {...props} />) }}
                />

            </Switch>
        )
    }
}

export default OrderRoute;