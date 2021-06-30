import React, { useEffect, useState } from 'react';
import axios from 'axios';
import grasFoto from "../images/englishpremierleague.png"
import raceFoto from "../images/racing.jpg"
import fightFoto from "../images/fightRing.jpg"
import randomPic from "../images/random.jpg"


//import Header2 from '../components/LeagueDetailView/Header2';


import ImageEngLeague from '../components/LeagueDetailView/ImagePremierLeage';
import '../components/LeagueDetailView/LeagueDetailView.scss';
import CustomLink from '../components/LeagueDetailView/CustomLink';

function Country({ match }) {
    let [state, setState] = useState(null);


    function setPhoto(sport) {
        let gras = ["Soccer", "Baseball", "American Football", "Golf", "Rugby", "Tennis", "Criket", "Australian Football", "Volleyball",
            "Field Hockey", "Athletics", "Badminton"]

        let racing = ["Cycling", "Motorsport"]
        let fighting = ["Fighting"]

        if (gras.includes(sport)) {
            return grasFoto
        } else if (racing.includes(sport)) {
            return raceFoto

        } else if (fighting.includes(sport)) {
            return fightFoto
        } else {
            return randomPic
        }

    }


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
    }, [match.params.id]);

    console.log(match);
    return (
        <div className='country'>
            <ImageEngLeague
                heading1={state ? state[0].strLeague : ' '}
                heading2={state ? state[0].strSport : ' '}
                imageRasen={state ? setPhoto(state[0].strSport) : ' '}
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

        </div>
    );
}

export default Country;
