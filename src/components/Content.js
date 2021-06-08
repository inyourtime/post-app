import React, { Fragment } from "react";

const Content = () => {
    return (
        <Fragment>
            <div className="container" style={{marginTop: "50px"}}>
                <div className="card" style={{ width: "20rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            Card subtitle
                        </h6>
                        <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.dfgdgdfgdgdfgd
                            sdfsdfsfsfsdfsfs
                        </p>
                        {/* <a class="card-link">
                        Card link
                    </a>
                    <a class="card-link">
                        Another link
                    </a> */}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Content;
