import React from 'react';
import './Navbar.scss';

import ArrowLogo from '../../images/arrow-logo.svg';
import SearchIcon from '../../images/search-icon.svg';


const Header = () => {
    return (
            <nav>
                <span className='logo-box'>
                    <img src={ArrowLogo} alt='' />
                    <h4>Sports.db</h4>
                </span>
                <form className='search-box'>
                    <span className='search-btn'>
                        <img src={SearchIcon} alt='' />
                    </span>
                    <input className='search' type='text'></input>
                </form>
            </nav>
    );
};

export default Header;
