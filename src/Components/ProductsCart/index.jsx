import { useContext } from 'react';
import { ShopContext } from '../../Context';
import OrderProducts from '../OrderProducts';
import { totalPrice } from '../utils';
import { ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import './style.css';

const ProductsCart = () => {
    const context = useContext(ShopContext);

    const handleDelete = (id) => {
        const productsKeep = context.productsCart.filter(product => product.id != id);
        context.setProductsCart(productsKeep);
    }

    return (
        <div
            className={`${context.isProductsCartOpen ? 'products-cart' : 'hidden'}`}
        >
            <div
                className='products-cart--icon'
                onClick={() => context.closeProductsCart()}
            >
                <XMarkIcon />
            </div>
            <div className='products-cart--container'>
                <span className='products-cart--header'>Products Cart</span>
                <div className='products-cart--list'>
                    {
                        context.productsCart.map(product => (
                            <OrderProducts
                                key={product.id}
                                id={product.id}
                                image={product.images}
                                title={product.title}
                                price={product.price}
                                handleDelete={handleDelete}
                            />
                        ))
                    }
                </div>
                <div className='products-cart--total'>
                    <span className='products-cart--total-text'>Total:</span>
                    <span className='products-cart--total-number'>${totalPrice(context.productsCart)}.00</span>
                </div>
                <button className='products-cart--button'>
                    <ShoppingBagIcon />
                    <span>Buy</span>
                </button>
            </div>
        </div>
    )
}

export default ProductsCart