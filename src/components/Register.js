import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

const Register = () => {
    return (
        <Fragment>
            <Header />
            <h1 className="text-center my-3">Register</h1>
            <form>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="form-control my-3"
                    style={{ width: "40%", margin: "0 auto" }}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="form-control my-3"
                    style={{ width: "40%", margin: "0 auto" }}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="form-control my-3"
                    style={{ width: "40%", margin: "0 auto" }}
                />
                <div className="text-center">
                    <button
                        className="btn btn-success"
                        style={{ width: "40%" }}
                    >
                        Submit
                    </button>
                </div>
            </form>
            <div className="text-center mt-3">
                <Link to="/login">Login</Link>
            </div>
        </Fragment>
    );
};

export default Register;
