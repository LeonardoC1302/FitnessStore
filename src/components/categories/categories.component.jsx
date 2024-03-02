import './categories.styles.scss'
import Category from '../category/category.component'

function Categories( { categories } ) {
    return (
        <div className='categories'>
            {categories.map((category) => (
                <Category key={category.id} category={category} />
            ))}
        </div>
    )

}

export default Categories