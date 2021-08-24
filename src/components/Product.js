import React, { useContext, useEffect } from 'react'
import { cartContext } from '../context/appContext'
import { addProduct, removeProduct } from '../actions/cart'

const Product = ({ product, isCart }) => {

    const { cartDispatch } = useContext(cartContext)

    return (
        <div>
            <h3>{product.name}</h3>
            <p>Amount: {product.amount}</p>
            {
                isCart ?
                    (<button onClick={() => { cartDispatch(removeProduct(product.id)) }}>Remove</button>) : (<button onClick={() => { cartDispatch(addProduct(product)) }}>Add to Cart</button>)
            }
        </div>
    )
}

export default Product