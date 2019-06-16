//Ordered form this form fills addresses and phone number

import React, { Component } from "react";
import { connect } from "react-redux";
import { addOrder } from "../../store/action/ordered"
import { deleteAddcart } from "../../store/action/addcart"


class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "",
            state: "",
            city: "",
            phoneNumber: "",
            street: "",
            houseNumber: '',
            username: `${this.props.username}`
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //this submits if data and adds to database and server
    handleSubmit = (e) => {
        e.preventDefault();
        const { id } = this.props.match.params;
        this.props.addOrder(id, this.state)
        this.props.deleteAddcart(id);
        this.props.history.push('/addcart');
    }

    render() {
        const { country, state, city, houseNumber, phoneNumber, street, username} = this.state;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="form-group my-5 mx-5">
                    <input
                        type="text"
                        className="form-control border-info my-2"
                        name="country"
                        placeholder="Enter a the name product"
                        onChange={this.handleChange}
                        autoComplete="off"
                        value={country}
                        required
                    />

                    <input
                        className="form-control mb-2"
                        placeholder="Enter State"
                        type="text"
                        name="state"
                        value={state}
                        onChange={this.handleChange}
                        autoComplete="off"
                        required
                    />

                    <input
                        className="form-control mb-2"
                        placeholder="Enter City"
                        type="text"
                        name="city"
                        value={city}
                        onChange={this.handleChange}
                        autoComplete="off"
                        required
                    />

                    <input
                        className="form-control mb-2"
                        placeholder="Enter Street"
                        type="text"
                        name="street"
                        value={street}
                        onChange={this.handleChange}
                        autoComplete="off"
                        required
                    />

                    <input
                        className="form-control mb-2"
                        placeholder="Enter House Number"
                        type="number"
                        name="houseNumber"
                        value={houseNumber}
                        onChange={this.handleChange}
                        autoComplete="off"
                        required
                    />

                    <input
                        className="form-control mb-2"
                        placeholder="Enter Phone Number"
                        type="number"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={this.handleChange}
                        autoComplete="off"
                        required
                    />

                    <input
                        className="form-control mb-2"
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                        autoComplete="off"
                        required
                        disabled
                    />

                    <button className="btn btn-outline-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //it shows client's username to ensure that the client is him/her
        username: state.currentUser.user.username
    }
}

export default connect(mapStateToProps, { addOrder, deleteAddcart })(OrderForm);