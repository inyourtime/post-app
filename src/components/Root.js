import React, { Fragment, useState } from "react";
import {Redirect} from 'react-router-dom'

import Header from "./Header";
import Content from "./Content";

const Dashboard = () => {
    const [isLogout, setIsLogout] = useState(false);

    async function onClickLogout() {
        try {
            const response = await fetch("/auth/logout", {
                method: "GET",
            });

            const parseRes = await response.json();
            console.log(parseRes);
            setIsLogout(true);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <div className="container">
                <Header />

                <div className="row">
                    <div className="col">
                        <Content />
                    </div>
                    <div className="col">
                        <Content />
                    </div>
                    <div className="col">
                        <Content />
                    </div>
                </div>
                {/* <Content /> */}
            </div>
            <button onClick={onClickLogout} className="btn btn-primary">
                logout
            </button>
        </Fragment>
    );
};

export default Dashboard;
