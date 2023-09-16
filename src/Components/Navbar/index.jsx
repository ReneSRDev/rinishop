import { useContext } from "react"
import { NavLink } from 'react-router-dom'
import { ShopContext } from "../../Context"
import { BuildingStorefrontIcon, Bars3Icon, ShoppingBagIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import './style.css'

const Navbar = () => {
    const activeStyle = 'menu-active';
    const context = useContext(ShopContext);

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
                <div className={`header-menu ${!context.isNavMenuOpen ? 'menu-inactive': undefined}`}>
                    <XMarkIcon
                        className='menu-icon'
                        onClick={() => context.closeNavMenu()}
                    />
                    <ul className='menu-list'>
                        <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => isActive ? activeStyle : undefined}
                            onClick={() => context.closeNavMenu()}
                        >
                            All
                        </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/nintendo'
                                className={({ isActive }) => isActive ? activeStyle : undefined}
                                onClick={() => context.closeNavMenu()}
                            >
                                Nintendo
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/sony'
                                className={({ isActive }) => isActive ? activeStyle : undefined}
                                onClick={() => context.closeNavMenu()}
                            >
                                Sony
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/xbox'
                                className={({ isActive }) => isActive ? activeStyle : undefined}
                                onClick={() => context.closeNavMenu()}
                            >
                                X-Box
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/others'
                                className={({ isActive }) => isActive ? activeStyle : undefined}
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
                <div className='header-order'>
                    <span className='order-counter'>1</span>
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