import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../context/appContext'
import Product from './Product'

const Cart = () => {

    const [products, setProducts] = useState([])
    const { cart } = useContext(cartContext)

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

export default Cart