import React, { useState } from 'react';

const Context = React.createContext();

export function ConstProvider({children}){

    const [products, setProducts] = useState([]);
    const [subTotal, setSubTotal] = useState(0)  
    const [colours, setColours] = useState([]);
    const [productsGlobal, setProductsGlobal] = useState([]);
    const [loader, setLoader] = useState(true);
   
    const increment = (array, item) => {
       
        const addOne = whichOneToChange("addItem", array, item.id)
        setProducts([...addOne]);
        setSubTotal(subTotalCal([...addOne]));
    }
    const decrement = (array, item) => {
        if(item.quantity > 0){
            const minusOne = whichOneToChange("removeItem", array, item.id);
            setProducts([...minusOne]);
            setSubTotal(subTotalCal([...minusOne]));
        } else{
            deleteItem(array);
        }
    }
    const deleteItem = (array, item) => {
        const filter = array.filter(product => product.id !== item);
        setProducts([...filter]);
        setSubTotal(subTotalCal([...filter]));
    }
    const changeQtyManually = (e, array, item) => {
        const change = [...array];
        const toChange = change.filter(product => product.id === item.id)
        toChange[0].quantity = e.target.value;
        const index = change.findIndex(el => el.id === item.id);
        change[index] = toChange[0];  
        setProducts([...change]);
        setSubTotal(subTotalCal([...change]));
    }
    const subTotalCal = (array) => {
        return array.reduce((acc, cur) => acc + +cur.price * cur.quantity, 0)
    }
    const whichOneToChange = (method, array, id) => {
        const change = [...array];
        const toChange = change.filter(product => product.id === id);
        toChange[0][method](); 
        const index = change.findIndex(el => el.id === id);
        change[index] = toChange[0];  
        return change; 
    }


    const filter = (e) => {
        const colouredProducts = [...productsGlobal]
        const matching = colouredProducts.filter(product => {
            return product.colour === e;
        })
        setProducts([...matching]);
    }
    const showAll = (globalArray) => {
        setSubTotal(subTotalCal(globalArray));
        setProducts(globalArray)
    }

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
    const fetchRequest = () => {
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
            setProducts(objArray)
            setSubTotal(subTotalCal(objArray));
            setLoader(false)
        })
        .catch(error =>  {throw error});
    }   

    return(
        <Context.Provider value={{
            products, 
            setProducts,
            colours,
            setColours,
            productsGlobal, 
            setProductsGlobal,
            subTotal,
            setSubTotal,
            increment,
            decrement,
            changeQtyManually,
            deleteItem,
            EmptyCartProduct,
            fetchRequest,
            filter,
            showAll,
            loader,
            setLoader
        }}>
        {children}
        </Context.Provider>
    )

}

export default Context;
