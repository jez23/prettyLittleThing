import React, { useContext } from 'react';

import Context from  '../contexts/Context';


const ColourFilter = ( ) => {

    const { products, setProducts, colours, productsGlobal } = useContext(Context) 

    const filter = (e) => {
        const colouredProducts = [...productsGlobal]
        const matching = colouredProducts.filter(product => {
            return product.colour === e;
        })
        setProducts([...matching]);
    }
    return (
     
         <div className="colourFilter">
             <span>FILTER BY:</span>
            {products.length > 0 &&  <select onChange={(e) => filter(e.target.value)} id="ccolor" name="color">
                    <option value="" selected disabled hidden>Colour</option>
                    { colours.map( product => {
                        return <option value={product}>{product}</option>
                    })}
                </select>
            }
             <button className="btn white" onClick={() => setProducts(productsGlobal)}>Show All</button>
        </div> 
    
    )
}

export default ColourFilter;

