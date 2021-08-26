import React, { useEffect, useState } from 'react'
import Product from './Product'
import { connect } from 'react-redux'

const Bag = ({ auth }) => {
    const [products, setProducts] = useState([])
    const [signal, setSignal] = useState(true)

    useEffect(() => {
        document.title = 'Smart Bag | My Bag';
        (async () => {
            const res = await fetch(`https://smart-bag-001.herokuapp.com/smart_bag/${auth.uid}`)
            if (res.status === 204) {
                setSignal(false)
                return
            }
            const data = await res.json()
            setProducts(data)
            console.log(data)
        })()
    }, [])

    return (
        <div className="bag component">
            <div className="bag__container component-container">
                <div className="bag__title component-title">
                    <h3>Products</h3>
                </div>
                <div className="bag__product__list">
                    {
                        signal ? (
                            <div className="product__list">
                                {
                                    products.map((product) => {
                                        return (<Product key={product.id} product={product} isCart={false} />)
                                    })
                                }
                            </div>
                        ) : (
                            <div className="no__content">
                                <p>There is not enought data in your purchase history.</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Bag)