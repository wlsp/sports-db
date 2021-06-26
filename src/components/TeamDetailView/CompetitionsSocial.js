import React from 'react';
import './CompetitionsSocial.scss';

const CompetitionsSocial = ({
  competitions,
  input1,
  input2,
  input3,
  input4,
  input5,
}) => {
  return (
    <div className='competitionsSocial'>
      <div>{competitions}</div>
      <ul>
        <li>{input1}</li>
        <li>{input2}</li>
        <li>{input3}</li>
        <li>{input4}</li>
        <li>{input5}</li>
      </ul>
    </div>
  );
};

export default CompetitionsSocial;
