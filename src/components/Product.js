import React from 'react'
import { addProduct, removeProduct } from '../actions/cart'
import { connect } from 'react-redux'

const Product = ({ product, isCart, removeProduct, addProduct }) => {

    return (
        <div>
            <h3>{product.productName}</h3>
            <p>Amount: {product.amount}</p>
            {
                isCart ? (<button onClick={() => { removeProduct(product.id) }}>Remove</button>) : (<button onClick={() => { addProduct(product) }}>Add to Cart</button>)
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeProduct: (id) => { dispatch(removeProduct(id)) },
        addProduct: (product) => { dispatch(addProduct(product)) }
    }
}

export default connect(undefined, mapDispatchToProps)(Product)