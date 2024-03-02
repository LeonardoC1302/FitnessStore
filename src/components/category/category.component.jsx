import './category.styles.scss'

function Category({ category }){
    const { title, imageUrl } = category
    return (
        <div className='category'>
            <div className='category__image' style={{ backgroundImage: `url(${imageUrl})` }}/>
                <div className='category__body'>
                    <h2>{ title }</h2>
                    <p>Shop Now</p>
                </div>
        </div>
    )

}

export default Category