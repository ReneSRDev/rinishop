import { useContext } from "react"
import { NavLink } from 'react-router-dom'
import { ShopContext } from "../../Context"
import { BuildingStorefrontIcon, Bars3Icon, ShoppingBagIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import './style.css'

const Navbar = () => {
    const context = useContext(ShopContext);

    const activeStyle = 'menu-active';
    const cartCounter = context.productsCart.length;

    const flagCartCounter = (cartCounter) => {
        if (cartCounter > 0) {
            return 'order-counter';
        } else {
            return 'hidden'
        }
    }

    return (
        <nav className='navbar'>
            <div className="navbar-container">
                <div className='header-logo'>
                    <NavLink to='/'>
                        <BuildingStorefrontIcon
                            className='logo-icon'
                            />
                        <span className='logo-text'>RiniShop</span>
                    </NavLink>
                </div>
                <div className={`header-menu ${!context.isNavMenuOpen ? 'menu-inactive': ''}`}>
                    <XMarkIcon
                        className='menu-icon'
                        onClick={() => context.closeNavMenu()}
                    />
                    <ul className='menu-list'>
                        <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => isActive ? activeStyle : ''}
                            onClick={() => context.closeNavMenu()}
                        >
                            All
                        </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/clothes'
                                className={({ isActive }) => isActive ? activeStyle : ''}
                                onClick={() => context.closeNavMenu()}
                            >
                                Clothes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/shoes'
                                className={({ isActive }) => isActive ? activeStyle : ''}
                                onClick={() => context.closeNavMenu()}
                            >
                                Shoes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/furniture'
                                className={({ isActive }) => isActive ? activeStyle : ''}
                                onClick={() => context.closeNavMenu()}
                            >
                                Furniture
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/others'
                                className={({ isActive }) => isActive ? activeStyle : ''}
                                onClick={() => context.closeNavMenu()}
                            >
                                Others
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='header-user'>
                    <UserIcon className='user-icon' />
                    <span className='user-info'>My Orders</span>
                </div>
                <div
                    className='header-order'
                    onClick={() => context.openProductsCart()}
                >
                    <span className={flagCartCounter(cartCounter)}>{cartCounter}</span>
                    <ShoppingBagIcon className='order-icon' />
                </div>
                <button
                    className='header-button-menu'
                    onClick={() => context.openNavMenu()}
                >
                    <span className='sr-only'>Open Main Menu</span>
                    <Bars3Icon className='bars-icon' />
                </button>
            </div>
        </nav>
    )
}

export default Navbar;