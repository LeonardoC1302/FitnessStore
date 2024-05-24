import { useContext } from 'react';
import { CartDropdownContext } from '../../contexts/cart-dropdown.context';

import './product-card.styles.scss';
import Button from '../button/button.component';

function ProductCard({product}){
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartDropdownContext);    

    const addProductToCart = () => addItemToCart(product);
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <p className='name'>{name}</p>
                <p className='price'>${price}</p>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add to Cart</Button>
        </div>
    )
}

export default ProductCard;