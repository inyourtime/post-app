import React, { Fragment } from "react";

import Login from "./Login";
import Register from "./Register";
import Header from './Header'

const Root = () => {
    return (
        <Fragment>
            <div className="container">
                <Header/>
                <div class="row justify-content-evenly">
                    <div class="col-4">
                        <Login />
                    </div>
                    <div class="col-4">
                        <Register />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Root;
