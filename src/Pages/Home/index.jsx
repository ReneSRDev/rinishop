import { useContext } from 'react';
import { ShopContext } from '../../Context';
import Layout from '../../Components/Layout';
import Product from '../../Components/Product'
import ProductDetail from '../../Components/ProductDetail';
import ProductsCart from '../../Components/ProductsCart';
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

    const handleSelect = (event) => {
        context.setProductToView(parseInt(event.target.value));
        context.setFirstProductToView(0);
        context.setLastProductToView(context.productToView);
    }

    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    
    const productsToView = () => {
        
        if (index) {
            context.setSearchByCategory(index);
        } else {
            context.setSearchByCategory(null);
        }
        
        if (context.filteredProducts?.length > 0) {
            return (
                <div className='index-products'>
                    {
                        context.filteredProducts?.slice(context.firstProductToView,context.lastProductToView).map(product => (
                            <Product key={product.id} data={product} />
                        ))
                    }
                </div>
            )
        } else {
            return (
                <div className='index-noarticle'>
                    <span>We don&apos;t have anything article</span>
                </div>
            )
        }
    }

    return (
        <Layout>
            <div className='index-top'>
                <div className='top-info'>
                    <span className='first-line'>{context.firstProductToView + 1} of {context.lastProductToView} articles of</span>
                    <span className='second-line'>All</span>
                </div>
                <div className='index-select'>
                    <select
                        onChange={(event) => handleSelect(event)}
                        name="numberOfProductToView"
                    >
                        <option value={context.valueSelectTop}>{context.valueSelectTop}</option>
                        <option value={context.valueSelectTop * 2}>{context.valueSelectTop * 2}</option>
                        <option value={context.valueSelectTop * 3}>{context.valueSelectTop * 3}</option>
                        <option value={context.valueSelectTop * 4}>{context.valueSelectTop * 4}</option>
                    </select>
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
                <div className='index-search'>
                    <input
                        type="text"
                        placeholder='Search a product'
                        onChange={(event) => context.setSearchByTitle(event.target.value)}
                    />
                </div>
            </div>
            {productsToView()}
            <ProductDetail />
            <ProductsCart />
        </Layout>
    )
}

export default Home;