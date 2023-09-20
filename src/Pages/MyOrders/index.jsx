import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context';
import Layout from '../../Components/Layout';
import OrdersProducts from '../../Components/OrderProducts';

function MyOrders() {
    const context = useContext(ShopContext);

    return (
        <Layout>
            <span>My Orders</span>
            <div>
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
        </Layout>
    )
}

export default MyOrders;