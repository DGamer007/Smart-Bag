import React, { useState } from 'react'
import { connect } from 'react-redux'
import { startLoginEP, startLoginGA, startSignupEP } from '../actions/auth'

const LoginPage = ({ startLoginEP, startLoginGA, startSignupEP }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const resetForm = () => {
        setEmail('')
        setPassword('')
    }

    const signupEventListener = () => {
        try {
            startSignupEP(email, password)
        } catch (error) {
            alert(error.message)
            resetForm()
        }
    }

    const loginGAEventListener = () => {
        try {
            startLoginGA()
        } catch (error) {
            alert(error.message)
            resetForm()
        }
    }

    const loginEPEventListener = () => {
        try {
            startLoginEP(email, password)
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

const mapDispatchToProps = (dispatch) => {
    return {
        startLoginEP: (email, pass) => { dispatch(startLoginEP()) },
        startLoginGA: () => { dispatch(startLoginGA()) },
        startSignupEP: (email, pass) => { dispatch(startSignupEP(email, pass)) }
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage)