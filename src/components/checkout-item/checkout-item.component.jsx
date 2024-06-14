import './checkout-item.styles.scss';
import { CartDropdownContext } from '../../contexts/cart-dropdown.context';
import { useContext } from 'react';

function CheckoutItem({cartItem}){
    const {name, quantity, price, imageUrl } = cartItem;
    const { deleteItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartDropdownContext);

    const deleteItemHandler = () => deleteItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={deleteItemHandler}>&#10005;</div>
        </div>
    )
};

export default CheckoutItem;