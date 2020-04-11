import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            // <div className='footer-wrapper'>
                <div className='icons-container'>
                    <div className='icons'>
                        <a href="https://github.com/jlui820/luiluilemon">
                            <i className="fab fa-github-alt"></i>
                        </a>
                    </div>
                    <div className='icons'>
                        <a href="https://angel.co/jeffrey-lui-820">
                            <i className="fab fa-angellist"></i>
                        </a>
                    </div>
                    <div className='icons'>
                        <a href="https://www.linkedin.com/in/jeffrey-lui820/">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            // </div>
        )
    }
}

export default Footer; 