import React, { Component } from "react";
import { connect } from "react-redux"
import { getUserAction } from "../../store/action/user";
import {adminRole, editorRole} from "../../store/action/user";
import { withRouter } from "react-router-dom"


class GetUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //This methods reads data from user table and it is only allowed admins
    //and it is allow to make an admin/editor for someone else
    handleSubmit(e) {
        e.preventDefault();
        this.props.getUserAction(this.state);

    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { email } = this.state;
        return (
            <div className="container bg-white">
                <form onSubmit={this.handleSubmit} className="input-group mt-4">
                    {this.props.error.message && (
                        <div className=" container alert alert-danger text-center">
                            {this.props.error.message}
                        </div>
                    )}
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        placeholder="Enter the email of the user"
                    />
                    <button className="input-group-append btn btn-outline-success">
                        Search
                    </button>
                </form>
                <div  className="row my-4">

                    {/* 
                        This shows admin all data needed for someone and he/she can see only
                        restricted data like name but no password and addcart can see him/her 
                    */}
                    {this.props.getUserReducer.user != null && this.props.getUserReducer.user.email && (
                        <div className="col-4 offset-4 card card-body bg-dark text-white"  style={{width: "20rem"}}>
                            Name:
                        <h6>
                                {this.props.getUserReducer.user.fname}  {this.props.getUserReducer.user.lname}
                            </h6>
                            Email:
                        <h6>{this.props.getUserReducer.user.email}</h6>
                            Username:
                        <h6>{this.props.getUserReducer.user.username}</h6>

                        Admin Role
                            
                        {this.props.getUserReducer.user.isAdmin > 0 && (
                                <input onClick={this.props.adminRole} type="checkbox" value="checkbox" defaultChecked="true" />
                            )}

                        {this.props.getUserReducer.user.isAdmin < 1 && (
                            <input onClick={this.props.adminRole} type="checkbox" value="checkbox" />
                        )}

                        Editor Role
                            
                        {this.props.getUserReducer.user.editor > 0 && (
                                <input onClick={this.props.editorRole} type="checkbox" value="checkbox" defaultChecked="true" />
                            )}

                        {this.props.getUserReducer.user.editor < 1 && (
                            <input onClick={this.props.editorRole} type="checkbox" value="checkbox" />
                        )}

                        </div>
                    )}
                </div>
            </div>

        )
    }
}

const mapStateToprops = state => {
    return {
        //If there is no user that matches email it shows admin that tells admin this is not exist
        error: state.error,
        //This allow you to read data from user reducer and table
        getUserReducer: state.getUserReducer
    }
}

export default withRouter(connect(mapStateToprops, { getUserAction, adminRole, editorRole })(GetUser));