//show product item that user have searched
//as show like productItem 

import React, { Component } from "react";
import "./product.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postAddcart } from "../../store/action/addcart";

class SearchProductItem extends Component {
    
    //this allows client to make addcart 
    addcart = () => {
        const { id } = this.props;
        this.props.postAddcart(id);
    }

    render() {
        const { image, name, id, price, currentUser } = this.props
        return (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-2 pl-5 py-5">
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
                            if client logged in add cart 
                            if client doesn't logged in it redirects logg in form
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
        //this is used control if client logged in or not 
        // if user logged in it he/she can make addcart
        //otherwise it redirects to the form to log in 
        //and shows message that say first log in 
        currentUser: state.currentUser
    }
}


//postAddcart copy data from product and adds to addcart if only user logged in 
export default connect(mapStateToProps, { postAddcart })(SearchProductItem);