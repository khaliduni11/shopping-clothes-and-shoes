//This file is log in file 
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../store/action/auth"


class LoginUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        //This is used to pass user's data from form 
        //and passes to server and the server will decide if it is wrong or right
        this.props.loginUser(this.state);
    }

    //if user makes sign in it good for the go back where he was before instead of the home page
    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser.isAuthenticated) {
            //this allows user to go back where he/she was before signing in
            this.props.history.goBack();
        }
    }

    componentWillReceiveProps() {
        if (this.props.currentUser.isAuthenticated) {
            this.props.history.push("/");
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="container">

                <form onSubmit={this.handleSubmit} style={style} className="form-group">
                    {this.props.error.message && (
                        <div className="justify-content-center alert alert-danger">{this.props.error.message}</div>
                    )}

                    {this.props.addcartError.message && (
                        <div className="alert alert-danger text-center lead font-weight-bold">
                            {this.props.addcartError.message}
                        </div>
                    )}
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
                    <button className="btn btn-primary btn-block">Sign In</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        //we use current user to check if someone made logged in or not 
        currentUser: state.currentUser,
        //This error points us if  the password or email is wrong or right
        error: state.error,
        //this addcart error allows client to go and logged in if the user has not made any log in
        addcartError: state.addcarts.error
    }
}


//This is place the item located as css 
const style = {
    marginTop: '13%'
}


//loginUser needs to pass in data and that data will send to the server to check.

export default withRouter(connect(mapStateToProps, { loginUser })(LoginUser));