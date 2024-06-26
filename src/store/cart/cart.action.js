import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsCartHidden = (boolean) => createAction(CART_ACTION_TYPES.SET_IS_CART_HIDDEN, boolean);

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) => (cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }

    return cartItems.map((cartItem) => (cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
}


export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const deleteItemFromCart = (cartItems, productToDelete) => {
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}