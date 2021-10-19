import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/Home';
import AcademyPage from './pages/Academy';
import CommunityPage from './pages/Community';
import GetStartedPage from './pages/GetStarted';
import Header from './components/layout/Header';
import "./scss/style.scss"

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
      <div style={{ fontSize: "48px", color: "red" }}>Ademola</div>
    </div>
  );
}

export default App;
