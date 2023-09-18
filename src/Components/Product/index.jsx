import  { useContext } from 'react';
import  { ShopContext } from '../../Context';
import { PlusIcon } from '@heroicons/react/24/solid';
import './style.css';

const Product = (product) => {
    const context = useContext(ShopContext);

    const showProductDetail = (productDetail) => {
        context.openProductDetail();
        context.setProductToShow(productDetail);
    }

    return (
        <div
            className='product-container'
            onClick={() => showProductDetail(product.data)}
        >
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