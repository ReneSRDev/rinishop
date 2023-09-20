import { createContext, useState, useEffect } from "react";

const APIG = 'https://api.escuelajs.co/api/v1/products';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    /* Nav Menu - Define if the Nav Menu is open or close */
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
    const openNavMenu = () => setIsNavMenuOpen(true);
    const closeNavMenu = () => setIsNavMenuOpen(false);

    /* Select - State of the Select in home */
    const [valueSelectTop, setValueSelectTop] = useState(0);
    
    /* Screen - States of the window (Width/Height) */
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);
    const [heightScreen, setHeightScreen] = useState(window.innerHeight);

    /* Screen - Function that add or remove the Event to the resize in window */
    useEffect( () => {
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    /* Screen - Function that change the state of the sizes of windows */
    const handleResize = () => {
        setWidthScreen(window.innerWidth);
        setHeightScreen(window.innerHeight);
    }

    /* Select - Function that initialize the vale in select according to the screen */
    useEffect(() => {
        if (widthScreen < 640) {
            setValueSelectTop(5);
        }
        if (widthScreen >= 640 && widthScreen < 768) {
            setValueSelectTop(6);
        }
        if (widthScreen >= 768 && widthScreen < 1024) {
            setValueSelectTop(9);
        }
        if (widthScreen >= 1024 && widthScreen < 1280) {
            setValueSelectTop(12);
        }
        if (widthScreen >= 1280 && widthScreen < 1536) {
            setValueSelectTop(15);
        }
        if (widthScreen >= 1536) {
            setValueSelectTop(18);
        }
    }, [widthScreen]);

    /* Product to View - States that determine the numbers of product to view in the window */
    const [productToView, setProductToView] = useState(0);
    const [firstProductToView, setFirstProductToView] = useState(0);
    const [lastProductToView, setLastProductToView] = useState(0);

    /* Screen - Function that change the value in Select */
    useEffect(() => {
        setProductToView(valueSelectTop)
    }, [valueSelectTop]);
    
    /* Screen - Function that change the value in Last Product to View */
    useEffect(() => {
        setLastProductToView(productToView)
    }, [productToView]);

    /* Arrows - States that determine if the arrow are disables or not */
    const [leftArrow, setLeftArrow] = useState(false);
    const [rightArrow, setRightArrow] = useState(true);

    /* Arrows - Functions that add or subtract the number of products to be seen and determine from which number to which number they will be seen on the screen  */
    const subtractProductsToView = () => {
        setLastProductToView(firstProductToView);
        setFirstProductToView(firstProductToView - productToView);
        setRightArrow(true);

        if (firstProductToView - productToView <= 0) {
            setFirstProductToView(0);
            setLastProductToView(productToView);
            setLeftArrow(false);
        }
    }
    const addProductsToView = () => {
        setFirstProductToView(lastProductToView);
        setLastProductToView(lastProductToView + productToView); 
        setLeftArrow(true);

        if (lastProductToView + productToView > products.length) {
            setLastProductToView(products.length);
            setFirstProductToView(products.length - (products.length % productToView));
            setRightArrow(false);
            
            console.log(lastProductToView + productToView);
            console.log(productToView);
            console.log(lastProductToView);
            console.log(products.length);
        }
    }

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    const [productToShow, setProductToShow] = useState({});

    const [isProductsCartOpen, setIsProductsCartOpen] = useState(false);
    const openProductsCart = () => setIsProductsCartOpen(true);
    const closeProductsCart = () => setIsProductsCartOpen(false);

    const [productsCart, setProductsCart] = useState([]);

    const [order, setOrder] = useState([]);

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
            valueSelectTop,
            widthScreen,
            heightScreen,
            setFirstProductToView,
            firstProductToView,
            setLastProductToView,
            lastProductToView,
            setProductToView,
            productToView, 
            subtractProductsToView,
            addProductsToView,
            leftArrow,
            rightArrow,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            isProductsCartOpen,
            openProductsCart,
            closeProductsCart,
            productsCart,
            setProductsCart,
            order,
            setOrder,
            products,
            setProducts,
        }}>
            {children}
        </ShopContext.Provider>
    )
}