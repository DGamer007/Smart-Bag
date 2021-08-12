import React, { useContext, useEffect, useReducer } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { authContext, cartContext as CartContext } from '../context/smartBagContext'
import cartReducer from '../reducers/cart'
import Header from '../components/Header'


const PrivateRoute = ({ component: Component, ...rest }) => {
    const { auth } = useContext(authContext)

    const [cart, cartDispatch] = useReducer(cartReducer, { count: 0, items: [] })

    return (
        <Route {...rest} component={(props) => {
            return auth.uid ? (
                <CartContext.Provider value={{ cart, cartDispatch }}>
                    <Header />
                    <Component {...props} />
                </CartContext.Provider>
            ) : (
                <Redirect to="/" />
            )
        }} />
    )
}

export default PrivateRoute