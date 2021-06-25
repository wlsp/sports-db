import React, { useEffect } from 'react';
import axios from 'axios';
import Description from '../components/TeamDetailView/Description';
import CompetitionsSocial from '../components/TeamDetailView/CompetitionsSocial';
import AboutTeam from '../components/TeamDetailView/AboutTeam';
import arsenal from '../images/arsenal.png';


import './TeamDetailView.scss';

const TeamDetailView = () => {
  return (
    <div className='teamDetailView'>
      <Description />
      <CompetitionsSocial />
      <div className='teamDetailView-about'>
        <aside>
          <p>Description</p>
        </aside>
        <AboutTeam imgSrc={arsenal} />
      </div>
      <div className='teamDetailView-stadium'>
        <AboutTeam heading='Stadium' />
        <aside>
          <p>Emirates Stadium</p>
          <span>Home</span>
          <p>60338</p>
          <span>Capacity</span>
        </aside>
      </div>
      <CompetitionsSocial />
    </div>
  );
};

export default TeamDetailView;
