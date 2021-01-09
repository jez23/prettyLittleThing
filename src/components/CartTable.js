import React, { useEffect, useContext } from 'react';

import Context, { EmptyCartProduct } from '../contexts/Context';

import CartTableHeader from './CartTableHeader';
import ProductItem  from './ProductItem';
import SubTotal from './subTotal';

const CartTable = () => {
 
    const { products,
            setProducts,
            setSubTotal,
            setColours,
            setProductsGlobal} = useContext(Context) 
  
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/benirvingplt/products/products')
        .then(response => response.json())
        .then(data => {
            const colours = data.map(item => item.colour)
            setColours([...new Set(colours)]);
            const obj = data.map(item => new EmptyCartProduct(item.id, item.name, item.price, item.colour, item.img))
           
            setProductsGlobal(obj)
            return obj;
        })
        .then(objArray =>  {
            const subTotal = (array = []) => {
                return array.reduce((acc, cur) => {
                    return (acc + +cur.totalToPay) * cur.quantity;
                }, 0)
            }
            setProducts(objArray)
            setSubTotal(subTotal(objArray));
        })
        .catch(error =>  {throw error});

    }, []);

   const shoppingCartEmpty = () => {
       if(products.length > 0){
            return products.map( product => {
                return  <ProductItem item={product} key={product.id}/>
            })
       }
       else{
            return <h3>Your Bag is empty.</h3>
       }
   }

    return (
        <section className="cartTable">
                    <CartTableHeader />
                <div className="cartTable__products">
                    {
                        shoppingCartEmpty()
                    }
                </div>
               < SubTotal  />

        </section>
    )
}

export default CartTable;
