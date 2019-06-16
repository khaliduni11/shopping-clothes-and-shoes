//This orders displays orders
//if there is search item is will be connect to the search
//if there is no search but user searched it show message
//if there is no error and no search the ordered product will be visible to the user

import React, { Component } from "react";
import { connect } from "react-redux";
import { getOrder, searchOrder } from "../../store/action/ordered";
import OderedItem from "./orderedItem";
import SearchOrder from "./searchOrdered";

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }

    componentDidMount() {
        this.props.getOrder();
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //search data from the database and server and that is ordered 
    handleSubmit = e => {
        e.preventDefault();
        this.props.searchOrder(this.state)
    }
    render() {
        const { ordered, search } = this.props;
        const oderItem = ordered.map(o => (
            <OderedItem
                id={o.orderedId}
                key={o.orderedId}
                username={o.username}
                name={o.name}
                currentDate={o.currentDate}
                price={o.price}
                image={o.image}
                size={o.size}
                color={o.color}
                description={o.description}
                quantity={o.quantity}
                country={o.country}
                state={o.state}
                city={o.city}
                phoneNumber={o.phoneNumber}
                street={o.street}
                houseNumber={o.houseNumber}
                deliver={o.delivered}
            />
        ))

        const searchOrder = search.map(s => (
            <SearchOrder
                id={s.orderedId}
                key={s.orderedId}
                username={s.username}
                name={s.name}
                currentDate={s.currentDate}
                price={s.price}
                image={s.image}
                size={s.size}
                color={s.color}
                description={s.description}
                quantity={s.quantity}
                country={s.country}
                state={s.state}
                city={s.city}
                phoneNumber={s.phoneNumber}
                street={s.street}
                houseNumber={s.houseNumber}
                d={s.delivered}
            />
        ))
        const { username } = this.state;
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="form-group mx-4 form-group my-5 " >
                    <div className="row mx-0">
                        <div className="col-lg-10 col-md-10 col-sm-11">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                name="username"
                                value={username}
                                onChange={this.handleChange}
                                placeholder="search username"
                                aria-label="username"
                                aria-describedby="basic-addon2"
                            />

                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-2">
                            <button className="btn btn-outline-success btn-block ml-4 mr-5" type="submit">Search</button>
                        </div>
                    </div>


                </form>


                {this.props.error.message && (
                    <div className="alert alert-danger text-center">{this.props.error.message}</div>
                )}

                {this.props.search.length > 0 ? (
                    <div className="row">
                        <div className="alert alert-warning text-center ml-5 mr-4 col justify-content-center">
                            here is the result of: <span className="font-weight-bold">{username}</span>
                        </div>
                        {searchOrder}
                    </div>
                ) : (
                        <div className="row">
                            {oderItem}
                        </div>
                    )}
            </div>
        )
    }
}

const mapStateToprops = (state) => {
    return {
        //This is used to call and map it to make it easy to read admin/editor
        ordered: state.ordered.ordered,
        //show search ordered if you need to make it search
        search: state.ordered.search,
        //displays if search data or other data problem exists
        error: state.ordered.error
    }
}

export default connect(mapStateToprops, { getOrder, searchOrder })(Orders);