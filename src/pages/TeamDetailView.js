import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Description from '../components/TeamDetailView/Description';
import CompetitionsSocial from '../components/TeamDetailView/CompetitionsSocial';
import AboutTeam from '../components/TeamDetailView/AboutTeam';
import HomeCustomLink from '../components/homePage/HomeCustomLink';

import './TeamDetailView.scss';

const TeamDetailView = ({ match }) => {
  let [team, setTeam] = useState(null);

  // 133604

  useEffect(() => {
    async function getData() {
      try {
        let { data } = await axios.get(
          `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${match.params.id}`
        );
        setTeam(data.teams);
        console.log(team);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  function breakText(target) {
    let stringLength = Math.ceil(target.length / 2);
    let sliceIndex = target.indexOf(' ', stringLength);
    let text1 = target.substring(0, sliceIndex);
    let text2 = target.substring(sliceIndex);

    return {
      text1,
      text2,
    };
  }

  let firstText = team && breakText(team[0].strDescriptionEN);
  let stadiumText = team && breakText(team[0].strStadiumDescription);

  console.log(team);

  return (
    <div className='teamDetailView'>
      {team &&
        team.map((el) => {
          return (
            <React.Fragment key={el.idTeam}>
              <Description
                name={el.strAlternate.split(' ')[0]}
                country={el.strCountry}
                location={el.strStadiumLocation}
                established={el.intFormedYear}
                sport={el.strSport}
                descImg={el.strTeamJersey}
              />

              <CompetitionsSocial competitions='Competitions'>
                <div>{el.strLeague}</div>
                <div>{el.strLeague2}</div>
                <div>{el.strLeague3}</div>
                <div>{el.strLeague4}</div>
                <div>{el.strLeague5}</div>
              </CompetitionsSocial>
              <div className='teamDetailView-about'>
                <aside>
                  <p>Description</p>
                </aside>
                <AboutTeam
                  imgSrc={el.strTeamBadge}
                  text1={firstText.text1}
                  text2={firstText.text2}
                />
              </div>
              <div className='teamDetailView-stadium'>
                <AboutTeam
                  heading='Stadium'
                  text1={stadiumText.text1}
                  text2={stadiumText.text2}
                />
                <aside>
                  <p>{el.strStadium}</p>
                  <span>Home</span>
                  <p>60338</p>
                  <span>Capacity</span>
                </aside>
              </div>
              <CompetitionsSocial>
                <HomeCustomLink
                  linkTo={`https://${el.strTwitter}`}
                  mainText='Twitter'
                />

                <HomeCustomLink
                  linkTo={`https://${el.strYoutube}`}
                  mainText='YouTube'
                />

                <HomeCustomLink
                  linkTo={`https://${el.strWebsite}`}
                  mainText='Webseite'
                />

                <HomeCustomLink
                  linkTo={`https://${el.strFacebook}`}
                  mainText='Facebook'
                />

                <HomeCustomLink
                  linkTo={`https://${el.strInstagram}`}
                  mainText='Instagram'
                />
              </CompetitionsSocial>
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default TeamDetailView;
