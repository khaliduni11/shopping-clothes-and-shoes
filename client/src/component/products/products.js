//This file is used to loop all data from search or product on the home page and if there is error

import React, { Component } from "react";
import { getProducts } from "../../store/action/product";
import { connect } from "react-redux";
import ProductItem from "./productItem";
import SearchProductItem from "./searchProductItem";



class Product extends Component {

    //as the page load the item of products from the database and server will run immeditely 
    componentDidMount() {
        this.props.getProducts();
    }
    render() {
        const { product, error, addcartError } = this.props;
        let products = product.map(p => (
            <ProductItem
                key={p.id}
                name={p.name}
                image={p.image}
                color={p.color}
                size={p.size}
                description={p.description}
                quantity={p.quantity}
                price={p.price}
                id={p.id}
            />

        ))

        const { search } = this.props;
        let searchProduct = search.map(p => (
            <SearchProductItem
                key={p.id}
                name={p.name}
                image={p.image}
                color={p.color}
                size={p.size}
                description={p.description}
                quantity={p.quantity}
                price={p.price}
                id={p.id}
            />
        ))

        return (
            <div>
                <div className="container my-5">
                    <div className="row">

                        <div className="col-lg-12 col-md-12 border rounded py-4 px-4 shadow my-2">
                            {/* 
                            show Not found if there is no product in this website
                            */}
                            {error.message && (
                                <p className="alert alert-danger text-center lead">
                                    {error.message}
                                </p>
                            )}

                            {/* 
                                This error shows us if addcart exist before and 
                                if it is not exist it won't show to the client                            
                            */}
                            {addcartError.error && (
                                <p className="alert alert-danger text-center lead">
                                    {addcartError.error.message}
                                </p>
                            )}
                            {search.length > 0 ? (
                                <div className="row">
                                    {searchProduct}
                                </div>
                            ) : (
                                    <div className="row">
                                        {products}
                                    </div>
                                )}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        //this product loops the item and send it productItem to display it well
        product: state.product.products,
        //this product loops the item and send it searchItem to display it well on search side
        search: state.product.search,
        //shows if there is no product in it 
        error: state.product.error,
        //addcart error show if there client have same item in the addcart and tells he/she has before
        //in the addcart
        addcartError: state.addcarts.error
    }
}

//getProudcts gets all product from table database and server
export default connect(mapStateToProps, { getProducts })(Product);