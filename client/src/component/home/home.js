import React, { Component } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Footer from "../footer/footer";


class HomePage extends Component {
    render() {
        return (
            <div>
                {/* jumbtron */}
                <div className="jumbtron bg-danger">
                    <div className="container py-4  text-center">
                        <div className="text-white p-3">
                            <h1 className="display-3 mt-3">Welcome To Our Market</h1>
                            <hr className="my-4" />
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur veritatis nemo similique repellendus, illo deleniti! Qui, cum ipsam fugiat officia eveniet corporis praesentium eius commodi inventore numquam natus non incidunt doloremque nam et? Nostrum sequi asperiores eligendi vel sapiente vero.</p>
                            <Link className="btn btn-outline-light btn-lg" to="/product">Product</Link>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="row  mt-4 mb-5">
                        <div className=" col-lg-6 col-md-12 mb-2">
                            <img className="rounded mw-100 h-auto" src="https://images.unsplash.com/photo-1550702307-51b05f8e8431?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        </div>

                        <div className="col-lg-6 col-md-12 pt-3">
                            <h3 className="text-muted text-center">For Man</h3>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ipsam cupiditate possimus dicta quod quis dolorem neque nam quam eveniet unde blanditiis ducimus esse adipisci rerum reiciendis eos, earum illo libero, quidem porro nemo architecto nulla beatae? Voluptas et facere nisi adipisci quis harum ullam laudantium dicta quo ratione iusto obcaecati, minus quaerat eligendi molestiae eveniet officia nemo, nam earum blanditiis repellendus sint nulla aliquid. Porro obcaecati quisquam praesentium veritatis. Voluptatibus ullam aperiam perferendis, similique illo, iure iusto facere quis aliquid adipisci sed eos non? Sunt dolor consequuntur nostrum animi officia voluptatem mollitia molestiae amet assumenda ea saepe rem aperiam laborum soluta, consequatur totam a repudiandae recusandae vel ratione minima, sapiente aspernatur atque. Impedit sunt, accusantium nobis repudiandae consequatur eligendi iure excepturi sequi non omnis vitae eius, recusandae fuga ratione porro illum perferendis assumenda dolorum ut ipsam quis architecto consequuntur quidem inventore. Voluptatem quod eius eveniet similique facere recusandae quos.</p>
                            </div>
                    </div>

                    <div className="row  mt-4 mb-5">

                        <div className="col-lg-6 col-md-12 pt-3 mb-2">
                            <h3 className="text-muted text-center">For Women</h3>
                            <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim optio repudiandae accusamus ratione quasi dolor, at aperiam totam tempora maxime. Rem quam cum ad sapiente repellendus doloribus quae at debitis saepe. Fugit soluta saepe necessitatibus veniam consequuntur odit aperiam at cum itaque nostrum, totam deserunt excepturi libero nobis asperiores similique.</p>    
                        </div>

                        <div className=" col-lg-6 col-md-12 mb-2">
                            <img className="rounded mw-100 h-auto" src="https://images.unsplash.com/photo-1516644731290-cdde1b8e8d69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" />
                        </div>
                    </div>

                    <div className="row  mt-4 mb-5">
                        <div className=" col-lg-6 col-md-12 mb-2">
                            <img className="rounded mw-100 h-auto" src="https://images.unsplash.com/photo-1458546450666-ebb1e605853f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=748&q=80" alt="" />
                        </div>
                        <div className="col-lg-6 col-md-12 pt-3 mb-2">
                            <h3 className="text-muted text-center">For Kids</h3>
                            <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim optio repudiandae accusamus ratione quasi dolor, at aperiam totam tempora maxime. Rem quam cum ad sapiente repellendus doloribus quae at debitis saepe. Fugit soluta saepe necessitatibus veniam consequuntur odit aperiam at cum itaque nostrum, totam deserunt excepturi libero nobis asperiores similique.</p>
                            </div>
                    </div>

                </div>

            <Footer />
            </div>
        )
    }
}

export default HomePage;