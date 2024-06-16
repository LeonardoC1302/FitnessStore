import './directory.styles.scss'
import DirectoryItem from '../directory-item/directory-item.component'

function Directory( { categories } ) {
    return (
        <div className='categories'>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </div>
    )

}

export default Directory;