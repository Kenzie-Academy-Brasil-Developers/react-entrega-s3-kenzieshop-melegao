import { ADD_CART, REMOVE_CART } from "./actionType";

export const addCart = (product) => ({
    type: ADD_CART,
    product,
});

export const removeCart = (productRemove) => ({
    type: REMOVE_CART,
    productRemove,
});