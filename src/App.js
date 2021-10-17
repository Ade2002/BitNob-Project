import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/Home';
import AcademyPage from './pages/Academy';
import CommunityPage from './pages/Community';
import GetStartedPage from './pages/GetStarted';
import Header from './components/layout/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
    <Route path='/' exact>
      <HomePage />
    </Route>
    <Route path='/academy'>
      <AcademyPage />
    </Route>
    <Route path='/community'>
      <CommunityPage />
    </Route>
    <Route path='/get-started'>
      <GetStartedPage />
    </Route>
    </Switch>
    </div>
  );
}

export default App;
