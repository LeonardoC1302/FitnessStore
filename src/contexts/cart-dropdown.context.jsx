import { createContext, useState, useEffect } from "react";

export const CartDropdownContext = createContext({
    isHidden: true,
    setHidden: () => {},
    cartItems: [],
    addItemToCart: () => {},
});

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) => (cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

export const CartDropdownProvider = ({children}) => {
    const [isHidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = { isHidden, setHidden, addItemToCart, cartItems };

    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
}