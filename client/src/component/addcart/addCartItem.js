// This file show us all addcarts as a card and one by one//


import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddCartItem extends Component {
    render() {
        //This props read that from addcarts to show to those how past as props
        const { id, name, image, price } = this.props
        return (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-2 pl-5 py-3">
                <div className="card">
                    <img src={image} style={{ height: "200px" }} alt={image} className="responsive-img card-img-top" />
                    <div className="card-body">
                        <div className="card-title">
                            {name}
                        </div>
                        <p className="text-muted">${price}</p>

                        
                            <div className="text-center">
                                <Link className="btn btn-info" to={`/addcart/${id}`}>More Info</Link>
                            </div>
                        

                    </div>
                </div>
            </div>
        )
    }
}

export default AddCartItem;