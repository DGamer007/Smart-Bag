import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'
import { connect } from 'react-redux'

const PrivateRoute = ({ auth, component: Component, ...rest }) => {

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

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(PrivateRoute)