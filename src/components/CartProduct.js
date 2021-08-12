import React, { useContext } from 'react'
import { cartContext } from '../context/smartBagContext'
import { removeProduct } from '../actions/cart'

const CartProduct = ({ product }) => {

    const { cartDispatch } = useContext(cartContext)

    return (
        <div>
            <h3>{product.name}</h3>
            <p>Amount: {product.amount}</p>
            <button onClick={() => { cartDispatch(removeProduct(product.id)) }}>Remove</button>
        </div>
    )
}

export default CartProduct