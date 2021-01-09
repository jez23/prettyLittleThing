import React from 'react';

import paymentIcons from '../img/icons/paymentLogos.png'

const Footer = () => {
    return(
        <>
            <div className="footer__payments">
                <img src={paymentIcons} alt="Payment Methods" />
            </div>
           <footer className="footer">
                <div className="footer__help">
                    <h6>LET US HELP YOU</h6>
                    <ul>
                        <li>Help</li>
                        <li>Returns</li>
                        <li>Size Guide</li>
                        <li>Delivery</li>
                        <li>Royalty</li>
                        <li>Recycling Options</li>
                        <li>Clearpay</li>
                        <li>Klarna</li>
                        <li>Laybuy</li>
                    </ul>
                </div>
                <div className="footer__about">
                    <h6>ABOUT US</h6>
                    <ul>
                        <li>About Us</li>
                        <li>Giving Back</li>
                        <li>Diversity</li>
                        <li>Press Point</li>
                        <li>Careers</li>
                        <li>Students</li>
                        <li>Become An Affiliate</li>
                        <li>App Info</li>
                    </ul>
                </div>
                <div className="footer__information">
                    <h6>INFORMATION</h6>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className="footer__account">
                    <h6>MY ACCOUNT</h6>
                    <ul>
                        <li>Order History</li>
                        <li>Track My Order</li>
                        <li>My Wishlist</li>
                        <li>View Bag</li>
                        <li>Refer a friend</li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;