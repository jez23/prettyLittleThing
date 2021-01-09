import React, { useContext } from 'react';

import Context from '../contexts/Context';

const ProductItem = ({ item }) => {

    const { products, setProducts, setSubTotal } = useContext(Context);

    const increment = () => {
            const addOne = whichOneToChange("addItem")
            setProducts([...addOne]);
            setSubTotal(subTotal([...addOne]));
    }
    const decrement = () => {
        if(item.quantity > 0){
            const minusOne = whichOneToChange("removeItem");
            setProducts([...minusOne]);
            setSubTotal(subTotal([...minusOne]));
        } else{
            deleteItem();
        }
    }
    const deleteItem = () => {
        const filter = products.filter(product => product.id !== item.id);
        setProducts([...filter]);
        setSubTotal(subTotal([...filter]));
    }
    const changeQtyManually = (e) => {
        const change = [...products];
        const toChange = products.filter(product => product.id === item.id)
        toChange[0].quantity = e.target.value;
        const index = change.findIndex(el => el.id === item.id);
        change[index] = toChange[0];  
        setProducts([...change]);
        setSubTotal(subTotal([...change]));
    }
    const subTotal = (array) => {
        return array.reduce((acc, cur) => acc + +cur.totalToPay * cur.quantity, 0)
    }
    const whichOneToChange = (method) => {
        const change = [...products];
        const toChange = products.filter(product => product.id === item.id)
        toChange[0][method](); 
        const index = change.findIndex(el => el.id === item.id);
        change[index] = toChange[0];  
        return change; 
    }
    return (
        <div className="productItem">
            <div className="productItem__product">
                    <div className="productItem__product__image">
                        <img className="lazyload" src={item.img} alt={ item.name } />
                    </div>
                    <div className="productItem__product__meta">
                        <p><strong>{ item.name }</strong></p>
                        <p><strong>Price:</strong> £{ item.price }</p>
                        <p><strong>Color:</strong> { item.colour }</p>
                    </div>
            </div>
            <div className="productItem__edit">
                <div className="productItem__edit__increment">
                    <button className="btnCounter" onClick={decrement}>-</button>
                        <input  min="0" type="number" value={item.quantity} onChange={changeQtyManually} id="quantity"></input>
                    <button className="btnCounter" onClick={increment}>+</button>
                </div>
                <div className="productItem__edit__delete">
                    <button className="btnRemove" onClick={deleteItem}><i className="fa fa-trash" aria-hidden="true"></i> Remove</button>
                </div>
            </div>
            <div className="productItem__totals">
                    <span id="total">£{ item.total() }</span>
            </div>
        </div>
    )
}

export default ProductItem;