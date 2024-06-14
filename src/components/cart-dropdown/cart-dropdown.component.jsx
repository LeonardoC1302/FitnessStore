import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartDropdownContext } from '../../contexts/cart-dropdown.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

function CartDropdown() {
    const { cartItems } = useContext(CartDropdownContext);
    const navigate = useNavigate();

    const checkoutHandler = () => {
        navigate('/checkout');
    }
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button onClick={checkoutHandler}>Go to checkout</Button>
        </div>
    )
}

export default CartDropdown;