import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../context/appContext'
import CartProduct from './CartProduct'

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
                    <CartProduct key={product.pid} product={{ id: product.pid, name: product.productName, amount: product.amount }} />
                )
            })}
        </div>
    )
}

export default Cart