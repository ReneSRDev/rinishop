import { useContext } from 'react';
import { ShopContext } from '../../Context';
import Layout from '../../Components/Layout';
import Product from '../../Components/Product'
import './style.css';

function Home() {
    const context = useContext(ShopContext);

    console.log(context.products);

    return (
        <Layout>
            <div className='index-products'>
                {
                    context.products?.slice(0,10).map(product => (
                        <Product key={product.id} data={product} />
                    ))
                }
            </div>
        </Layout>
    )
}

export default Home;