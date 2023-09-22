import { useContext } from 'react';
import { ShopContext } from '../../Context';
import { CheckIcon, PlusIcon, XMarkIcon } from '@heroicons/react/24/outline'
import './style.css';

const ProductDetail = () => {
    const context = useContext(ShopContext);

    const addProductCart = (event, productData) => {
        event.stopPropagation();
        context.closeProductDetail();

        if (context.widthScreen >= 1028) {
            context.openProductsCart();
        }
        
        context.setProductsCart([...context.productsCart, productData]);
    }

    const renderButton = (id) => {
        const isInCart = context.productsCart.filter(product => product.id === id).length > 0;

        if (!isInCart) {
            return (
                <button
                    className='product-detail--button'
                    onClick={() => addProductCart(event, context.productToShow)}    
                >
                    <PlusIcon />
                    <span>Add to the Cart</span>
                </button>
            )
        } else {
            return (
                <button className='product-detail--button product-added'>
                    <CheckIcon />
                    <span>Added to the Cart</span>
                </button>
            )
        }
    }

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
                {renderButton(context.productToShow.id)}
            </div>
        </div>
    )
}

export default ProductDetail