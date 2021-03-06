import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Product from './Product'
import { database } from '../../firebase/firebase'
import { emptyCart } from '../actions/cart'
import moment from 'moment'
import { history } from '../routers/AppRouter'

const Cart = ({ cart, auth, emptyCart }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        document.title = 'Smart Bag | Cart';
    }, [])

    useEffect(() => {
        setProducts(cart.items)
    }, [cart])

    const buyNowListener = async () => {
        const date = moment().format('YYYY-MM-DD')
        const data = cart.items

        for (let i in data) {
            await database.ref(`/users/${auth.uid}/history/${date}/${data[i].id}`).set({
                productName: data[i].productName,
                amount: data[i].amount,
                category: data[i].category,
                subCategory: data[i].subCategory
            })
        }

        alert(`${cart.count} item${cart.count !== 1 ? 's have' : ' has'} been purchased !`)

        emptyCart()
        history.push('/dashboard')
    }

    return (
        <div className="cart component">
            <div className="cart_container component-container">
                <div className="cart__title component-title">
                    <h3>Cart</h3>
                </div>
                <div className="cart__product__list">
                    {
                        products.length === 0 ? (
                            <div className="no__content">
                                <p>Cart is empty! Add some Products first.</p>
                            </div>
                        ) : (
                            <div className="product__list">
                                {
                                    products.map(product => {
                                        return (
                                            <Product key={product.id} product={product} isCart={true} />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                </div>
                {
                    products.length !== 0 && (
                        <div className="cart__buy">
                            <button className="custom__button" onClick={buyNowListener}>Buy now</button>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        emptyCart: () => { dispatch(emptyCart()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)