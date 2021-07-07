import React from 'react'
import { Link } from 'react-router-dom'
import { startLogout } from '../actions/auth'

const Header = () => {
    const signoutEventListener = async () => {
        try {
            await startLogout()
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div>
            <h1>Smart Bag</h1>
            <Link to='/mybag'>My Bag</Link>
            <Link to='/add-data'>Add Data</Link>
            <button onClick={signoutEventListener}>Logout</button>
        </div>
    )
}

export default Header