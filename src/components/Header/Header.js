import React from 'react';
import './Header.scss';

import HeaderImg from '../../images/header-img.png';
import ArrowLogo from '../../images/arrow-logo.svg';
import UpArrow from '../../images/up-arrow.svg';
import SearchIcon from '../../images/search-icon.svg';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

const countries = [
  { label: 'Andorra', value: 1 },
  { label: 'United Arab Emirates', value: 2 },
  { label: 'Afghanistan', value: 3 },
  { label: 'Antigua and Barbuda', value: 4 },
  { label: 'Anguilla', value: 5 },
  { label: 'Albania', value: 6 },
  { label: 'Armenia', value: 7 },
  { label: 'Angola', value: 8 },
];
const sports = [
  { label: 'Soccer', value: 1 },
  { label: 'Motorsport', value: 2 },
  { label: 'Fighthing', value: 3 },
  { label: 'Baseball', value: 4 },
  { label: 'Basketball', value: 5 },
  { label: 'American Football', value: 6 },
  { label: 'Ice Hockey', value: 7 },
  { label: 'Golf', value: 8 },
];

const Header = () => {
  return (
    <header>
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
      <figure>
        <img src={HeaderImg} alt='' />
        <figcaption>
          <h1>Find Your League</h1>
        </figcaption>
      </figure>
      <aside>
        <img src={UpArrow} alt='' />
      </aside>

      {/* <ReactMultiSelectCheckboxes options={countries} />
      <ReactMultiSelectCheckboxes options={sports} /> */}

      <select name="all-countries" id="countries">
                <option value="">All Countries</option>
                <option value="andorra">Andorra</option>
                <option value="uae">United Arab Emirates</option>
                <option value="afghanistan">Afghanistan</option>
                <option value="antiguaBarbuda">Antigua and Barbuda</option>
                <option value="anguilla">Anguilla</option>
                <option value="albania">Albania</option>
                <option value="armenia">Armenia</option>
                <option value="angola">Angola</option>
            </select>
            <select name="all-sports" id="sports" placeholder="All Sports">
                <option value="">All Sports</option>
                <option value="soccer">Soccer</option>
                <option value="motorsport">Motorsport</option>
                <option value="fighthing">Fighthing</option>
                <option value="baseball">Baseball</option>
                <option value="basketball">Basketball</option>
                <option value="af">American Football</option>
                <option value="ih">Ice Hockey</option>
                <option value="golf">Golf</option>
            </select>

    </header>
  );
};

export default Header;
