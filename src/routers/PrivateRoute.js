import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import SmartBagContext from '../context/SmartBagContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { auth } = useContext(SmartBagContext)

    return (
        <Route {...rest} component={(props) => {
            return auth.uid ? (
                <div>
                    <Component {...props} />
                </div>
            ) : (
                <Redirect to="/" />
            )
        }} />
    )
}

export default PrivateRoute