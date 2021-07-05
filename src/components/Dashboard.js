import React from 'react'
import { Link } from 'react-router-dom'
import { startLogout } from '../actions/auth'

const Dashboard = () => {

    const signoutEventListener = () => {
        startLogout()
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={signoutEventListener}>Logout</button>
            <Link to="/ADDdata">Add Data to Database</Link>
        </div>
    )
}

export default Dashboard