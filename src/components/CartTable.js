import React, { useEffect, useContext } from 'react';

import Context from '../contexts/Context';

import CartTableHeader from './CartTableHeader';
import ProductItem  from './ProductItem';
import SubTotal from './SubTotal';

const CartTable = () => {
 
    const { products,
            setProducts,
            setSubTotal,
            setColours,
            setProductsGlobal} = useContext(Context) 

    class EmptyCartProduct { 
        constructor(id, name, price, colour, img) {
            this.id = id;
            this.name =  name;
            this.quantity = 0;
            this.price = price;
            this.colour = colour;
            this.img = img;
        }
        total() {
            return (this.quantity * this.price).toFixed(2);
        }
        addItem(){
            return this.quantity++
        }
        removeItem(){
            return this.quantity--;
        }
    }

  
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
            const subTotal = (array) => {
                return array.reduce((acc, cur) => acc + 0 * cur.quantity, 0);
            }
            setProducts(objArray)
            setSubTotal(subTotal(objArray));
        })
        .catch(error =>  {throw error});
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
