import './App.css';

import TeamDetailView from './pages/TeamDetailView';
import Header from './components/Header/Header';
import LeagueDetailView from './pages/LeagueDetailView';

function App() {
  return (
    <div className='App'>
      <Header />
      <TeamDetailView />
      <LeagueDetailView></LeagueDetailView>
    </div>
  );
}

export default App;
