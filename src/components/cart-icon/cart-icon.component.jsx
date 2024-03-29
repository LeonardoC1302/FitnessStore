import { useContext } from 'react';
import ShoppingIcon from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';
import { CartDropdownContext } from '../../contexts/cart-dropdown.context';

function CartIcon() {
    const { isHidden, setHidden } = useContext(CartDropdownContext);

    const toggleIsHidden = () => setHidden(!isHidden);
    return (
        <div className='cart-icon-container' onClick={toggleIsHidden}>
            <img src={ShoppingIcon} alt='Shopping Icon' className="shopping-icon" />
            <p className='item-count'>0</p>
        </div>
    )
};

export default CartIcon;