import { useContext } from 'react';
import { ShopContext } from '../../Context';
import Layout from '../../Components/Layout';
import Product from '../../Components/Product'
import { ArrowSmallRightIcon, ArrowSmallLeftIcon } from '@heroicons/react/24/outline';
import './style.css';

function Home() {
    const context = useContext(ShopContext);

    const disableButton = (statusArrow) => {
        if (statusArrow === false) {
            return 'disabled-button';
        } else {
            return '';
        }
    }

    return (
        <Layout>
            <div className='index-top'>
                <div className='top-info'>
                    <span className='first-line'>{context.firstProductToView + 1} of {context.lastProductToView} articles of</span>
                    <span className='second-line'>All</span>
                </div>
                <div className='top-control'>
                    <button
                        className={disableButton(context.leftArrow)}
                        onClick={() => context.subtractProductsToView()}
                    >
                        <ArrowSmallLeftIcon/>
                    </button>
                    <button
                        className={disableButton(context.rightArrow)}
                        onClick={() => context.addProductsToView()}
                    >
                        <ArrowSmallRightIcon
                        />
                    </button>
                </div>
            </div>
            <div className='index-products'>
                {
                    context.products?.slice(context.firstProductToView,context.lastProductToView).map(product => (
                        <Product key={product.id} data={product} />
                    ))
                }
            </div>
        </Layout>
    )
}

export default Home;