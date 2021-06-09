import { Fragment, useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link,
} from "react-router-dom";

import Root from "./components/Root";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [name, setName] = useState("");

    const setAuth = (boolean) => {
        setIsAuthenticated(boolean);
    };

    const setRegister = (boolean) => {
        setIsRegister(boolean);
    };

    const CheckLogin = ({ isLogin }) => {
        if (isLogin) {
            return (
                <ul className="nav justify-content-end">
                    <li className="nav-item">{name}</li>
                </ul>
            );
        } else {
            return (
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link to={"/login"} className="nav-link text-white">
                            Login
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/register"} className="nav-link text-white">
                            SignUp
                        </Link>
                    </li>
                </ul>
            );
        }
    };

    async function isAuth() {
        try {
            const response = await fetch("/dashboard", {
                method: "GET",
            });

            const parseRes = await response.json();
            if (parseRes.auth === true) {
                setIsAuthenticated(true);

                setName(parseRes.username);
                setIsLogin(true);
            } else {
                setIsAuthenticated(false);
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        isAuth();
    });

    return (
        <Fragment>
            <Router>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div className="navbar-brand mb-0 h1">
                            <Link to={"/"} className="nav-link text-light">
                                Home
                            </Link>
                            <CheckLogin isLogin={isLogin} />
                        </div>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wrapper">
                                <Switch>
                                    <Route exact path="/" component={Root} />
                                    <Route
                                        exact
                                        path="/login"
                                        render={(props) =>
                                            !isAuthenticated ? (
                                                <Login
                                                    {...props}
                                                    setAuth={setAuth}
                                                />
                                            ) : (
                                                <Redirect to="/" />
                                            )
                                        }
                                    />
                                    <Route
                                        exact
                                        path="/register"
                                        render={(props) =>
                                            !isRegister ? (
                                                <Register
                                                    {...props}
                                                    setRegister={setRegister}
                                                />
                                            ) : (
                                                <Redirect to="/login" />
                                            )
                                        }
                                    />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </Fragment>
    );
}

export default App;
