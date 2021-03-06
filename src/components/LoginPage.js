import React, { useState, useEffect } from 'react'
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

    useEffect(() => {
        document.title = 'Smart Bag | Login';
    }, [])

    return (
        <div className="login">
            <div className="login__container">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="custom__button" type="submit" onClick={loginEPEventListener}>Login</button>
                <button className="custom__button" type="submit" onClick={signupEventListener}>Signup</button>
                <button className="custom__button" onClick={loginGAEventListener}>Login with Google Account</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLoginEP: (email, password) => { dispatch(startLoginEP(email, password)) },
        startLoginGA: () => { dispatch(startLoginGA()) },
        startSignupEP: (email, password) => { dispatch(startSignupEP(email, password)) }
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage)