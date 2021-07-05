import React, { useEffect, useReducer } from 'react'
import authReducer from '../reducers/auth'
import { onAuthStateChange } from '../../firebase/firebase.js'
import { login, logout } from '../actions/auth'
import SmartBagContext from '../context/SmartBagContext'
import AppRouter, { history } from '../routers/AppRouter'

const SmartBag = () => {
    const [auth, authDispatch] = useReducer(authReducer, {})

    useEffect(() => {
        const unSubscribe = onAuthStateChange((uid) => {
            if (uid) {
                authDispatch(login(uid))
                history.push('/dashboard')
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
        <SmartBagContext.Provider value={{ auth, authDispatch }}>
            <AppRouter />
        </SmartBagContext.Provider>
    )
}

export default SmartBag