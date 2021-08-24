import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import cartReducer from '../reducers/cart'
import authReducer from '../reducers/auth'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            cart: cartReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}