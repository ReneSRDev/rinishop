import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context';
import OrderProducts from '../OrderProducts';
import { getDate, totalPrice } from '../utils';
import { ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import './style.css';

const ProductsCart = () => {
    const context = useContext(ShopContext);

    const handleDelete = (id) => {
        const productsKeep = context.productsCart.filter(product => product.id != id);
        context.setProductsCart(productsKeep);
    }

    const handleBuy = () => {
        const orderToAdd = {
            date: getDate(),
            products: context.productsCart,
            totalProducts: context.productsCart.length,
            totalPrice: totalPrice(context.productsCart)
        };

        context.setOrder([...context.order, orderToAdd]);
        context.setProductsCart([]);
        context.closeProductsCart();
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
                <Link to='my-orders/last'>
                    <button
                        className='products-cart--button'
                        onClick={() => handleBuy()}
                    >
                        <ShoppingBagIcon />
                        <span>Buy</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ProductsCart