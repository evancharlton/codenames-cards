import React from 'react';
import Landing from './Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Game from './Game';

function App() {
  return (
    <Router
      basename={
        window.location.href.includes('localhost') ? '/' : '/codenames-cards/'
      }
    >
      <Switch>
        <Route path="/:seed">
          <Game />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
