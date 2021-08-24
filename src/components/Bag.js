import React, { useEffect, useState } from 'react'
import Product from './Product'
import { connect } from 'react-redux'

const Bag = ({ auth }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://smart-bag-001.herokuapp.com/smart_bag/${auth.uid}`)
            const data = await res.json()
            setItems(data)
        })()
    }, [])

    return (
        <div>
            <h1>Products</h1>
            {items.map((item) => {
                return <Product key={item.pid} product={{ id: item.pid, amount: item.amount, name: item.productName }} />
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