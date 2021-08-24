import React, { useEffect } from 'react'
import { onAuthStateChange } from '../../firebase/firebase.js'
import { login, logout } from '../actions/auth'
import AppRouter, { history } from '../routers/AppRouter'
import configureStore from '../store/configureStore'
import { Provider } from 'react-redux'

const SmartBag = () => {
    const store = configureStore()

    useEffect(() => {
        const unSubscribe = onAuthStateChange((uid) => {
            if (uid) {
                store.dispatch(login(uid))
                if (history.location.pathname === '/') {
                    history.push('/dashboard')
                }
            } else {
                store.dispatch(logout())
                history.push('/')
            }
        })

        return () => {
            unSubscribe()
        }
    }, [])

    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}

export default SmartBag