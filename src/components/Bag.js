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
            {
                // Change product_id label when Smit push next time !
                products.map((product) => {
                    return <Product key={product.product_id} product={{ id: product.product_id, ...product }} isCart={false} />
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Bag)