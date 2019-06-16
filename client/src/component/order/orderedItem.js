//This takes data from orders and displays one by one item
import React, { Component } from "react";
import Moment from "react-moment";
import { deliveredProduct } from "../../store/action/ordered";
import { connect } from "react-redux";

class OrderedItem extends Component {

    //this user to remark if specific order have delivered
    handleDelivered = e => {
        const { id } = this.props;
        this.props.deliveredProduct(id);
    }
    render() {

        //this data comes from orders
        const { name, currentDate, price, image, size, color, quantity, country, state, city,
            phoneNumber, street, houseNumber, username, deliver } = this.props;
        return (
            <div className="col-lg-12 col-md-6 col-sm-12 mb-2 pl-5 py-3 text-center">
                <div className="card">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <img src={image} style={{ height: "230px" }} alt={image} className="card-img-top" />
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <span className="font-weight-bold ml-5">Item Detail:</span>
                            <hr className="my-2" />

                            <div className="card-body">
                                <div className="card-title ">
                                    Name: <span className="font-weight-bold">{name}</span>
                                </div>
                                <p className="text-muted">
                                    price: $<span className="font-weight-bold">{price}</span>
                                    <br />
                                    Quantity: <span className="font-weight-bold">{quantity}</span>
                                    <br />
                                    Size: <span className="font-weight-bold">{size}</span>
                                    <br />
                                    Color: <span className="font-weight-bold">{color}</span></p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                            <span className="font-weight-bold ml-5">contacts:</span>
                            <hr className="my-2" />
                            Number:
                            <br />
                            <span className="font-weight-bold text-muted">{phoneNumber}</span>
                            <br />
                            Username:
                            <br />
                            <span className="font-weight-bold text-muted">{username}</span>
                            <br />
                            {this.props.ordered}
                            {deliver > 0 ? (
                                <button className="btn btn-success btn-sm mt-3" disabled>Delivered already</button>
                            ) : (
                                    <div>
                                        <a onClick={this.handleDelivered} href="/ordered"  className="btn btn-warning btn-sm mt-3"> <span onClick={this.handleDelivered}>Deliver Now</span> </a>
                                    </div>
                                )}
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 text-center">
                            <span className="font-weight-bold ml-5">Address:</span>
                            <hr className="my-2" />

                            <p className="text-muted">Country: <span className="lead font-weight-bold">{country}</span>,
                            <br />
                                state: <span className="lead font-weight-bold">{state}</span>
                                <br />
                                City: <span className="lead font-weight-bold">{city}</span>
                                <br />
                                street: <span className="lead font-weight-bold">{street}</span>
                                <br />
                                houseNumber: <span className="lead font-weight-bold">{houseNumber}</span>,
                            </p>
                        </div>


                    </div>  {/* row in the card */}

                    <Moment className="card-footer text-muted text-center" format="DD-MMM-YYYY">
                        {currentDate}
                    </Moment>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        //this checks if delivered is true
        //if delivered is equal 1 is delivered
        //if delivered is equal 0 it is not delivered
        ordered: state.ordered.ordered.delivered
    }
}

export default connect(mapStateToProps, { deliveredProduct })(OrderedItem);