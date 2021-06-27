import React from 'react';
import './CompetitionsSocial.scss';

const CompetitionsSocial = ({ competitions, children }) => {
  return (
    <div className='competitionsSocial'>
      <div className='competitions'>{competitions}</div>
      <section>{children}</section>
    </div>
  );
};

export default CompetitionsSocial;
