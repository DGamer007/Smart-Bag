import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import SmartBagContext from '../context/SmartBagContext'
import Header from '../components/Header'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { auth } = useContext(SmartBagContext)

    return (
        <Route {...rest} component={(props) => {
            return auth.uid ? (
                <div>
                    <Header />
                    <Component {...props} />
                </div>
            ) : (
                <Redirect to="/" />
            )
        }} />
    )
}

export default PrivateRoute