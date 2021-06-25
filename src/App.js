import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TeamDetailView from './pages/TeamDetailView';
import Header from './components/Header/Header';
import LeagueDetailView from './pages/LeagueDetailView';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/team" exact component={TeamDetailView} />
        <Route path="/league" exact component={LeagueDetailView} />
        <Route path="/" exact component={Header} />
      </Switch>
    </Router>
  );
}

export default App;
