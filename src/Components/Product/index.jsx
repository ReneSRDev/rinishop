import { PlusIcon } from '@heroicons/react/24/solid';
import './style.css';

const Product = (product) => {
    return (
        <div className='product-container'>
            <figure className='product-container--img'>
                <img className='product-img' src={product.data.images} alt={product.data.title} />
                <div className='product-icon'>
                    <PlusIcon />
                </div>
            </figure>
            <div className='product-container--info'>
                <span className='product-name'>{product.data.title}</span>
                <span className='product-price'>${product.data.price}</span>
            </div>
        </div>
    )
}

export default Product;