import { createContext, useState, useEffect } from "react";

export const CartDropdownContext = createContext({
    isHidden: true,
    setHidden: () => {},
});

export const CartDropdownProvider = ({children}) => {
    const [isHidden, setHidden] = useState(true);
    const value = { isHidden, setHidden };

    return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
}