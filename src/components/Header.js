import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogout } from '../actions/auth'

const Header = ({ cart, startLogout }) => {

    return (
        <div>
            <h1>Smart Bag</h1>
            <h3><Link to='/mycart'>Cart:</Link>{cart.count}</h3>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/mybag'>My Bag</Link>
            <Link to='/add-data'>Add Data</Link>
            <button onClick={startLogout}>Logout</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => { dispatch(startLogout()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)