import React, { useContext, useState } from 'react'
import { startLoginEP, startLoginGA, startSignupEP } from '../actions/auth'
import SmartBagContext from '../context/SmartBagContext'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signupEventListener = () => {
        startSignupEP(email, password)
    }

    const loginGAEventListener = () => {
        startLoginGA()
    }

    const loginEPEventListener = () => {
        startLoginEP(email, password)
    }

    return (
        <div>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" onClick={loginEPEventListener}>Login</button>
            <button type="submit" onClick={signupEventListener}>Signup</button>
            <button onClick={loginGAEventListener}>Login with Google Account</button>
        </div>
    )
}

export default LoginPage