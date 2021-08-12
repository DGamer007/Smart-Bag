import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import PrivateRoute from '../routers/PrivateRoute'
import PublicRoute from '../routers/PublicRoute'
import PageNotFound from '../components/PageNotFound'
import Dashboard from '../components/Dashboard'
import Cart from '../components/Cart'
import LoginPage from '../components/LoginPage'
import AddData from '../components/AddData'
import Bag from '../components/Bag'

export const history = createBrowserHistory()

const AppRouter = () => {
    return (
        <Router history={history}>
            <Switch>
                <PublicRoute path="/" exact={true} component={LoginPage} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/mycart" component={Cart} />
                <PrivateRoute path="/mybag" component={Bag} />
                <PrivateRoute path="/add-data" component={AddData} />
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    )
}

export default AppRouter