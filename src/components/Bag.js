import React, { useEffect, useState } from 'react'
import Product from './Product'
import { connect } from 'react-redux'

const Bag = ({ auth }) => {
    const [products, setProducts] = useState([])
    const [signal, setSignal] = useState(true)

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://smart-bag-001.herokuapp.com/smart_bag/${auth.uid}`)
            if (res.status === 204) {
                setSignal(false)
                return
            }
            const data = await res.json()
            setProducts(data)
        })()
    }, [])

    return (
        <div>
            <h1>Products</h1>
            {
                signal ? products.map((product) => {
                    return <Product key={product.id} product={product} isCart={false} />
                }) : (<p>There is not enought data in your purchase history.</p>)
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