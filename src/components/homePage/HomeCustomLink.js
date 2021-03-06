import React from 'react';
import { Link } from 'react-router-dom';

import './HomeCustomLink.scss';

const HomeCustomLink = ({ linkTo, mainText, secondText }) => {
  return (
    <>
      <div className='homeCustomLink'>
        <span className='linkHolder'>
          <Link to={linkTo}>
            {mainText} <span>{secondText}</span>
          </Link>
          <span className='underline'></span>
        </span>
      </div>
    </>
  );
};

export default HomeCustomLink;
