import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import SignUp from "../../component/authentication/signup";
import SignIn from "../../component/authentication/login";
import GetUser from "../../component/authentication/user";
import HomePage from "../home/home";
import Products from "../products/products";
import AddProduct from "../products/addProduct";
// import ProductSearchItem from "../products/productSearchItem";
// import ProductItem from "../products/productItem";
import SearchProductItem from "../products/searchProductItem";
import Addcarts from "../addcart/addcarts";
import Orders from "../order/orders";
// import ProductsSearch from "../products/productsSearch";



class NavbarRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route
                    path="/signup"
                    exact
                    render={props => { return (<SignUp {...props} />) }}
                />
                <Route
                    path="/signin"
                    exact
                    render={props => { return (<SignIn {...props} />) }}
                />

                <Route
                    path="/user"
                    exact
                    render={props => { return (<GetUser {...props} />) }}
                />

                <Route
                    path="/"
                    exact
                    render={props => { return (<HomePage {...props} />) }}
                />

                <Route
                    path="/product"
                    exact
                    render={props => { return (<Products {...props} />) }}
                />

                <Route
                    path="/addProductform"
                    exact
                    render={props => { return (<AddProduct {...props} />) }}
                />

                <Route
                    path="/product/search/:id"
                    exact
                    render={props => { return (<SearchProductItem {...props} />) }}
                />

                <Route
                    path="/addcart"
                    exact
                    render={props => { return (<Addcarts {...props} />) }}
                />

                <Route
                    path="/ordered"
                    exact
                    render={props => { return (<Orders {...props} />) }}
                />
            </Switch>
        )
    }
}

export default NavbarRoutes;