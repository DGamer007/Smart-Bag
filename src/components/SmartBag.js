import React, { useEffect, useReducer } from 'react'
import authReducer from '../reducers/auth'
import { onAuthStateChange } from '../../firebase/firebase.js'
import { login, logout } from '../actions/auth'
import { authContext as AuthContext } from '../context/appContext'
import AppRouter, { history } from '../routers/AppRouter'

const SmartBag = () => {
    const [auth, authDispatch] = useReducer(authReducer, {})

    useEffect(() => {
        const unSubscribe = onAuthStateChange((uid) => {
            if (uid) {
                authDispatch(login(uid))
                if (history.location.pathname === '/') {
                    history.push('/dashboard')
                }
            } else {
                authDispatch(logout())
                history.push('/')
            }
        })

        return () => {
            unSubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={{ auth, authDispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}

export default SmartBag