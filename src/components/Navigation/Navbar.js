import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';
import ArrowLogo from '../../images/arrow-logo.svg';
import SearchIcon from '../../images/search-icon.svg';

const Header = ({ searchTerm, appState }) => {
  console.log('search Term:', searchTerm);
  return (
    <nav>
      <Link exact to='/'>
        <span className='logo-box'>
          <img src={ArrowLogo} alt='' />
          <h4>Sports.db</h4>
        </span>
      </Link>
      <form className='search-box'>
        <span className='search-btn'>
          <img src={SearchIcon} alt='' />
        </span>
        <input
          className='search'
          type='text'
          value={appState}
          onKeyDown={(e) => {
            searchTerm(e);
          }}
        ></input>
      </form>
    </nav>
  );
};

export default Header;
