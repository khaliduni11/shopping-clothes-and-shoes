//This section is for admin and editor only and it used to update product

import React, { Component } from 'react';
import { getProduct, updateProduct } from "../../store/action/product";
import {connect} from "react-redux";

class UpdateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: "",
            image: "",
            size: '',
            color: "",
            description: "",
            quantity: "",
            typeOfPerson: "",
            typeOfGoods: "",
            typeOfWhere: '',
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //this allow to fill blanks only to update the section you need the other will be default as they were before
    UNSAFE_componentWillReceiveProps(nextProps, nextState){
        const {name, price, image, size, color, description, quantity, typeOfGoods, typeOfWhere, typeOfPerson} = nextProps.product;
        this.setState({
            name, price, image, size, color, description, quantity, typeOfGoods, typeOfWhere, typeOfPerson
        })
    }

    componentDidMount(){
        let {id} = this.props.match.params;
        this.props.getProduct(id);
    }

    //this updates data from database 
    //this is only have permission to do admin/editer
    handleSubmit = (e) => {
        e.preventDefault();
        let {id} = this.props.match.params;
        this.props.updateProduct(id, this.state);
        this.props.history.push(`/product/${id}`);
    }
    render() {
        const { name, price, image, size, color, description, quantity, typeOfGoods, typeOfWhere, typeOfPerson } = this.state;
        return (
            <div className="container">
                <p className="display-4 text-center mt-3 text-info">Update Product</p>
                <form onSubmit={this.handleSubmit} className="border py-5 px-5 rounded shadow my-5">
                    <input
                        type="text"
                        className="form-control border-info my-2"
                        name="name"
                        placeholder="Enter a the name product"
                        onChange={this.handleChange}
                        autoComplete="off"
                        value={name}
                        required
                    />

                    <div className="input-group my-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text">$</span>
                        </div>
                        <input
                            type="number"
                            className="form-control border-info"
                            name="price"
                            placeholder="Enter the price of the product"
                            onChange={this.handleChange}
                            autoComplete="off"
                            value={price}
                            required
                        />
                    </div>

                    <input
                        type="text"
                        className="form-control border-info my-2"
                        name="image"
                        placeholder="Enter a the image product"
                        onChange={this.handleChange}
                        autoComplete="off"
                        value={image}
                        required
                    />

                    <input
                        type="text"
                        className="form-control border-info my-2"
                        name="size"
                        placeholder="Enter a the sizes product"
                        onChange={this.handleChange}
                        autoComplete="off"
                        value={size}
                        required
                    />

                    <div className="form-group my-2">
                        <textarea
                            placeholder="Enter description of the product"
                            className="form-control border-info"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            name="description"
                            onChange={this.handleChange}
                            required
                            value={description}
                        ></textarea>
                    </div>

                    <input
                        type="text"
                        className="form-control border-info my-2"
                        name="color"
                        placeholder="Enter the color product"
                        onChange={this.handleChange}
                        autoComplete="off"
                        value={color}
                        required
                    />

                    <input
                        type="number"
                        className="form-control border-info my-2"
                        name="quantity"
                        placeholder="Enter the quantity of the product"
                        onChange={this.handleChange}
                        autoComplete="off"
                        value={quantity}
                        required
                    />

                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div className="form-group my-4">
                                <label htmlFor="typeOfPerson">Choose for person</label>
                                <select
                                    className="form-control border-info"
                                    id="typeOfPerson"
                                    name="typeOfPerson"
                                    value={typeOfPerson}
                                    defaultValue={this.state.value}
                                    onChange={this.handleChange}
                                >
                                    <option></option>
                                    <option value="Man">Men</option>
                                    <option value="Women">Women</option>
                                    <option value="Kids">Kids</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12">
                            <div className="form-group my-4">
                                <label htmlFor="typeOfGoods">Choose type of product</label>
                                <select
                                    className="form-control border-info"
                                    id="typeOfGoods"
                                    value={typeOfGoods}
                                    name="typeOfGoods"
                                    defaultValue={this.state.value}
                                    onChange={this.handleChange}
                                >
                                    <option></option>
                                    <option value="Clothes">Clothes</option>
                                    <option value="Shoes">Shoes</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-12">
                            <div className="form-group my-4">
                                <label htmlFor="typeOfWhere">Choose part of the product</label>
                                <select
                                    className="form-control border-info"
                                    id="typeOfWhere"
                                    value={typeOfWhere}
                                    name="typeOfWhere"
                                    defaultValue={this.state.value}
                                    onChange={this.handleChange}
                                >
                                    <option></option>
                                    <option value="Top wear">Top Wear</option>
                                    <option value='Bottom wear'>Bottom Wear</option>
                                    <option value="Suit">Suit</option>
                                    <option value="Uniform">Uniform</option>
                                    <option value="Footer Wear">Footer Wear</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <button className="btn btn-outline-primary form-control" type="submit">Update Post</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        //this gives product 
        //becuase admin/editor can make one wrong 
        //it does not need to make change all of the data that is why 
        //i have choosed to fill all blanks the old one and it is gonna be to modify it 
        product: state.product.product,
        //this checks if the user is admin/editor 
        //if it is not it does not have permission to do that
        currentUser : state.currentUser
    }
}

//getProduct get one product that you need to edit
//updateProduct updates the data from the database

export default connect(mapStateToProps, {getProduct, updateProduct})(UpdateProduct);