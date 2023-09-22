import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context';
import Layout from '../../Components/Layout';
import OrdersProducts from '../../Components/OrdersProducts';
import './style.css'

function MyOrders() {
    const context = useContext(ShopContext);

    return (
        <Layout>
            <div className='myOrders-container'>
                <div className='myOrders-header'>
                    <span className='myOrders-title'>My Orders</span>
                </div>
                <div className='myOrders-list'>
                    {
                        context.order.map((order, index) => (
                            <Link
                                key={index}
                                to={`/my-orders/${index}`}
                            >
                                <OrdersProducts
                                    date={order.date}
                                    totalProducts={order.totalProducts}
                                    totalPrice={order.totalPrice}
                                >
                                </OrdersProducts>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default MyOrders;