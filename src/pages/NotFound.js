import React from 'react';
import NotFoundPhoto from '../images/not-found-page.png';

const NotFound = () => {
  return (
    <div className='not-found'>
      <img src={NotFoundPhoto} alt='Not Found' />
    </div>
  );
};

export default NotFound;
