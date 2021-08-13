import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import LoanApplication from "./components/LoanApplication";
import AccountCreation from './components/AccountCreation'
import NewTransaction from './components/NewTransaction'
import MyApplications from "./components/MyApplications";
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'

const createRoutes = () => (
    <Router>
        <Header />
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

            <Route exact path="/apply">
                <LoanApplication />
            </Route>

            <Route exact path="/manage">
                <MyApplications />
            </Route>

            <Route exact path ="/account-creation">
                <AccountCreation />
            </Route>

            <Route exact path ="/new-transaction">
                <NewTransaction />
            </Route>

            <Route exact path="/about">
                <About />
            </Route>

            <Route path="*">
                <NoMatch />
            </Route>

        </Switch>
        <Footer />
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