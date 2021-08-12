import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import {authContext} from '../context/smartBagContext'

const PublicRoute = ({ component: Component, ...rest }) => {

    const { auth } = useContext(authContext)

    return (
        <Route {...rest} component={(props) => {
            return auth.uid ? (
                <Redirect to="/dashboard" />
            ) : (
                <div>
                    <Component {...props} />
                </div>
            )
        }} />
    )
}

export default PublicRoute