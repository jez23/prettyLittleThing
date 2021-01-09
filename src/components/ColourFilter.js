import React, { useContext } from 'react';

import Context from  '../contexts/Context';


const ColourFilter = ( ) => {

    const { setProducts, colours, productsGlobal, setSubTotal , products} = useContext(Context) 

    const filter = (e) => {
        const colouredProducts = [...productsGlobal]
        const matching = colouredProducts.filter(product => {
            return product.colour === e;
        })
        setProducts([...matching]);
    }
    const showAll = (globalArray, products) => {
        const subTotal = (array) => {
            return array.reduce((acc, cur) => acc + cur.price * cur.quantity , 0);
        }
        setSubTotal(subTotal(globalArray));
        setProducts(globalArray)
    }
  

    return (
         <div className="colourFilter">
             <span>FILTER BY:</span>
             <select onChange={(e) => filter(e.target.value)} id="ccolor" name="color">
                    <option value="" defaultValue hidden>Colour</option>
                    { colours.map( product => {
                        return <option value={product} key={product}>{product}</option>
                    })}
                </select>
             <button className="btn white" onClick={() => showAll(productsGlobal, products)}>Show All</button>
        </div> 
    
    )
}

export default ColourFilter;

