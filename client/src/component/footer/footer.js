import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="input-group border-outline-warning pt-4">
                                <input type="text" className="form-control" placeholder="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-light" type="button">Button</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="d-flex align-items-end pt-5 mb-0 justify-content-end">
                                <div className="text-white font-weight-bold">
                                    copyright &#169; Khalid Hussein
                                    Email: khaliduni11@gmail.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;