// This is navbar//

import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/action/auth"
import { searchProduct } from "../../store/action/product"


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }
    onLogout(e) {
        e.preventDefault();
        this.props.logout();
        this.props.history.push("/");
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //it allows to search data from server and database and this searches products 
    handleSubmit = e => {
        e.preventDefault();
        this.props.searchProduct(this.state);
        this.props.history.push(`/search/${this.state.search}`)
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <i className="fas fa-store-alt"></i>
                </Link>

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/product" className="nav-link">Product</a>
                    </li>
                </ul>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {this.props.currentUser.isAuthenticated ? (
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item" >
                                <Link to="/" className="nav-link" onClick={this.onLogout.bind(this)}>
                                    Sign Out
                                </Link>
                            </li>

                            {this.props.currentUser.user.isAdmin > 0 && (

                                <li className="nav-item" >
                                    <Link className="nav-link" to="/user">
                                        Users
                                    </Link>
                                </li>
                            )}

                            {this.props.currentUser.user.editor > 0 || this.props.currentUser.user.isAdmin > 0 ? (
                                <ul className="navbar-nav">
                                    <li className="nav-item" >
                                        <Link className="nav-link" to="/addProductform">
                                            Post
                                    </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/ordered" className="nav-link">
                                            Order
                                    </Link>
                                    </li>
                                </ul>


                            ) : (
                                    <li></li>
                                )}

                        </ul>

                    ) : (
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item" >
                                    <Link className="nav-link" to="/signup">
                                        Sign up
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/signin">
                                        Sign In
                                    </a>
                                </li>
                            </ul>
                        )}
                    {this.props.currentUser.isAuthenticated && (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/addcart" className="nav-link">
                                    Addcart
                            </Link>
                            </li>
                        </ul>
                    )}


                    <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            name="search"
                            value={this.state.search}
                            onChange={this.handleChange}
                            placeholder="Search"
                            aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        //This controls all navbars//
        //if user logged in the user can only see sign out
        //if user isnot logged in or signed up the user will see it sign in and sign up
        //if user is admin will 'user' to modify user to make he/she admin or editor
        //if user is editor/ admin will see post that user can post products
        currentUser: state.currentUser
    }
}

export default withRouter(connect(mapStateToProps, { logout, searchProduct })(Navbar));