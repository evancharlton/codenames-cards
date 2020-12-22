import React from 'react';
import Landing from './Landing';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Game from './Game';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ddd',
        height: '100vh',
      }}
    >
      <Router>
        <Switch>
          <Route path="/:seed">
            <Game />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
