import { CART_ACTION_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
    isHidden: true,
    cartItems: []
}

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_HIDDEN:
            return {
                ...state,
                isHidden: payload
            }
        default:
            return state;
    }
}