// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Home = () => {
//   let [league, setLeague] = useState(null);
//   useEffect(() => {
//     async function getData() {
//       try {
//         let { data } = await axios.get(
//           'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php'
//         );
//         setLeague(data.leagues);
//         console.log(data)
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getData();
//   }, []);

//   let test = league
//     ? league.sort((a, b) =>
//         a.strLeague.split(' ')[0] < b.strLeague.split(' ')[0] ? -1 : 1
//       )
//     : null;

//   return (
//     <div>
//       { league ?
//       test.map((el) => (
//         <Link to='/etwas' style={{ color: 'white', display: 'block' }}>
//           {el.strLeague}
//         </Link>
//       )) :null}
//     </div>
//   );
// };

// export default Home;
