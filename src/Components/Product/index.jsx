import { PlusIcon } from '@heroicons/react/24/solid';
import './style.css';

const Product = () => {
    return (
        <div className='product-container'>
            <figure className='product-container--img'>
                <img className='product-img' src='https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_400/ncom/en_US/switch/site-design-update/oled-model-promo' alt='Nintendo Switch Oled' />
                <div className='product-icon'>
                    <PlusIcon />
                </div>
            </figure>
            <div className='product-container--info'>
                <span className='product-name'>Nintendo Switch Oled</span>
                <span className='product-price'>$4900.00</span>
            </div>
        </div>
    )
}

export default Product;