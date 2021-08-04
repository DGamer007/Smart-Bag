import React, { useContext, useEffect, useState } from 'react'
import Product from './Product'
import SmartBagContext from '../context/SmartBagContext'

const Bag = () => {

    const [items, setItems] = useState([])
    const { auth } = useContext(SmartBagContext)

    useEffect(async () => {
        const res = await fetch(`https://smart-bag-001.herokuapp.com/smart_bag/DMmUhoDqN0NRcUAHymUtvybHAk62`)
        const data = await res.json()
        setItems(data)
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