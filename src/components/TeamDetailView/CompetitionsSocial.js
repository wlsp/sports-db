import React from 'react';
import './CompetitionsSocial.scss';

const CompetitionsSocial = ({
  competitions,
  league1,
  league2,
  league3,
  league4,
  league5,
}) => {
  return (
    <div className='competitionsSocial'>
      <div>{competitions}</div>
      <ul>
        <li>{league1}</li>
        <li>{league2}</li>
        <li>{league3}</li>
        <li>{league4}</li>
        <li>{league5}</li>
      </ul>
    </div>
  );
};

export default CompetitionsSocial;
