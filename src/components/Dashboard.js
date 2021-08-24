import React, { useEffect, useState } from 'react'
import Product from './Product'
import { database } from '../../firebase/firebase'

const Dashboard = () => {

    const [defaults, setDefaults] = useState([])
    const [firstKey, setFirstKey] = useState('')
    const [lastKey, setLastKey] = useState('')

    const convertToArray = (data) => {
        const tempArray = []
        for (let product in data) {
            tempArray.push({
                id: product,
                amount: data[product]['amount'],
                productName: data[product]['productName']
            })
        }
        return tempArray
    }

    const setKeys = (data) => {
        const keys = Object.keys(data)

        setFirstKey(keys[0])
        setLastKey(keys[keys.length - 1])
    }

    const nextButtonListener = async () => {
        const nextData = await (await database.ref('/system').orderByKey().startAfter(lastKey).limitToFirst(10).once('value')).val()

        setKeys(nextData)
        setDefaults(convertToArray(nextData))
    }

    const previousButtonListener = async () => {
        const previousData = await (await database.ref('/system').orderByKey().endBefore(firstKey).limitToLast(10).once('value')).val()

        setKeys(previousData)
        setDefaults(convertToArray(previousData))
    }

    useEffect(() => {
        (async () => {
            const firstPage = await (await database.ref('/system').orderByKey().limitToFirst(10).once('value')).val()

            setKeys(firstPage)
            setDefaults(convertToArray(firstPage))
        })()
    }, [])

    return (
        <div>
            <h2>Dashboard</h2>
            {
                defaults.map(product => {
                    return (<Product key={product.id} product={{ id: product.id, amount: product.amount, name: product.productName }} />)
                }
                )}
            <button onClick={nextButtonListener} >Next</button>
            <button onClick={previousButtonListener}>Previous</button>
        </div>
    )
}

export default Dashboard