import React from 'react';
import { Link } from 'react-router-dom';

import SectionContainer from '../SectionContainer';
import PageTitle from '../PageTitle';
import CartTable from '../CartTable';
import ColourFilter from '../ColourFilter';

const Cart = () => {
    return (
        <SectionContainer>
            <PageTitle title="Your Bag" />
            <div className="continueShopping">
                    <div className="continueShopping__shop">
                        <a className="btn white" href="https://www.prettylittlething.com/view-all.html">Continue Shopping</a>
                    </div>
                    <div className="continueShopping__proceed">
                        <Link className="btn green" to="/checkout">Proceed to Checkout</Link>
                    </div>
            </div>
            <ColourFilter />
            <CartTable />
        </SectionContainer>
    )
}

export default Cart;