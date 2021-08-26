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
                productName: data[product]['productName'],
                category: data[product]['category'],
                subCategory: data[product]['subCategory']
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
        document.title = 'Smart Bag | Home';
        (async () => {
            const firstPage = await (await database.ref('/system').orderByKey().limitToFirst(10).once('value')).val()

            setKeys(firstPage)
            setDefaults(convertToArray(firstPage))
        })()
    }, [])

    return (
        <div className="dashboard component">
            <div className="dashboard__container component-container">
                <div className="dashboard__title component-title">
                    <h3>Shop</h3>
                </div>
                <div className="dashboard__product__list">
                    <div className="product__list">
                        {
                            defaults.map(product => {
                                return (<Product key={product.id} product={product} isCart={false} />)
                            })
                        }
                    </div>
                </div>
                <div className="dashboard__pagination">
                    <button className="custom__button" onClick={previousButtonListener}>Previous</button>
                    <button className="custom__button" onClick={nextButtonListener}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard