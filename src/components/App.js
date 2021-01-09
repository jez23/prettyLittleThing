import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConstProvider } from '../contexts/Context';

import Header from './Header';
import PromotionalBanner from './PromotionalBanner';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Footer from './Footer';

import '../css/imports.css';

const App = () => {
    return (
        <ConstProvider>
             <BrowserRouter >
                <Header />
                <PromotionalBanner />
                    <Switch >
                        <Route path="/" exact component={Cart} />
                        <Route path="/checkout" exact component={Checkout} />
                    </Switch>
                <Footer />
            </BrowserRouter>
        </ConstProvider>  
    )
}

export default App;