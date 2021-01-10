import React, { useEffect, useContext } from 'react';

import Context from '../contexts/Context';

import CartTableHeader from './CartTableHeader';
import ProductItem  from './ProductItem';
import SubTotal from './SubTotal';

const CartTable = () => {
 
    const { products,
            fetchRequest} = useContext(Context) 

  
    useEffect(() => {
            fetchRequest();
    }, []);

   const shoppingCartEmpty = (array) => {
       return array.length > 0? array.map(product => <ProductItem item={product} key={product.id}/>): <h3>Your Bag is empty.</h3>;
   }

    return (
        <section className="cartTable">
                    <CartTableHeader />
                <div className="cartTable__products">
                    {
                        shoppingCartEmpty(products)
                    }
                </div>
               < SubTotal  />

        </section>
    )
}

export default CartTable;