import React from 'react';
import Description from '../components/TeamDetailView/Description';
import CompetitionsSocial from '../components/TeamDetailView/CompetitionsSocial';
import AboutTeam from '../components/TeamDetailView/AboutTeam';

import './TeamDetailView.scss';

const TeamDetailView = () => {
  return (
    <div className='teamDetailView'>
      <Description />
      <CompetitionsSocial />
      <div>
        <AboutTeam />
      </div>
    </div>
  );
};

export default TeamDetailView;
