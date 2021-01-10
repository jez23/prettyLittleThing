import React, { useContext } from 'react';

import Context from '../contexts/Context';

const ProductItem = ({ item }) => {

    const { products,  
        increment,
        decrement,
        changeQtyManually,
        deleteItem} = useContext(Context);

  
    return (
        <div className="productItem">
            <div className="productItem__product">
                    <div className="productItem__product__image">
                        <img className="lazyload" src={item.img} alt={ item.name } />
                    </div>
                    <div className="productItem__product__meta">
                        <p><strong>{ item.name }</strong></p>
                        <p><strong>Price:</strong> £{ item.price }</p>
                        <p><strong>Colour:</strong> { item.colour }</p>
                    </div>
            </div>
            <div className="productItem__edit">
                <div className="productItem__edit__increment">
                    <button className="btnCounter" onClick={() => decrement(products, item)}>-</button>
                        <input  min="0" type="number" value={item.quantity} onChange={changeQtyManually} id="quantity"></input>
                    <button className="btnCounter" onClick={() => increment(products, item)}>+</button>
                </div>
                <div className="productItem__edit__delete">
                    <button className="btnRemove" onClick={() => deleteItem(products, item.id)}><i className="fa fa-trash" aria-hidden="true"></i> Remove</button>
                </div>
            </div>
            <div className="productItem__totals">
                    <span id="total">£{ item.total() }</span>
            </div>
        </div>
    )
}

export default ProductItem;