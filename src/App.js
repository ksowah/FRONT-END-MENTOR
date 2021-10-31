import React from 'react';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
            <Route exact path='/'>
                <Login />
            </Route>
            <Route exact path='/home'>
                <Home/>
            </Route>
        </Switch>
    </Router>
    

    </>
  );
}

export default App;
