import './product-card.styles.scss';
import Button from '../button/button.component';

function ProductCard({product}){
    const {name, price, imageUrl} = product;
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <p className='name'>{name}</p>
                <p className='price'>${price}</p>
            </div>
            <Button buttonType='inverted'>Add to Cart</Button>
        </div>
    )
}

export default ProductCard;