import React, { useEffect, useContext } from 'react';

import Context from '../contexts/Context';

import CartTableHeader from './CartTableHeader';
import ProductItem  from './ProductItem';
import SubTotal from './SubTotal';

import Loader from './Loader';

const CartTable = () => {
 
    const { products,
            fetchRequest,
            loader} = useContext(Context) 

  
    useEffect(() => {
            fetchRequest();
    }, []);

   const shoppingCartEmpty = (array) => {
       return array.length > 0? array.map(product => <ProductItem item={product} key={product.id}/>): <h3>Your Bag is empty.</h3>;
   }

    return (
        <section className="cartTable">
                    <CartTableHeader />
                 { loader?  <Loader />  :
                     <div className="cartTable__products">
                    {
                       shoppingCartEmpty(products)
                    }
                </div> }
               < SubTotal  />

        </section>
    )
}

export default CartTable;