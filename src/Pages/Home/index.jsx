import Layout from '../../Components/Layout';
import Product from '../../Components/Product'
import './style.css';

function Home() {
    return (
        <Layout>
            <div className='index-products'>
                <Product />
            </div>
        </Layout>
    )
}

export default Home;