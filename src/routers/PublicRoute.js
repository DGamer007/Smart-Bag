import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PublicRoute = ({ auth, component: Component, ...rest }) => {

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

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(PublicRoute)