import React, { useEffect, useState } from 'react'
import Product from './Product'
import { connect } from 'react-redux'

const Bag = ({ auth }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://smart-bag-001.herokuapp.com/smart_bag/${auth.uid}`)
            const data = await res.json()
            setProducts(data)
        })()
    }, [])

    return (
        <div>
            <h1>Products</h1>
            {products.map((product) => {
                return <Product key={product.pid} product={product} isCart={false} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Bag)