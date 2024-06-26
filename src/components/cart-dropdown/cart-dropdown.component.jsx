import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectCartItems } from '../../store/cart/cart.selector';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';

function CartDropdown() {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const checkoutHandler = () => {
        navigate('/checkout');
    }
    return(
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map(item => (
                        <CartItem key={item.id} cartItem={item} />
                    ))) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button onClick={checkoutHandler}>Go to checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;