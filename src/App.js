import './App.css';
import React, { useState } from 'react';

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

function App({ history }) {
  let [searchLetter, setSearchLetter] = useState('');

  console.log('search term is: ', searchLetter);

  function handleSearchTerm(e) {
    console.log(e);
    setSearchLetter(searchLetter + e.key);
    if (e.key === 'Enter') {
      history.push(`/${searchLetter}`);
    }
  }

  return (
    <Router>
      <Navbar searchTerm={handleSearchTerm} appState={searchLetter} />
      <Switch>
        <Route path='/team/:id' exact component={TeamDetailView} />
        <Route path='/league/:id' exact component={LeagueDetailView} />
        <Route path='/:id?' exact component={HomePage} />
        <Route exact path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default withRouter(App);
