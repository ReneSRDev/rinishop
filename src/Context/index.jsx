import { createContext, useState, useEffect } from "react";

const APIG = 'https://api.escuelajs.co/api/v1/products';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    /* Nav Menu - Define if the Nav Menu is open or close */
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
    const openNavMenu = () => setIsNavMenuOpen(true);
    const closeNavMenu = () => setIsNavMenuOpen(false);


    const [products, setProducts] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(APIG)
                .then(response => response.json())
                .then(data => setProducts(data))
        }, 3000);
    }, []);

    return (
        <ShopContext.Provider value= {{
            isNavMenuOpen,
            openNavMenu,
            closeNavMenu,
            products,
            setProducts
        }}>
            {children}
        </ShopContext.Provider>
    )
}