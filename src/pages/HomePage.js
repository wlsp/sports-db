import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Hero from '../components/Hero/Hero';
import Select from '../components/Select/Select';
import List from '../components/homePage/List';

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
  let letters = [];

  let list = [
    { A: [] },
    { B: [] },
    { C: [] },
    { D: [] },
    { E: [] },
    { F: [] },
    { G: [] },
    { H: [] },
    { I: [] },
    { J: [] },
    { K: [] },
    { L: [] },
    { M: [] },
    { N: [] },
    { O: [] },
    { P: [] },
    { Q: [] },
    { R: [] },
    { S: [] },
    { T: [] },
    { U: [] },
    { V: [] },
    { W: [] },
    { X: [] },
    { Y: [] },
    { Z: [] },
  ];

  let counter = 0;
  if (league) {
    for (let item of league) {
      let letter = item.strLeague.split('')[0];
      if (letter == myAlphabet[counter]) {
        list[counter][letter].push(item);
      } else {
        counter++;
      }
    }
  }

  console.log('test 1', list);

  return (
    <div>
      <Hero />
      <Select />
      <List />
      console.log(league)
      {league
        ? list.map((el, i) => {
            let letter = myAlphabet[i];
            return (
              el[letter].length > 0 && (
                <List heading={letter}>
                  {el[letter].map((o) => (
                    <p>{o.strLeague}</p>
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
