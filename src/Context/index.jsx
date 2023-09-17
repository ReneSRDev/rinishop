import { createContext, useState, useEffect } from "react";

const APIG = 'https://api.escuelajs.co/api/v1/products';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    /* Nav Menu - Define if the Nav Menu is open or close */
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
    const openNavMenu = () => setIsNavMenuOpen(true);
    const closeNavMenu = () => setIsNavMenuOpen(false);

    const [productToView, setProductToView] = useState(10);
    const [firstProductToView, setFirstProductToView] = useState(0);
    const [lastProductToView, setLastProductToView] = useState(productToView);
    const [leftArrow, setLeftArrow] = useState(false);
    const [rightArrow, setRightArrow] = useState(true);

    const subtractProductsToView = () => {
        setLastProductToView(firstProductToView);
        setFirstProductToView(firstProductToView - productToView);
        setRightArrow(true);

        if (firstProductToView <= 0) {
            setFirstProductToView(0);
            setLastProductToView(productToView);
            setLeftArrow(false);
        }
    }
    const addProductsToView = () => {
        setFirstProductToView(lastProductToView);
        setLastProductToView(lastProductToView + productToView); 
        setLeftArrow(true);

        if (lastProductToView > products.length) {
            setLastProductToView(products.length);
            setFirstProductToView(products.length - productToView);
            setRightArrow(false);
        }
    }

    /* Products - State of the products */
    const [products, setProducts] = useState(null);

    /* Products - Function that extract the info of the products from the API */
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
            firstProductToView,
            lastProductToView,
            subtractProductsToView,
            addProductsToView,
            leftArrow,
            rightArrow,
            products,
            setProducts,
        }}>
            {children}
        </ShopContext.Provider>
    )
}