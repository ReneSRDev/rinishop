import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { ShopContext } from '../../Context';
import OrderProducts from '../../Components/OrderProducts';
import Layout from '../../Components/Layout';
import './style.css'

function MyOrder() {
    const context = useContext(ShopContext);
    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    if (index === 'last') index = context.order?.length - 1;

    return (
        <Layout>
            <div className='order-container'>
                <div className='order-header'>
                    <div className='order-icon'>
                        <Link to='/my-orders'>
                            <ChevronLeftIcon />
                        </Link>
                    </div>
                    <span className='order-title'>My Order</span>
                </div>
                <div className='order-list'>
                    {
                        context.order?.[index]?.products.map(product => (
                            <OrderProducts 
                                key={product.id}
                                id={product.id}
                                image={product.images}
                                title={product.title}
                                price={product.price}
                                />
                                ))
                            }
                </div>
            </div>
        </Layout>
    )
}

export default MyOrder;