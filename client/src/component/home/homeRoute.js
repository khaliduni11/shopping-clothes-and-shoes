import React, { Component } from "react";
import { Route } from "react-router-dom";


class HomeRoute extends Component {
    render() {
        return (
            <div>
                {/* <Route
                    exact
                    path="/clothes"
                    render={props => { return (<Clothes {...props} />) }}
                />

                <Route
                    exact
                    path="/shoes"
                    render={props => { return (<Shoes {...props} />) }}
                /> */}
            </div>
        )
    }
}

export default HomeRoute;