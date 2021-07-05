import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import SmartBagContext from '../context/SmartBagContext'

const PublicRoute = ({ component: Component, ...rest }) => {

    const { auth } = useContext(SmartBagContext)

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