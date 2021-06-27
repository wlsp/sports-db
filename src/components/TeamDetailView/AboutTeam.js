import React from 'react';
import './AboutTeam.scss';

const AboutTeam = ({ heading, imgSrc, text1, text2 }) => {
  return (
    <div className='aboutTeam'>
      <h2>{heading}</h2>
      <article>
        <p>{text1}</p>
        <p>{text2}</p>
      </article>
      <div style={{ display: !imgSrc && 'none' }} className='imgHolder'>
        {imgSrc ? <img src={imgSrc} alt='aboutTeam' /> : null}
      </div>
    </div>
  );
};

export default AboutTeam;
