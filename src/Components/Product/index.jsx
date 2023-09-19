import { useContext } from 'react';
import { ShopContext } from '../../Context';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import './style.css';

const Product = (product) => {
    const context = useContext(ShopContext);

    const showProductDetail = (productDetail) => {
        context.closeProductsCart();
        context.openProductDetail();
        context.setProductToShow(productDetail);
    }
    const addProductCart = (event, productData) => {
        event.stopPropagation();
        context.closeProductDetail();
        context.openProductsCart();
        context.setProductsCart([...context.productsCart, productData]);
    }

    const renderIcon = (id) => {
        const isInCart = context.productsCart.filter(product => product.id === id).length > 0;

        if (isInCart) {
            return (
                <div className='product-icon product-added'>
                    <CheckIcon />
                </div>
            )
        } else {
            return (
                <div
                    className='product-icon'
                    onClick={(event) => addProductCart(event, product.data)}
                >
                    <PlusIcon />
                </div>
            )
        }
    }

    return (
        <div
            className='product-container'
            onClick={() => showProductDetail(product.data)}
        >
            <figure className='product-container--img'>
                <img className='product-img' src={product.data.images} alt={product.data.title} />
                { renderIcon(product.data.id) }
            </figure>
            <div className='product-container--info'>
                <span className='product-name'>{product.data.title}</span>
                <span className='product-price'>${product.data.price}</span>
            </div>
        </div>
    )
}

export default Product;