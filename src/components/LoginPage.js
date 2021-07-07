import React, { useEffect, useState } from 'react'
import { startLoginEP, startLoginGA, startSignupEP } from '../actions/auth'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const resetForm = () => {
        setEmail('')
        setPassword('')
    }

    const signupEventListener = async () => {
        try {
            await startSignupEP(email, password)
        } catch (error) {
            alert(error.message)
            resetForm()
        }
    }

    const loginGAEventListener = async () => {
        try {
            await startLoginGA()
        } catch (error) {
            alert(error.message)
            resetForm()
        }
    }

    const loginEPEventListener = async () => {
        try {
            await startLoginEP(email, password)
        } catch (error) {
            alert(error.message)
            resetForm()
        }
    }

    return (
        <div>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" onClick={loginEPEventListener}>Login</button>
            <button type="submit" onClick={signupEventListener}>Signup</button>
            <button onClick={loginGAEventListener}>Login with Google Account</button>
        </div>
    )
}

export default LoginPage