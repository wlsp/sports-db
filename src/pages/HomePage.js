import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import '../components/Select/Select.scss';
import Hero from '../components/Hero/Hero';
import List from '../components/homePage/List';
import HomeCustomLink from '../components/homePage/HomeCustomLink';

const HomePage = () => {
  let [league, setLeague] = useState(null);
  let [country, setCountry] = useState('');
  let [sport, setSport] = useState('');
  let [allCountries, setAllCountries] = useState(null);
  let [allSports, setAllSports] = useState(null);
  const [isShown, setShown] = useState(false);
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    let url;

    if (country && sport) {
      url = `https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=${country}&s=${sport}`;
    } else if (country) {
      url = `https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=${country}`;
    } else {
      url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
    }

    async function getData() {
      try {
        let { data } = await axios.get(url);
        console.log(url);
        console.log(data);
        setLeague(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [sport, country]);

  useEffect(() => {
    async function getCountry() {
      try {
        // Object destructuring = { data } // So bekommen wir nur die Daten die wir von der API brauchen!
        let { data } = await axios.get(
          'https://www.thesportsdb.com/api/v1/json/1/all_countries.php'
        );
        setAllCountries(data.countries);
        console.log(data);
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
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getSport();
    // Hier läuft das Array NUR einmal!
  }, []);

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
        let letter = item.strLeague.split('')[0];
        if (letter == myAlphabet[counter]) {
          letters[counter][letter].push(item);
        } else {
          counter++;
        }
      }
    } else if (league.countrys) {
      let counter = 0;
      for (let item of league.countrys) {
        let letter = item.strCountry.split('')[0];
        if (letter == myAlphabet[counter]) {
          letters[counter][letter].push(item);
        } else {
          counter++;
        }
      }
    }
  }

  console.log(league);
  console.log('test 1', letters);
  console.log('pripremljeni state: ', letters);

  return (
    <div>
      <Hero />
      <div className='select'>
        <span className='selectedCountrie'> Countrie </span>
        <span className='selectedSport'> Sport </span>
        <form>
          <div class='multiselect'>
            <div class='selectBox'>
              <select>
                <option>All Countries</option>
              </select>
              <div class='overSelect' onClick={() => setShown(!isShown)}></div>
            </div>
            {isShown && (
              <div className='checkboxes'>
                {allCountries &&
                  allCountries.map((countrie) => {
                    return (
                      <label>
                        <input type='checkbox' />
                        {countrie.name_en}
                      </label>
                    );
                  })}
              </div>
            )}
          </div>
        </form>
        <form>
          <div class='multiselect'>
            <div class='selectBox'>
              <select>
                <option>All Sports</option>
              </select>
              <div class='overSelect' onClick={() => setShow(!isShow)}>
                {' '}
              </div>
            </div>
            {isShow && (
              <div className='checkboxes'>
                {allSports &&
                  allSports.map((sport) => {
                    return (
                      <label>
                        <input type='checkbox' />
                        {sport.strSport}
                      </label>
                    );
                  })}
              </div>
            )}
          </div>
        </form>
      </div>
      {league
        ? letters.map((el, i) => {
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
        : null}
    </div>
  );
};

export default HomePage;
