//This shows client a single item and its details 
//if admin/editor shows delete and update 

import React, { Component } from "react";
import { getProduct, deleteProduct } from "../../store/action/product";
import { connect } from "react-redux";
import {Link} from "react-router-dom"

class Product extends Component {

    //This is function tells the id of the item to get it immediate in the browser
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getProduct(id);
    }

    //allows user to delete data and it is only allowed by admin/editor
    //after delete it redirects to products home page
    handleSubmit = (e) => {
        const {id} = this.props.match.params;
        this.props.deleteProduct(id);
        this.props.history.push('/product');
    }
    render() {
        const { product, currentUser } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="row">

                        <div className="col-9 col-md-9 col-sm-12">
                            <div className="card my-5">
                                <img src={product.image} alt={product.name}  className="card-img-top mw-100 h-auto" />
                                <div className="card-body">
                                    <h3 className="card-title text-center">
                                        {product.name}
                                    </h3>
                                    <span className="d-flex justify-content-end text-muted lead">${product.price}</span>
                                    <div className="card-text lead text-center">
                                        {product.description}
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 text-muted">
                                            <span className="font-weight-bold">Colors: </span>
                                            {product.color}
                                        </div>
                                        <br />
                                        <div className="col-md-6 col-sm-12 d-flex justify-content-end text-muted">
                                            <span className="font-weight-bold">Sizes: </span>
                                            <span> {product.size}</span>
                                            
                                        </div>
                                    </div>
                                </div>
                                {/* 
                                if user is admin or editor show delete and editor
                                 */}
                                {currentUser.user.isAdmin > 0 || currentUser.user.editor > 0 ? (
                                    <div className="d-flex justify-content-center mb-3">
                                        <Link to={`/product/${product.id}/update`} className="btn btn-warning mr-2">
                                            <i className="far fa-edit"></i>
                                        </Link>

                                        <button onClick={this.handleSubmit} className="btn btn-danger">
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                ):(
                                    <div></div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        //After initiailized id the product immediately get data from table 
        //and that data client needs to know is here and used product as to display it
        product: state.product.product,
        //is used to ensure that user is admin/editor to give a permission to delete/edit
        currentUser: state.currentUser
    }
}


//getProduct is used to get specific product and invoke id that reads from table
//deleteProduct is used to delete  a single item and invoke id that tells the table to delete this row id
export default connect(mapStateToProps, { getProduct, deleteProduct })(Product);