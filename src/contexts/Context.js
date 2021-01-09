import React, { useState } from 'react';

const Context = React.createContext();

export function ConstProvider({children}){
   
 
    const subTotalCalculate = (array) => {
        return array.reduce((acc, cur) => {
            return acc + cur.basketTotal;
        }, 0)
    }

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



export class EmptyCartProduct { 
    constructor(id, name, price, colour, img) {
        this.id = id;
        this.name =  name;
        this.quantity = 1;
        this.price = price;
        this.colour = colour;
        this.img = img;
        this.totalToPay = this.total();
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





