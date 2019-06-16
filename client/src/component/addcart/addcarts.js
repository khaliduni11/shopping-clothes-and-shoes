//This is addcart that we can display this all in here and tell and directs to addcart item // 


import React, { Component } from "react";
import { connect } from 'react-redux';
import { getAddcarts } from "../../store/action/addcart"
import AddcartItem from "./addCartItem"

class Addcarts extends Component {
    componentDidMount() {
        this.props.getAddcarts();
    }
    render() {
        //This reads data from reducer as props
        const { addcarts, error, messageOrdered } = this.props;
        //this map irritates to make piece by piece every single addcart
        const addcart = addcarts.map(p => (
            <AddcartItem
                key={p.addcartId}
                name={p.name}
                image={p.image}
                color={p.color}
                size={p.size}
                description={p.description}
                quantity={p.quantity}
                price={p.price}
                id={p.addcartId}

            />
        ))
        return (
            <div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 border rounded py-4 px-4 shadow my-2">
                            {error.error && (
                                <p className="alert alert-danger text-center lead">
                                    {error.error.message}
                                </p>
                            )}

                            {/* 
                            This shows user that he/she ordered data and shows it name 
                            */}
                            {messageOrdered.message.length > 0 && (
                                <p className="alert alert-warning text-center lead">
                                    We recieved the order: <span className="Strong text-uppercase">{messageOrdered.message}</span> from you and we going to server you as soon.
                                </p>
                            )}


                            <div className="row">
                                {addcart}
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
        //This is used to iritate data and make it simply to read client that 
        //after map this data pass to the addcartItem
        addcarts: state.addcarts.addcarts,
        //This is used client to show and motivate message that says and makes advertisment
        error: state.addcarts.error,
        //This is ordered show message that user gets when he/she demands or ordered item/items
        messageOrdered: state.ordered
    }
}

//getAddcarts allow client to get all addcarts that he/she derves to see

export default connect(mapStateToProps, { getAddcarts })(Addcarts);