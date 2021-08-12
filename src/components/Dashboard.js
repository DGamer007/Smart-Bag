import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../context/smartBagContext'
import Product from './Product'

const Dashboard = () => {

    const [defaults, setDefaults] = useState([])

    useEffect(async () => {
        const reqObject = {
            method: 'GET',
            headers: { "Accept": "application/json" }
        }
        const res = await fetch('http://localhost:3000/defaultData', reqObject)
        const data = await res.json()

        setDefaults(data)
    }, [])

    return (
        <div>
            <h2>Dashboard</h2>
            {defaults.map(product => {
                return (<Product key={product.pid} product={{ id: product.pid, amount: product.amount, name: product.productName }} />)
            }
            )}
        </div>
    )
}

export default Dashboard