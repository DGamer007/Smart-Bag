import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../context/appContext'
import Product from './Product'

const Bag = () => {
    const [items, setItems] = useState([])
    const { auth } = useContext(authContext)

    useEffect(async () => {
        const res = await fetch(`https://smart-bag-001.herokuapp.com/smart_bag/${auth.uid}`)
        const data = await res.json()
        setItems(data)
    }, [])

    return (
        <div>
            <h1>Suggestions</h1>
            {items.map((item) => {
                return <Product key={item.pid} product={{ id: item.pid, amount: item.amount, name: item.productName }} />
            })}
        </div>
    )
}

export default Bag