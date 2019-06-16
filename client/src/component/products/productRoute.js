import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Product from "./product";
import Products from "./products";
import UpdateProduct from './updateProduct';
// import ProductSearch from "./productSearch";


class ProductRoute extends Component {
    render() {
        return (
            <Switch>
                <Route
                    exact
                    path="/product/:id"
                    render={props => { return (<Product {...props} />) }}
                />

                <Route
                    exact
                    path="/search/:id"
                    render={props => { return (<Products {...props} />) }}
                />

                <Route
                    exact
                    path="/product/:id/update"
                    render={props => { return (<UpdateProduct {...props} />) }}
                />

            </Switch>
        )
    }
}

export default ProductRoute;