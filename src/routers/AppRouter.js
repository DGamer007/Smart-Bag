import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import PrivateRoute from '../routers/PrivateRoute'
import PublicRoute from '../routers/PublicRoute'
import PageNotFound from '../components/PageNotFound'
import Dashboard from '../components/Dashboard'
import LoginPage from '../components/LoginPage'
import AddData from '../components/AddData'

export const history = createBrowserHistory()

const AppRouter = () => {
    return (
        <Router history={history}>
            <Switch>
                <PublicRoute path="/" exact={true} component={LoginPage} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/add-data" component={AddData} />
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    )
}

export default AppRouter