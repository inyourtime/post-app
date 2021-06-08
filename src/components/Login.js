import React, { Fragment } from 'react'

const Login = () => {
    return (
        <Fragment>
            <h1 className="text-center my-3">Login</h1>
            <form>
                <input type="email" name="email" placeholder="email" className="form-control my-3" />
                <input type="password" name="password" placeholder="password" className="form-control my-3" />
                <button className="btn btn-success col-12">Login</button>
            </form>
        </Fragment>
    )
}

export default Login
