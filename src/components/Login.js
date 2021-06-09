import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";

const Login = ({ setAuth }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = {
                email: email,
                password: password,
            };
            const response = await fetch("/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const parseRes = await response.json();
            // console.log(parseRes)
            setAuth(true);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <Header />
            <Fragment>
                <h1 className="text-center my-3">Login</h1>
                <form onSubmit={onSubmitForm}>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="form-control my-3"
                        style={{ width: "40%", margin: "0 auto" }}
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="form-control my-3"
                        style={{ width: "40%", margin: "0 auto" }}
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <div className="text-center">
                        <button
                            className="btn btn-success"
                            style={{ width: "40%" }}
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="text-center mt-3">
                    <Link to="/register">Register</Link>
                </div>
            </Fragment>
        </Fragment>
    );
};

export default Login;
