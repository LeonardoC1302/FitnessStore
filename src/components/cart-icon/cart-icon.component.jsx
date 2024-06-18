import { useContext } from 'react';
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';
import ShoppingSvg from '../../assets/shopping-bag.svg'
import { CartDropdownContext } from '../../contexts/cart-dropdown.context';

function CartIcon() {
    const { isHidden, setHidden, cartCount } = useContext(CartDropdownContext);

    const toggleIsHidden = () => setHidden(!isHidden);
    return (
        <CartIconContainer onClick={toggleIsHidden}>
            <ShoppingIcon src={ShoppingSvg} alt='Shopping Icon' className="shopping-icon" />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;