import React from 'react'
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'
import { history } from '../routers/AppRouter'

const Header = ({ cart, startLogout }) => {

    return (
        <div className="header">
            <div className="header__container">
                <div className="header__container__left">
                    <h1 className="header__title" onClick={() => { history.push('/dashboard') }}>Smart Bag</h1>
                </div>
                <div className="header__container__right">
                    <div className="items">
                        <a onClick={() => { history.push('/mybag') }}>My Bag</a>

                        <div className="header__cart__container">
                            <img onClick={() => { history.push('/mycart') }} src="/images/shopping-cart.png"></img>
                            <p>( {cart.count} )</p>
                        </div>

                        <a onClick={startLogout}>Logout</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => { dispatch(startLogout()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)