import React, { Component } from 'react';
import Navbar from "./component/navbar/navbar"
import NavbarRoutes from "./component/navbar/navbarRoute";
import ProductRoute from "./component/products/productRoute";
import AddcartRoute from "./component/addcart/addcartRoute";





class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <NavbarRoutes />
        <ProductRoute />
        <AddcartRoute />
      </div>
    );
  }
}

export default App;
