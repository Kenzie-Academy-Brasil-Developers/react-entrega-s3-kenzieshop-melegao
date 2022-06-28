import { ADD_CART, REMOVE_CART } from "./actionType"

const cartProductsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_CART:
            const { product } = action;
            return [...state, product];

        case REMOVE_CART:
            const { productRemove } = action;
            const newCart = state.filter((elem) => elem.id !== productRemove.id)
            return newCart

        default: return state
    }
}

export default cartProductsReducer