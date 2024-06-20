import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

export const CartDropdownContext = createContext({
    isHidden: true,
    setHidden: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
    removeItemFromCart: () => {},
    deleteItemFromCart: () => {},
    cartTotal: 0
});

const CART_ACTIONS = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_HIDDEN: 'SET_IS_CART_HIDDEN'
}

const INITIAL_STATE = {
    isHidden: true,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

const cartDropdownReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTIONS.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTIONS.SET_IS_CART_HIDDEN:
            return {
                ...state,
                isHidden: payload
            }
        default:
            return new Error(`Unhandled ${type} in cartDropdownReducer`);
    }
}

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

export const CartDropdownProvider = ({children}) => {
    const [ { cartItems, isHidden, cartCount, cartTotal }, dispatch ] = useReducer(cartDropdownReducer, INITIAL_STATE);

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

        dispatch(createAction(CART_ACTIONS.SET_CART_ITEMS, { 
                cartItems: newCartItems, 
                cartCount: newCartCount, 
                cartTotal: newCartTotal 
            }));
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemsReducer(newCartItems);
    }

    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove);
        updateCartItemsReducer(newCartItems);
    }

    const deleteItemFromCart = (productToDelete) => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
        updateCartItemsReducer(newCartItems);
    }

    const setHidden = (bool) => {
        dispatch(createAction(CART_ACTIONS.SET_IS_CART_HIDDEN, bool));
    }

    const value = { isHidden, setHidden, addItemToCart, cartItems, cartCount, removeItemFromCart, deleteItemFromCart, cartTotal };

    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
}