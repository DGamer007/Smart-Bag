import React from 'react'
import { addProduct, removeProduct } from '../actions/cart'
import { connect } from 'react-redux'

const Product = ({ product, isCart, removeProduct, addProduct }) => {

    return (
        <div className="product">
            <p className="product__name">{product.productName}</p>
            <p className="product__amount">
                <span>Amount: </span>{product.amount}
            </p>
            {
                isCart && (
                    <p className="product__quantity">
                        <span>Quantity: </span>{product.quantity}
                    </p>)
            }
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