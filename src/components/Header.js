import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { startLogout } from '../actions/auth'
import { cartContext } from '../context/smartBagContext'

const Header = () => {
    const signoutEventListener = async () => {
        try {
            await startLogout()
        } catch (error) {
            alert(error.message)
        }
    }

    const { cart, cartDispatch } = useContext(cartContext)

    return (
        <div>
            <h1>Smart Bag</h1>
            <h3><Link to='/mycart'>Cart:</Link>{cart.count}</h3>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/mybag'>My Bag</Link>
            <Link to='/add-data'>Add Data</Link>
            <button onClick={signoutEventListener}>Logout</button>
        </div>
    )
}

export default Header