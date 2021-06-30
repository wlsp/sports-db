import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AxiosBaseUrl from '../utils/Axios';
import { v4 as uuidv4 } from 'uuid';

import '../pages/Select.scss';
import Hero from '../components/Hero/Hero';
import List from '../components/homePage/List';
import HomeCustomLink from '../components/homePage/HomeCustomLink';
import Loader from '../components/homePage/Loader';

const HomePage = ({ searchTerm }) => {
  let [league, setLeague] = useState(null);
  let [country, setCountry] = useState('');
  let [Sport, setSport] = useState('');
  let [allCountries, setAllCountries] = useState(null);
  let [allSports, setAllSports] = useState(null);
  const [isShown, setShown] = useState(false);
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    const abortCtrl = new AbortController();
    const opts = { signal: abortCtrl.signal };

    let url;

    if (!searchTerm) {
      if (country && Sport) {
        url = `search_all_leagues.php?c=${country}&s=${Sport}`;
      } else if (country) {
        url = `search_all_leagues.php?c=${country}`;
      } else {
        url = `all_leagues.php`;
      }
    } else {
      url = `searchteams.php?t=${searchTerm}`;
    }

    async function getData() {
      try {
        let { data } = await AxiosBaseUrl.get(url, opts);

        setLeague(data);
      } catch (error) {
        console.log(error);
      }
    }

    getData();

    return () => {
      abortCtrl.abort();
    };
  }, [Sport, country, searchTerm]);

  useEffect(() => {
    async function getCountry() {
      try {
        // Object destructuring = { data } // So bekommen wir nur die Daten die wir von der API brauchen!
        let { data } = await axios.get(
          'https://www.thesportsdb.com/api/v1/json/1/all_countries.php'
        );
        setAllCountries(data.countries);
      } catch (error) {
        console.log(error);
      }
    }
    getCountry();
    // Hier läuft das Array NUR einmal!
  }, []);

  useEffect(() => {
    async function getSport() {
      try {
        // Object destructuring = { data } // So bekommen wir nur die Daten die wir von der API brauchen!
        let { data } = await axios.get(
          'https://www.thesportsdb.com/api/v1/json/1/all_sports.php'
        );
        setAllSports(data.sports);
      } catch (error) {
        console.log(error);
      }
    }
    getSport();
    // Hier läuft das Array NUR einmal!
  }, []);

  function prepareQueryString(url) {
    let newUrl;
    let myArray = url.split(' ');
    if (myArray.length > 1) {
      newUrl = myArray.join('_');
    } else {
      newUrl = myArray.join(' ');
    }

    return newUrl;
  }

  function createAlphabet(start, end) {
    return new Array(end - start + 1)
      .fill(0)
      .map((el, i) => start + i)
      .map((el) => String.fromCharCode(el));
  }

  let myAlphabet = createAlphabet('A'.charCodeAt(0), 'Z'.charCodeAt(0));
  let letters = myAlphabet.map((el) => {
    return {
      [el]: [],
    };
  });

  if (league) {
    if (league.leagues) {
      let sortedState = league.leagues.sort((a, b) =>
        a.strLeague.split(' ')[0] < b.strLeague.split(' ')[0] ? -1 : 1
      );
      let counter = 0;
      for (let item of sortedState) {
        let letter = item.strLeague[0];
        if (letter === myAlphabet[counter]) {
          letters[counter][letter].push(item);
        } else {
          counter++;
        }
      }
    } else if (league.countrys) {
      let letter = league.countrys[0].strCountry[0];
      let indexToPush = myAlphabet.indexOf(letter);
      letters[indexToPush][letter] = league.countrys;
    }
  }

  let selectedCountry = country && (
    <span className='selectedCountrie'>
      <span className='close' onClick={() => setCountry('')}>
        X
      </span>{' '}
      {country.split('_').join(' ')}
    </span>
  );

  let selectedSport = Sport && (
    <span className='selectedSport'>
      <span className='close' onClick={() => setSport('')}>
        X
      </span>{' '}
      {Sport.split('_').join(' ')}
    </span>
  );

  let allLeagues = league ? (
    letters.map((el, i) => {
      let letter = myAlphabet[i];
      return (
        el[letter].length > 0 && (
          <List key={uuidv4()} heading={letter}>
            {el[letter].map((o) => (
              <HomeCustomLink
                key={o.idLeague}
                linkTo={`/league/${o.idLeague}`}
                mainText={o.strLeague}
                secondText={o.strSport}
              />
            ))}
          </List>
        )
      );
    })
  ) : (
    <Loader />
  );

  let allTeams =
    league && league.teams ? (
      league.teams.map((team) => {
        return (
          <HomeCustomLink
            key={team.idTeam}
            linkTo={`/team/${team.idTeam}`}
            mainText={team.strTeam}
            secondText={team.strSport}
          />
        );
      })
    ) : (
      <Loader />
    );

  let selectAllCountries =
    allCountries &&
    allCountries.map((countrie) => {
      return (
        <label key={uuidv4()}>
          <input
            type='checkbox'
            checked={country === prepareQueryString(countrie.name_en)}
            value={countrie.name_en}
            onChange={(checked) => {
              let newCountry = prepareQueryString(checked.target.defaultValue);
              setShown(!isShown);
              return setCountry(newCountry);
            }}
          />
          {countrie.name_en}
        </label>
      );
    });

  let selectAllSports =
    allSports &&
    country &&
    allSports.map((sport) => {
      return (
        <label key={uuidv4()}>
          <input
            type='checkbox'
            checked={Sport === sport.strSport}
            value={sport.strSport}
            onChange={(checked) => {
              let newSport = prepareQueryString(checked.target.defaultValue);
              setShow(!isShow);
              return setSport(newSport);
            }}
          />
          {sport.strSport}
        </label>
      );
    });

  return (
    <div>
      <Hero />
      <div className='select'>
        {selectedCountry}
        {selectedSport}
        <div className='form'>
          <div className='multiselect'>
            <div className='selectBox'>
              <select>
                <option>All Countries</option>
              </select>
              <div
                className='overSelect'
                onClick={() => setShown(!isShown)}
              ></div>
            </div>
            {isShown && <div className='checkboxes'>{selectAllCountries}</div>}
          </div>
        </div>
        <div className='form'>
          <div className='multiselect sports'>
            <div className='selectBox'>
              <select disabled={!country ? true : false}>
                <option>All Sports</option>
              </select>
              <div className='overSelect' onClick={() => setShow(!isShow)}>
                {' '}
              </div>
            </div>
            {isShow && (
              <div className='checkboxes sportsboxes'>{selectAllSports}</div>
            )}
          </div>
        </div>
      </div>

      {allLeagues}

      {allTeams}
    </div>
  );
};

export default HomePage;
