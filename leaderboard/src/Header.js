import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='header-name'>
                <h1 className='header-sup'>GILLY'S </h1>
                <p className='header-sub'> Koramangala</p>
            </div>
            <div className='logo'>
                <img src={require('./assets/logo.svg').default} alt='logo' className='logo-img' />
            </div>
        </div>
    );
};
export default Header;
