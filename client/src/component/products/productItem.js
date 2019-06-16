//This file is shows the client items one by one to choose it what they need 
//and this file comes from products.js that loops the data from data from the database and server


import React, { Component } from "react";
import "./product.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postAddcart } from "../../store/action/addcart";


class ProductItem extends Component {

    //used to make addcart allow client to make addcart 
    //and uses the id of from the item to choose only which he/she needs only
    addcart = () => {
        const { id } = this.props;
        this.props.postAddcart(id);
    }
    render() {
        const { id, name, image, price, currentUser } = this.props
        return (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-2 pl-5 py-3">
                <div className="card">
                    <img src={image} style={{ height: "200px" }} alt={image} className="responsive-img card-img-top" />
                    <div className="card-body">
                        <div className="card-title">
                            {name}
                        </div>
                        <p className="text-muted">${price}</p>

                        <div className="row">
                            <div className="col-6">
                                <Link className="btn btn-outline-info btn-sm" to={`/product/${id}`}>More Info</Link>
                            </div>

                            {/* 
                            if user authenticates/logged in user can addcart
                            if user didn't log in or isn't authenticated it redirect's log in form
                            */}
                            {currentUser.isAuthenticated ? (
                                <div className="col-6 d-flex justify-content-end">
                                    <Link onClick={this.addcart} to="/product" className="btn btn-primary">
                                        <i className="fas fa-shopping-cart"></i>
                                    </Link>
                                </div>
                            ) : (
                                    <div className="col-6 d-flex justify-content-end">
                                        <Link onClick={this.addcart} to="/signin" className="btn btn-primary">
                                            <i className="fas fa-shopping-cart"></i>
                                        </Link>
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
        //used to ensure that user logged in if user logged in can make addcart 
        //if not user redirect to log in form
        currentUser: state.currentUser
    }
}

//productAddcart is used to post new addcart if user logged in 
export default connect(mapStateToProps, { postAddcart })(ProductItem);