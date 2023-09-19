import { useContext } from 'react';
import { ShopContext } from '../../Context';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline'
import './style.css';

const ProductDetail = () => {
    const context = useContext(ShopContext);

    return (
        <div
            className={`${context.isProductDetailOpen ? 'product-detail' : 'hidden'}`}
        >
            <div
                className='product-detail--icon'
                onClick={() => context.closeProductDetail()}
            >
                <XMarkIcon />
            </div>
            <div className='product-detail--container'>
                <span className='product-detail--header'>Product Details</span>
                <figure className='product-detail--img'>
                    <img src={context.productToShow.images} alt={context.productToShow.title} />
                </figure>
                <span className='product-detail--title'>{context.productToShow.title}</span>
                <span className='product-detail--price'><span>$</span>{context.productToShow.price}.<span>00</span></span>
                <span className='product-detail--description'>{context.productToShow.description}</span>
                <button className='product-detail--button'>
                    <PlusIcon />
                    <span>Add to the Cart</span>
                </button>
            </div>
        </div>
    )
}

export default ProductDetail