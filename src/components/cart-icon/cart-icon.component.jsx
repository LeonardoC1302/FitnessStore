import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartHidden } from '../../store/cart/cart.selector';
import { setIsCartHidden } from '../../store/cart/cart.action';

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';
import ShoppingSvg from '../../assets/shopping-bag.svg'


function CartIcon() {
    const dispatch = useDispatch();

    const cartCount = useSelector(selectCartCount);
    const isCartHidden = useSelector(selectIsCartHidden);

    const toggleIsHidden = () => dispatch(setIsCartHidden(!isCartHidden));
    
    return (
        <CartIconContainer onClick={toggleIsHidden}>
            <ShoppingIcon src={ShoppingSvg} alt='Shopping Icon' className="shopping-icon" />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;