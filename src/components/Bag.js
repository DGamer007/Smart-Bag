import React, { useEffect, useState } from 'react'
import Product from './Product'

const Bag = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        setItems([
            {
                pid: 'something1',
                productName: 'Something 1',
                amount: 100

            },
            {
                pid: 'something2',
                productName: 'Something 2',
                amount: 200
            },
            {
                pid: 'something3',
                productName: 'Something 3',
                amount: 300
            }
        ])
    }, [])

    return (
        <div>
            <h1>Suggestions</h1>
            {items.map((item) => {
                return <Product key={item.pid} product={{ amount: item.amount, name: item.productName }} />
            })}
        </div>
    )
}

export default Bag