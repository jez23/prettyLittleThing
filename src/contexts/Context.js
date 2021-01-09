import React, { useState } from 'react';

const Context = React.createContext();

export function ConstProvider({children}){

    const [products, setProducts] = useState([]);
    const [subTotal, setSubTotal] = useState(0)  
    const [colours, setColours] = useState([]);
    const [productsGlobal, setProductsGlobal] = useState([]);

    return(
        <Context.Provider value={{
            products, 
            setProducts,
            colours,
            setColours,
            productsGlobal, 
            setProductsGlobal,
            subTotal,
            setSubTotal
        }}>
        {children}
        </Context.Provider>
    )

}

export default Context;







