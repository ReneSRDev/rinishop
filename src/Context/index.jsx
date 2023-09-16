import { createContext, useState, useEffect } from "react";

const APIG = 'https://amazon23.p.rapidapi.com/product-search?query=videojuegos&country=MX';
const optionsGeneral = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2c77aa7073msh0c5e4553810d56cp1a0f4bjsn1cd896dd0ab5',
		'X-RapidAPI-Host': 'amazon23.p.rapidapi.com'
	}
};

async function fetchList(urlApi) {
    const response = await fetch(urlApi, optionsGeneral);
    const data = await response.json();
    return data;
}

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    /* Nav Menu - Define if the Nav Menu is open or close */
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
    const openNavMenu = () => setIsNavMenuOpen(true);
    const closeNavMenu = () => setIsNavMenuOpen(false);


    const [products, setProducts] = useState(null);

    useEffect(() => {
        async () => {
            try {
                setProducts(fetchList(APIG));
            } catch (error) {
                console.log('Hubo error');
            }
        }}, []
    )

    return (
        <ShopContext.Provider value= {{
            isNavMenuOpen,
            openNavMenu,
            closeNavMenu
        }}>
            {children}
        </ShopContext.Provider>
    )
}