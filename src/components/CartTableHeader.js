import React from 'react';

const cartTableHeader = () => {
    return (
        <div className="cartTableHeader">
                <div className="cartTableHeader__product">
                    <span>Product</span>
                </div>
                <div className="cartTableHeader__edit">
                    <span>Edit</span>
                </div>
                <div className="cartTableHeader__totals">
                    <span>Totals</span>
                </div>
        </div>
    )
}

export default cartTableHeader;