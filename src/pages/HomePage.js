import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Hero from '../components/Hero/Hero';
import Select from '../components/Select/Select';
import List from '../components/homePage/List';
import HomeCustomLink from '../components/homePage/HomeCustomLink';

const HomePage = () => {
  let [league, setLeague] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        let { data } = await axios.get(
          'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php'
        );
        setLeague(
          data.leagues.sort((a, b) =>
            a.strLeague.split(' ')[0] < b.strLeague.split(' ')[0] ? -1 : 1
          )
        );
      } catch (error) {
        console.log(error);
      }
    }
    getData();
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
    let counter = 0;
    for (let item of league) {
      let letter = item.strLeague.split('')[0];
      if (letter == myAlphabet[counter]) {
        letters[counter][letter].push(item);
      } else {
        counter++;
      }
    }
  }

  console.log('test 1', letters);

  return (
    <div>
      <Hero />
      <Select />
      {league
        ? letters.map((el, i) => {
            let letter = myAlphabet[i];
            return (
              el[letter].length > 0 && (
                <List heading={letter}>
                  {el[letter].map((o) => (
                    <HomeCustomLink
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
