// This is file is used to show us only one file becuase this file shows client everything he/she needs//

import React, { Component } from "react";
import { getAddcart, deleteAddcart, updateAddcart } from "../../store/action/addcart";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";

class Addcart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: '',
            quantity: "",
        }
    }

    //getting id to get single item from table addcart
    componentDidMount() {
        //read id from url 
        const { id } = this.props.match.params;
        //and then pass it to table query to get that single item from addcart
        this.props.getAddcart(id);
    }

    //delete addcart item and this can only do someone who owns the item even the admin/editor don't have
    //permission to cross this line
    deleteAddCart = (e) => {
        e.preventDefault();
        const { id } = this.props.match.params;
        this.props.deleteAddcart(id);
        this.props.history.push('/addcart');
    }

    //update quantity and size 
    //becuase clients are different from quantity or the number of the items they and size
    handleSubmit = (e) => {
        e.preventDefault();
        const { id } = this.props.match.params;
        const { size, quantity } = this.state;
        //creates seprate variable that stores size and quantity from state
        const UpdateAddcart = { size, quantity };
        //updates the item and this takes id that tell which item needs to update and the data that
        //changes the old data
        this.props.updateAddcart(id, UpdateAddcart);
        //this line points to the order form to fill the client his/her address 
        this.props.history.push(`/orderform/${this.props.addcarts.addcartId}`);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { quantity, size } = this.state;
        const { addcarts, currentUser } = this.props;
        return (
            <div>
                <div className="container">

                    <div className="row">

                        <div className="col-9 col-md-9 col-sm-12">
                            <div className="card my-5">
                                {/* display image of the item */}
                                <img src={addcarts.image} alt={addcarts.name} className="card-img-top mw-100 h-auto" />
                                <div className="card-body">
                                    <h3 className="card-title text-center">
                                        {/* show the name of the item */}
                                        {addcarts.name}
                                    </h3>
                                    {/* clients needs to see price  */}
                                    <span className="d-flex justify-content-end text-muted lead">${addcarts.price}</span>
                                    <div className="card-text lead text-center">
                                        {/* the description of the item that show more details about the file */}
                                        {addcarts.description}
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 text-muted">
                                            <span className="font-weight-bold">Colors: </span>
                                            {/* client need to what color it is if he/she confused about colors */}
                                            {addcarts.color}
                                        </div>
                                        <br />
                                        <div className="col-md-6 col-sm-12 d-flex justify-content-end text-muted">
                                            <span className="font-weight-bold">Sizes: </span>
                                            {/* this show the client to the size becuase it shows the client allow to get which size the compony/shop has */}
                                            <span> {addcarts.size}</span>

                                        </div>
                                    </div>
                                </div>

                                {/*
                                 This checkpoint checks the user if he/she is logged in and belongs the same client who owes this data 
                                and the it contains inside of this  Delete item 
                                */}

                                {currentUser.isAuthenticated === true ? (
                                    <div className="d-flex justify-content-center mb-3">

                                        <button onClick={this.deleteAddCart} className="btn btn-danger">
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </div>
                                ) : (
                                        <div></div>
                                    )}

                                {/* This form allows to enter the quantity the how many items client need
                                and which size client pre  */}
                                <form onSubmit={this.handleSubmit} className="form-group mx-3">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-6">
                                            <input
                                                className="form-control"
                                                placeholder="The size you need to purchase"
                                                type="text"
                                                name="size"
                                                value={size}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                                required
                                            />
                                        </div>

                                        <div className="col-sm-12 col-md-12 col-lg-6">
                                            <input
                                                className="form-control"
                                                placeholder="Enter the total item you need to purchase"
                                                type="number"
                                                name="quantity"
                                                value={quantity}
                                                onChange={this.handleChange}
                                                autoComplete="off"
                                                required
                                            />
                                        </div>

                                    </div>

                                    <button className="btn btn-success mt-2 btn-block">Order Now</button>

                                </form>
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
        //we need to get from addcart a name, description, image and all other data from addcart 
        //and that is why we called this addcart
        addcarts: state.addcarts.addcart,
        //we need to make sure that this user have permission to order or delete 
        //and this isn't vissible to any one except the owner the email and password
        currentUser: state.currentUser
    }
}

//getAddcart allows client to a single item to see and order
//deleteAddcart means the if the client doesn't need this item any more it allows to delete it
//updateAddcart it means that user can update and order it direct also not only updating and it ordering 
//and renders to oreder form to fill and to demand it 
export default connect(mapStateToProps, { getAddcart, deleteAddcart, updateAddcart })(Addcart);