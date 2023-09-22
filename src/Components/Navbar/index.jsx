import { useContext } from "react"
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from "../../Context"
import { BuildingStorefrontIcon, Bars3Icon, ShoppingBagIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import './style.css'

const Navbar = () => {
    const context = useContext(ShopContext);

    const activeStyle = 'menu-active';
    const cartCounter = context.productsCart.length;

    const flagCartCounter = (cartCounter) => {
        if (cartCounter > 0) {
            return (
                <div
                    className='header-order cursor-pointer'
                    onClick={() => context.openProductsCart()}
                >
                    <span className='order-counter'>{cartCounter}</span>
                    <ShoppingBagIcon className='header-order--icon' />
                </div>
            )
        } else {
            return (
                <div
                    className='header-order'
                >
                    <span className='hidden'>{cartCounter}</span>
                    <ShoppingBagIcon className='header-order-icon' />
                </div>
            )
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
                    <Link to='/my-orders'>
                        <UserIcon className='user-icon' />
                        <span className='user-info'>My Orders</span>
                    </Link>
                </div>
                    {flagCartCounter(cartCounter)}
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