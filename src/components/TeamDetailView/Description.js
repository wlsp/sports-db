import React from 'react';
import './Description.scss';
import notFound from '../../images/not-found.png';

const Description = ({
  name,
  country,
  location,
  established,
  sport,
  descImg,
}) => {
  return (
    <div className='description'>
      <div>
        <h4>{name}</h4>
        <p>{country}</p>
        <span>Country</span>
        <p>{location}</p>
        <span>Location</span>
        <p>{established}</p>
        <span>Established</span>
        <p>{sport}</p>
        <span>Sport</span>
      </div>
      <div>
        {descImg ? (
          <img src={descImg} alt='description' />
        ) : (
          <img src={notFound} alt='description' />
        )}
      </div>
    </div>
  );
};

export default Description;
