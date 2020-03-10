import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <div className='footer-main-head'>
                <div className='footer-wrapper'>
                    <div className='footer-wrapper-top-section'>
                        <div className='top-container'>
                            <div className='account-container'>
                                <div className='account-title'>MY ACCOUNT</div>
                                <li className='bullet'>Sign In</li>
                                <li className='bullet'>Register</li>
                                <li className='bullet'>Order Status</li>
                                <li className='bullet'>Returns</li>
                            </div>
                        </div>
                        <div className='top-container'>
                            <div className='help-container'>
                                <div className='help-title'>HELP</div>
                                <li className='bullet'>Ordering</li>
                                <li className='bullet'>Shipping</li>
                                <li className='bullet'>Returns</li>
                                <li className='bullet'>Sizing</li>
                                <li className='bullet'>Our Products</li>
                            </div>
                        </div>
                        <div className='top-container'>
                            <div className='about-us-container'>
                                <div className='about-us-title'>ABOUT US</div>
                                <li className='bullet'>Our Story</li>
                                <li className='bullet'>Media</li>
                                <li className='bullet'>Investors</li>
                                <li className='bullet'>Strategic Salers</li>
                                <li className='bullet'>lululemon collective</li>
                                <li className='bullet'>Sweat Collective</li>
                            </div>
                        </div>
                        <div className='top-container'>
                            <div className='science-of-feel-container'>
                                <div className='science-of-feel-title'>SCIENCE OF FEEL</div>
                                <li className='bullet'>Product care</li>
                            </div>
                        </div>
                    </div>
                    <div className='footer-wrapper-bottom-section'>
                        <div className='bottom-container'>
                            <div className='contact-us-container'>
                                <div className='contact-us-title'>Contact Us</div>
                                <li className='bullet'>Live Chat</li>
                                <li className='bullet'>1.877.263.9300</li>
                                <li className='bullet'>Email Sign Up</li>
                            </div>
                        </div>

                        <div className='bottom-container'>
                            <div className='careers-container'>
                                <div className='careers-title'>Careers</div>
                                <li className='bullet'>Sustainability and Social Impact</li>
                                <li className='bullet'>Here to Be</li>
                                <li className='bullet'>lululemon Apps</li>
                            </div>
                        </div>

                        <div className='bottom-container'>
                            <div className='careers-container'>
                                <div className='careers-title'>Careers</div>
                                <li className='bullet'>Sustainability and Social Impact</li>
                                <li className='bullet'>Here to Be</li>
                                <li className='bullet'>lululemon Apps</li>
                            </div>   
                        </div>  
                        <div className='bottom-container'>
                            <div className='footer-icons-container'>
                                <div className='icons-title'>Careers</div>
                                <li className='bullet'></li>
                                <li className='bullet'></li>
                                <li className='bullet'></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
        )
    }
}

export default Footer; 