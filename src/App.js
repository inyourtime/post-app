import { Fragment } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import Root from "./components/Root";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <Fragment>
            <Router>
                <div className="container">
                    <Switch>
                        <Route exact path="/" render={Root}></Route>
                        <Route
                            exact
                            path="/dashboard"
                            render={Dashboard}
                        ></Route>
                    </Switch>
                </div>
            </Router>
        </Fragment>
    );
}

export default App;
