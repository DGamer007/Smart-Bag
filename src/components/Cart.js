import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Product from './Product'

const Cart = ({ cart }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(cart.items)
    }, [cart])

    return (
        <div>
            {products.map(product => {
                return (
                    <Product key={product.id} product={{ id: product.id, name: product.productName, amount: product.amount }} isCart={true} />
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart)