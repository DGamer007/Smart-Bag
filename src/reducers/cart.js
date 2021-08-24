const initState = {
    count: 0,
    items: []
}

const cartReducer = (state = initState, action) => {
    let new_items = []
    switch (action.type) {
        case 'ADD_PRODUCT':
            let signal = true
            new_items = state.items.map(product => {
                if (product.id === action.product.id) {
                    signal = false
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product
                }
            })
            if (signal) {
                new_items.push({ ...action.product, quantity: 1 })
            }

            return {
                count: state.count + 1,
                items: new_items
            }

        case 'REMOVE_PRODUCT':
            new_items = []
            state.items.forEach(product => {
                if (product.id === action.id && product.quantity !== 1) {
                    new_items.push({
                        ...product,
                        quantity: product.quantity - 1
                    })
                } else if (product.id !== action.id) {
                    new_items.push(product)
                }
            })
            return {
                count: state.count - 1,
                items: new_items
            }

        default:
            return state
    }
}

export default cartReducer