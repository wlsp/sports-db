import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TeamDetailView from './pages/TeamDetailView';
import Navbar from './components/Navigation/Navbar';
import LeagueDetailView from './pages/LeagueDetailView';
import HomePage from './pages/HomePage';
import Select from './components/Select/Select';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/select" exact component={Select} />
        <Route path="/team" exact component={TeamDetailView} />
        <Route path="/league" exact component={LeagueDetailView} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
