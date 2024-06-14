import { createContext, useState, useEffect } from "react";

export const CartDropdownContext = createContext({
    isHidden: true,
    setHidden: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
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
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = { isHidden, setHidden, addItemToCart, cartItems, cartCount };

    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
}