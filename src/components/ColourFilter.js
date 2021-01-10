import React, { useContext } from 'react';

import Context from  '../contexts/Context';


const ColourFilter = ( ) => {

    const { colours, 
            productsGlobal, 
            filter,
            showAll } = useContext(Context);

    return (
         <div className="colourFilter">
             <span>FILTER BY:</span>
             <select onChange={(e) => filter(e.target.value)} id="ccolor" name="color">
                    <option value="" defaultValue hidden>Colour</option>
                    { colours.map( product => {
                        return <option value={product} key={product}>{product}</option>
                    })}
                </select>
             <button className="btn white" onClick={() => showAll(productsGlobal)}>Show All</button>
        </div> 
    
    )
}

export default ColourFilter;

