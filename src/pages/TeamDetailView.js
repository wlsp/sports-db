import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Description from '../components/TeamDetailView/Description';
import CompetitionsSocial from '../components/TeamDetailView/CompetitionsSocial';
import AboutTeam from '../components/TeamDetailView/AboutTeam';
import arsenal from '../images/arsenal.png';

import './TeamDetailView.scss';

const TeamDetailView = () => {
  let regex = /\s+/g;

  let [team, setTeam] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        let { data } = await axios.get(
          'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=133604'
        );
        setTeam(data.teams);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  let stringLength = team && Math.ceil(team[0].strDescriptionEN.length / 2);
  console.log('index of: ', stringLength);

  let sliceIndex = team && team[0].strDescriptionEN.indexOf(' ', stringLength);
  let text1 = team && team[0].strDescriptionEN.substring(0, sliceIndex);
  let text2 = team && team[0].strDescriptionEN.substring(sliceIndex);

  return (
    <div className='teamDetailView'>
      {team &&
        team.map((el) => {
          return (
            <>
              <Description
                name={el.strAlternate.split(' ')[0]}
                country={el.strCountry}
                location={el.strStadiumLocation}
                estab={el.intFormedYear}
                sport={el.strSport}
                descImg={el.strTeamJersey}
              />
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
            </>
          );
        })}
    </div>
  );
};

export default TeamDetailView;
