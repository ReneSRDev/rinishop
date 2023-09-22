import { ChevronRightIcon } from "@heroicons/react/24/outline";
import './style.css'

const OrdersProducts = props => {
    const { date, totalPrice, totalProducts } = props;

    return (
        <div className="orders-container">
            <div className="orders-container--left">
                <span className="orders-container--date">{date}</span>
                <span className="orders-container--articles">{totalProducts} articles</span>
            </div>
            <div className="orders-container--right">
                <span className="orders-container--price">${totalPrice}.00</span>
                <div className="orders-container--icon">
                    <ChevronRightIcon></ChevronRightIcon>
                </div>
            </div>
        </div>
    )
}

export default OrdersProducts;