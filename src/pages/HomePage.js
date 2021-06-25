import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Hero from '../components/Hero/Hero';

const HomePage = () => {
  let [league, setLeague] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        let { data } = await axios.get(
          'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php'
        );
        setLeague(data.leagues);
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
  //   for (let item of myAlphabet) {
  //     letters.push({
  //       `${item}`: [],
  //     });
  //   }

  console.log(letters);

  let test1 = [
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

  let test = league
    ? league.sort((a, b) =>
        a.strLeague.split(' ')[0] < b.strLeague.split(' ')[0] ? -1 : 1
      )
    : null;

  let counter = 0;
  if (league) {
    for (let item of test) {
      if (item.strLeague.split('')[0] == myAlphabet[counter]) {
        test1[counter][item.strLeague.split('')[0]].push(item);
      } else {
        counter++;
      }
    }
  }

  console.log('test 1', test1);

  return (
    <div>
      {/* {league
        ? test.map((el) => (
            <Link to='/etwas' style={{ color: 'white', display: 'block' }}>
              {el.strLeague}{' '}
              <span
                style={{
                  display: 'inlineBlock',
                  paddingLeft: '1rem',
                  fontSize: '10px',
                }}
              >
                {el.strSport}
              </span>
            </Link>
          ))
        : null} */}
      <Hero />
      {league
        ? test.map((el) => (
            <Link to='/etwas' style={{ color: 'white', display: 'block' }}>
              {el.strLeague}
            </Link>
          ))
        : null}
    </div>
  );
};

export default HomePage;
