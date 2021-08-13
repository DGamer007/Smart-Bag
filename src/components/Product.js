import React, { useContext, useEffect } from 'react'
import { cartContext } from '../context/appContext'
import { addProduct } from '../actions/cart'

const Product = ({ product }) => {

    const { cartDispatch } = useContext(cartContext)

    return (
        <div>
            <h3>{product.name}</h3>
            <p>Amount: {product.amount}</p>
            <button onClick={() => { cartDispatch(addProduct(product)) }}>Add to Cart</button>
        </div>
    )
}

export default Product