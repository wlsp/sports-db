import './App.css';
import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TeamDetailView from './pages/TeamDetailView';
import Navbar from './components/Navigation/Navbar';
import LeagueDetailView from './pages/LeagueDetailView';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

function App() {
  let [searchLetter, setSearchLetter] = useState('');

  function handleSearchTerm(e) {
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
          component={() => <HomePage searchTerm={searchLetter} />}
        />
        <Route exact path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
