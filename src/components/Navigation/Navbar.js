import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Navbar.scss';
import ArrowLogo from '../../images/arrow-logo.svg';
import SearchIcon from '../../images/search-icon.svg';

const Header = ({ searchTerm, appState, history }) => {
  return (
    <nav>
      <Link to='/'>
        <span className='logo-box'>
          <img src={ArrowLogo} alt='' />
          <h4>Sports.db</h4>
        </span>
      </Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          history.push('/');
        }}
        className='search-box'
      >
        <span className='search-btn'>
          <img src={SearchIcon} alt='search-logo' />
        </span>
        <input
          className='search'
          type='text'
          value={appState}
          onChange={(e) => {
            searchTerm(e);
          }}
        ></input>
      </form>
    </nav>
  );
};

export default withRouter(Header);
