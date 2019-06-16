//This file creates a product and it a form that is only allowed admin and editor to see it

import React, { Component } from "react";
import { addProduct } from "../../store/action/product";
import { connect } from "react-redux";

class Form extends Component {
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

    //this posts anew product to the table
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addProduct(this.state);
        this.props.history.push("/product");
    }
    render() {
        const { name, price, image, size, color, quantity, typeOfGoods, typeOfWhere, typeOfPerson } = this.state;
        return (
            <div className="container">
                <p className="display-4 text-center mt-3 text-info">Create new Product</p>
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
                    <button className="btn btn-outline-primary form-control">Add Post</button>
                </form>
            </div>
        )
    }
}

//addProduct that takes data and insert table of database
export default connect(null, { addProduct })(Form);