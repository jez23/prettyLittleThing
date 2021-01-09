import React from 'react';

import { Route , Switch, HashRouter} from 'react-router-dom';
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
             <HashRouter>
                <div className="topNav"> 
                    <Header />
                    <PromotionalBanner />
                </div>
                    <Switch >
                        <Route path="/" exact component={Cart} />
                        <Route path="/checkout" component={Checkout} />
                    </Switch>
                <Footer />
            </HashRouter>
        </ConstProvider>  
    )
}

export default App;