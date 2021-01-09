import React, { useContext } from 'react';

import Context from '../contexts/Context';

const ProductItem = ({ item }) => {

    const { products, setProducts, setSubTotal } = useContext(Context);

    const increment = (array) => {
            const addOne = whichOneToChange("addItem", array)
            setProducts([...addOne]);
            setSubTotal(subTotal([...addOne]));
    }
    const decrement = (array) => {
        if(item.quantity > 0){
            const minusOne = whichOneToChange("removeItem", array);
            setProducts([...minusOne]);
            setSubTotal(subTotal([...minusOne]));
        } else{
            deleteItem(array);
        }
    }
    const deleteItem = (array) => {
        const filter = array.filter(product => product.id !== item.id);
        setProducts([...filter]);
        setSubTotal(subTotal([...filter]));
    }
    const changeQtyManually = (e, array) => {
        const change = [...array];
        const toChange = change.filter(product => product.id === item.id)
        toChange[0].quantity = e.target.value;
        const index = change.findIndex(el => el.id === item.id);
        change[index] = toChange[0];  
        setProducts([...change]);
        setSubTotal(subTotal([...change]));
    }
    const subTotal = (array) => {
        return array.reduce((acc, cur) => acc + +cur.price * cur.quantity, 0)
    }
    const whichOneToChange = (method, array) => {
        const change = [...array];
        const toChange = change.filter(product => product.id === item.id)
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
                    <button className="btnCounter" onClick={() => decrement(products)}>-</button>
                        <input  min="0" type="number" value={item.quantity} onChange={changeQtyManually} id="quantity"></input>
                    <button className="btnCounter" onClick={() => increment(products)}>+</button>
                </div>
                <div className="productItem__edit__delete">
                    <button className="btnRemove" onClick={() => deleteItem(products)}><i className="fa fa-trash" aria-hidden="true"></i> Remove</button>
                </div>
            </div>
            <div className="productItem__totals">
                    <span id="total">£{ item.total() }</span>
            </div>
        </div>
    )
}

export default ProductItem;