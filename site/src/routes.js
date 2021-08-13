import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'

const createRoutes = () => (
    <Router>
        <Switch>
            <Route exact path ="/home">
                <Home />
            </Route>

            <Route exact path="/login">
                <Login />
            </Route>

            <Route exact path="/">
                <Redirect to="/home"/>
            </Route>

            <Route path="*">
                <NoMatch />
            </Route>
        </Switch>
    </Router>
);

function NoMatch() {
    let location = useLocation();

    return (
    <div>
        <h3>
        No match for <code>{location.pathname}</code>
        </h3>
    </div>
    );
}

export default createRoutes