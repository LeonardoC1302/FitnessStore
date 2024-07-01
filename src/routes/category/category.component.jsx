import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import './category.styles.scss';
import Spinner from '../../components/spinner/spiner.component';

import { selectCategoriesMap, selectIsCategoriesLoading } from '../../store/categories/category.selector';

function Category(){
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectIsCategoriesLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <Fragment>
            <h2 className='category-title'>{category}</h2>
            {
                isLoading ? <Spinner /> : <div className='category-container'>
                {
                    products && products.map((product) => <ProductCard key={product.id} product={product} />)
                }
                </div>
            }
            
        </Fragment>
    )
};

export default Category;