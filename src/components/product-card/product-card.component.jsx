import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';

import { selectCartItems } from '../../store/cart/cart.selector';

import './product-card.styles.scss';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

function ProductCard({product}){
    const {name, price, imageUrl} = product;
    const cartItems = useSelector(selectCartItems);

    const dispatch = useDispatch(); 

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <p className='name'>{name}</p>
                <p className='price'>${price}</p>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to Cart</Button>
        </div>
    )
}

export default ProductCard;