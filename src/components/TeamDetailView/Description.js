import React from 'react';
import './Description.scss';
import descImg from '../../images/w1anwa.png';

const Description = () => {
  return (
    <div className='description'>
      <div>
        <h4>Arsenal</h4>
        <p>England</p>
        <span>Country</span>
        <p>Holloway, London</p>
        <span>Location</span>
        <p>1892</p>
        <span>Established</span>
        <p>Soccer</p>
        <span>Sport</span>
      </div>
      <div>
        <img src={descImg} alt='description' />
      </div>
    </div>
  );
};

export default Description;
