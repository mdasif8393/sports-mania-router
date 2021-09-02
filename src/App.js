import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeagueDetails from './components/LeagueDetails/LeagueDetails';


function App() {
  return (
      <Router>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/league/:leagueId">
            <LeagueDetails></LeagueDetails>
          </Route>


          <Route path="*">
            <NotFound></NotFound>
          </Route>


        </Switch>
      </Router>
  );
}

export default App;
