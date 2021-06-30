import React, { useEffect, useState } from 'react';
import axios from 'axios';

//import Header2 from '../components/LeagueDetailView/Header2';

import AstonVilla from '../components/LeagueDetailView/Header3AstonVilla';
import Header3Brentford from '../components/LeagueDetailView/Header3Brentford';
import ImageEngLeague from '../components/LeagueDetailView/ImagePremierLeage';
import '../components/LeagueDetailView/LeagueDetailView.scss';
import CustomLink from '../components/LeagueDetailView/CustomLink';

function Country({ match }) {
  let [state, setState] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        let { data } = await axios.get(
          `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${match.params.id}`
        );

        console.log(data);
        setState(data.teams);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  console.log(match);
  return (
    <div className='country'>
      <ImageEngLeague
        heading1={state ? state[0].strLeague : ' '}
        heading2={state ? state[0].strSport : ' '}
      ></ImageEngLeague>
      {state
        ? state.map((item) => {
            return (
              <CustomLink
                key={item.idTeam}
                mainText={item.strTeam}
                linkTo={`/team/${item.idTeam}`}
                secondText={item.strStadiumLocation}
              ></CustomLink>
            );
          })
        : ' '}
      <CustomLink
        mainText={state ? state[0].strTeam : ' '}
        secondText={state ? state[0].strStadiumLocation : ' '}
      ></CustomLink>
    </div>
  );
}

export default Country;
