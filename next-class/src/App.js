import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Login, SignUp } from './Pages/index';

function App() {
  return (
      <Router>
        <div className="App">
          <div className='Content'>
            <Switch>
              <Route exact path='/'>
                <Login/>
              </Route>
              <Route exact path='/home'>
                <Home/>
              </Route>
              <Route exact path='/signup'>
                <SignUp/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>

  );
}

export default App;
