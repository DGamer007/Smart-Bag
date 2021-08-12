const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                count: state.count + 1,
                items: [...state.items, action.product]
            }

        case 'REMOVE_PRODUCT':
            return {
                count: state.count - 1,
                items: state.items.filter(product => {
                    return product.pid !== action.id
                })
            }

        default:
            return state
    }
}

export default cartReducer