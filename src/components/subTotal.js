import React, { useContext } from 'react';

import Context from '../contexts/Context';

const SubTotal = () => {

    const { subTotal,
       } = useContext(Context) 

    return (
        <div className="cartTable__subtotal">
            <span>Subtotal: £{ subTotal.toFixed(2) || 0}</span>
        </div>
    )
}

export default SubTotal;