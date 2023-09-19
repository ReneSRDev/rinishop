import { XMarkIcon } from '@heroicons/react/24/outline';
import './style.css';

const OrderProducts = props => {
    const {id, image, title, price, handleDelete} = props;
    let renderXMarkIcon;

    if (handleDelete) {
        renderXMarkIcon = <div className='products-cart-icon'><XMarkIcon onClick={() => handleDelete(id)} /></div>
    }

    return (
        <div className='products-cart--element'>
            <div className='products-cart-left'>
                <figure className='products-cart-img'>
                    <img src={image} alt={title} />
                </figure>
                <span className='products-cart-title'>{title}</span>
            </div>
            <div className='products-cart-right'>
                <span className='products-cart-price'>${price}.00</span>
                {renderXMarkIcon}
            </div>
        </div>
    )
}

export default OrderProducts;