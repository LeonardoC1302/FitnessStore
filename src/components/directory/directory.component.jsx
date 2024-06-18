import './directory.styles.scss'
import DirectoryItem from '../directory-item/directory-item.component'

const categories = [
    {
        id: 1,
        title: 'Supplements',
        imageUrl: 'https://i.ibb.co/bPmd5DK/supplements.jpg',
        route: 'shop/supplements'
    },
    {
        id: 2,
        title: 'Weight',
        imageUrl: 'https://i.ibb.co/gvLDhPp/weight.jpg',
        route: 'shop/weight'
    },
    {
        id: 3,
        title: 'Wellness',
        imageUrl: 'https://i.ibb.co/0cRWDrp/wellness.jpg',
        route: 'shop/wellness'
    },
    {
        id: 4,
        title: 'Equipment',
        imageUrl: 'https://i.ibb.co/NyVCGYt/equipment.jpg',
        route: 'shop/equipment'
    },
    {
        id: 5,
        title: 'Accessories',
        imageUrl: 'https://i.ibb.co/4M81C57/clothes.jpg',
        route: 'shop/accessories'
    }
  ]

function Directory() {
    return (
        <div className='categories'>
            {categories.map((category) => (
                <DirectoryItem key={category.id} category={category} />
            ))}
        </div>
    )

}

export default Directory;