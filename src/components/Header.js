import React, { Fragment } from "react";

const Header = () => {
    return (
        <Fragment>
            <div className="bg-light p-5 rounded-lg m-3">
                <h1 className="display-4">Post App</h1>
                <p className="lead">
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                </p>
                <hr className="my-4" />
                <p>
                    It uses utility classes for typography and spacing to space
                    content out within the larger container.
                </p>
            </div>
        </Fragment>
    );
};

export default Header;
