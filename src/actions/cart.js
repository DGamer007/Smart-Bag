export const addProduct = ({ id, name, amount }) => {
    return {
        type: 'ADD_PRODUCT',
        product: {
            pid: id,
            amount,
            productName: name
        }

    }
}

export const removeProduct = (id) => {
    return {
        type: 'REMOVE_PRODUCT',
        id
    }
}