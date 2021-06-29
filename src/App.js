import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TeamDetailView from './pages/TeamDetailView';
import Navbar from './components/Navigation/Navbar';
import LeagueDetailView from './pages/LeagueDetailView';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/team/:id' exact component={TeamDetailView} />
        <Route path='/league/:id' exact component={LeagueDetailView} />
        <Route path='/' exact component={HomePage} />
        <Route exact path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
