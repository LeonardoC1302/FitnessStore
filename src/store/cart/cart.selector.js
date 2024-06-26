import { createSelector } from "reselect";

const selectCartReducer = state => state.cart;

export const selectCartItems = createSelector([selectCartReducer], cart => cart.cartItems); 
export const selectIsCartHidden = createSelector([selectCartReducer], cart => cart.isHidden);

export const selectCartCount = createSelector([selectCartItems], cartItems => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0));

export const selectCartTotal = createSelector([selectCartItems], cartItems => cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0));
