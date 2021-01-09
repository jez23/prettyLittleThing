import React from 'react';

import Logo from './Logo';
import Settings from './Settings';

const Header = () => {
    return (
        <header className="header">
            <div className="header__currency">
                  
            </div>
            <div className="header__logo">
                    <Logo />
            </div>
            <div className="header__settings">
                    <Settings />
            </div>
        </header>
    )
}

export default Header;