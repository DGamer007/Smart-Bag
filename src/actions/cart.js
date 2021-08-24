export const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        product
    }
}

export const removeProduct = (id) => {
    return {
        type: 'REMOVE_PRODUCT',
        id
    }
}

export const emptyCart = () => {
    return {
        type: 'EMPTY_CART'
    }
}