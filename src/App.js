import './App.css';
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';

import TeamDetailView from './pages/TeamDetailView';
import Navbar from './components/Navigation/Navbar';
import LeagueDetailView from './pages/LeagueDetailView';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

function App() {
  let [searchLetter, setSearchLetter] = useState('');
  let [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    let myInterval = setInterval(() => {
      setSearchTerm(searchLetter);
    }, 300);
    return () => {
      clearInterval(myInterval);
    };
  }, [searchLetter]);

  console.log('search term is: ', searchLetter);
  console.log('search term is: ', searchTerm);

  function handleSearchTerm(e) {
    console.log(e);

    setSearchLetter(e.target.value);
  }

  return (
    <Router>
      <Navbar searchTerm={handleSearchTerm} appState={searchLetter} />
      <Switch>
        <Route path='/team/:id' exact component={TeamDetailView} />
        <Route path='/league/:id' exact component={LeagueDetailView} />
        <Route
          path='/'
          exact
          component={() => <HomePage searchTerm={searchTerm} />}
        />
        <Route exact path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default withRouter(App);
