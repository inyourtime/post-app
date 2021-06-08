import React, { Fragment } from "react";

import Header from "./Header";
import Content from "./Content";

const Dashboard = () => {
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
        </Fragment>
    );
};

export default Dashboard;
