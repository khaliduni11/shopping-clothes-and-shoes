//This file is for signup

import React, { Component } from 'react';
import { connect } from "react-redux";
import { signup } from "../../store/action/auth";
import {withRouter} from "react-router-dom";


class SignUpUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            username: '',
            email: "",
            password: '',
        }
    }
    handleSubmit = e => {
        e.preventDefault();

        //signup takes data from state and passes to server to check it and if username and email is unique
        //server and database will store this data
        this.props.signup(this.state)

    }

    //if user makes sign up it directs to sign in for secuirity purpose
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser.isAuthenticated) {
            this.props.history.push('/signin');
        }
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="container mt-5">
                <form className="form-group" onSubmit={this.handleSubmit} >

                    {/* 
                    This shows the client if user who need to make sign up is making wrong thing
                    //eg: taking an existing email or username
                    */}
                    {this.props.error.message && (
                        <div className="justify-content-center alert alert-danger">{this.props.error.message}</div>
                    )}
                    <input
                        className="form-control mb-2"
                        type="text"
                        name="fname"
                        autoComplete="off"
                        placeholder="First Name"
                        onChange={this.handleChange}
                        value={this.fname}
                        required
                    />

                    <input
                        className="form-control mb-2"
                        type="text"
                        name="lname"
                        autoComplete="off"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                        value={this.lname}
                        required
                    />

                    <input
                        className="form-control mb-2"
                        type="text"
                        name="username"
                        autoComplete="off"
                        placeholder="username"
                        onChange={this.handleChange}
                        value={this.username}
                        required
                    />

                    <input
                        className="form-control mb-2"
                        type="text"
                        name="email"
                        autoComplete="off"
                        placeholder="Email"
                        onChange={this.handleChange}
                        value={this.email}
                        required
                    />

                    <input
                        className="form-control mb-2"
                        type="password"
                        name="password"
                        autoComplete="off"
                        placeholder="Password"
                        onChange={this.handleChange}
                        required
                    />
                    <button className="btn btn-primary btn-block">Sign Up</button>
                </form>
            </div>
        )
    }
}

const mapStateToprops = (state) => {
    return {
        //Error shows user if email/username is exists
        error: state.error,
        //This uses alot of thing but in here it is used if user signed up and connect log in 
        currentUser: state.currentUser
    }
}

export default withRouter( connect(mapStateToprops, { signup })(SignUpUser));